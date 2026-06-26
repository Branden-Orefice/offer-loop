import determineApplicationStatus from "./determine-application-status";

type GmailHeader = {
  name: string;
  value: string;
};

type GmailMessageResponse = {
  id: string;
  threadId: string;
  snippet?: string;
  internalDate?: string;
  labelIds?: string[];
  payload: {
    headers: GmailHeader[];
  };
};

export type NormalizedGmailMessage = {
  id: string;
  threadId: string;
  from?: string;
  subject?: string;
  date?: string;
  snippet?: string;
  status: ReturnType<typeof determineApplicationStatus>;
};

const getHeader = (headers: GmailHeader[], name: string) => {
  return headers.find(
    (header) => header.name.toLowerCase() === name.toLowerCase(),
  )?.value;
};

const fetchGmailMessages = async (
  userAccessToken: string,
): Promise<NormalizedGmailMessage[]> => {
  const query = encodeURIComponent(`
    newer_than:60d
    (
      from:jobs-noreply@linkedin.com
      OR from:indeedapply@indeed.com
      OR from:noreply@indeed.com
      OR from:greenhouse.io
      OR from:noreply@ziprecruiter.com
      OR from:no-reply@ashbyhq.com
      OR from:@myworkday.com
      OR from:autoreply@talent.icims.com
      OR subject:(application OR interview OR recruiter OR offer OR "next steps" OR "phone screen")
    )
    -category:promotions
  `);

  const listResponse = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=25&q=${query}`,
    {
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    },
  );

  if (!listResponse.ok) {
    const errorText = await listResponse.text();
    throw new Error(`Gmail list error: ${errorText}`);
  }

  const listData = (await listResponse.json()) as {
    messages?: { id: string }[];
  };

  if (!listData.messages?.length) {
    return [];
  }

  const messages = await Promise.all(
    listData.messages.map(async ({ id }) => {
      const response = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date`,
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
          },
        },
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gmail message error: ${errorText}`);
      }

      const gmailMessage = (await response.json()) as GmailMessageResponse;

      const headers = gmailMessage.payload.headers;

      const from = getHeader(headers, "From");
      const subject = getHeader(headers, "Subject");
      const date = getHeader(headers, "Date");

      const status = determineApplicationStatus({
        subject,
        snippet: gmailMessage.snippet,
      });

      return {
        id: gmailMessage.id,
        threadId: gmailMessage.threadId,
        from,
        subject,
        date,
        snippet: gmailMessage.snippet,
        status,
      };
    }),
  );

  return messages;
};

export default fetchGmailMessages;
