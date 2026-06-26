export type ApplicationStatus =
  | "applied"
  | "interview_request"
  | "assessment"
  | "offer_received"
  | "rejected"
  | "status_update";

const statusIndicators = {
  applied: [
    "thank you for applying",
    "thank you for your application",
    "application received",
    "we received your application",
    "application has been received",
    "successfully applied",
    "application submitted",
  ],
  interview_request: [
    "schedule an interview",
    "invite you to interview",
    "would like to meet",
    "schedule a meeting",
    "speak with you",
    "discuss your application",
    "phone screen",
    "next steps",
  ],
  assessment: [
    "coding challenge",
    "technical challenge",
    "take-home",
    "take home",
    "skills assessment",
    "technical screening",
    "case study",
  ],
  offer_received: [
    "pleased to offer",
    "offer letter",
    "extending an offer",
    "welcome aboard",
    "selected for the position",
  ],
  rejected: [
    "not moving forward",
    "not successful",
    "position has been filled",
    "regret to inform",
    "unable to offer",
    "going in a different direction",
    "selected another candidate",
    "no longer being considered",
    "we have filled",
    "filled the open headcount",
  ],
};

const matches = (content: string, indicators: string[]) => {
  return indicators.some((indicator) => content.includes(indicator));
};

const determineApplicationStatus = (input: {
  subject?: string;
  snippet?: string;
  body?: string;
}): ApplicationStatus => {
  const content = `${input.subject ?? ""} ${input.snippet ?? ""} ${
    input.body ?? ""
  }`.toLowerCase();

  if (matches(content, statusIndicators.offer_received)) {
    return "offer_received";
  }

  if (matches(content, statusIndicators.interview_request)) {
    return "interview_request";
  }

  if (matches(content, statusIndicators.assessment)) {
    return "assessment";
  }

  if (matches(content, statusIndicators.rejected)) {
    return "rejected";
  }

  if (matches(content, statusIndicators.applied)) {
    return "applied";
  }

  return "status_update";
};

export default determineApplicationStatus;
