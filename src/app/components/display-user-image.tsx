"use client";

import * as React from "react";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";

const DisplayUserImage = (): React.ReactNode => {
  const { session } = useAuth();

  const source = session?.user.image ?? null;
  if (source) {
    return (
      <Image
        alt="user"
        src={source}
        className="border-border size-full rounded-lg border object-cover"
      />
    );
  }
  return (
    <div className="bg-muted border-border flex size-full items-center justify-center rounded-lg border">
      <CircleUserRound className="text-muted-foreground size-1/2" />
    </div>
  );
};

export default DisplayUserImage;
