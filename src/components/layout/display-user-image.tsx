"use client";

import * as React from "react";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const DisplayUserImage = () => {
  const { session } = useAuth();

  const source = session?.user.image ?? null;

  if (source) {
    return (
      <Image
        alt="user"
        src={source}
        width={32}
        height={32}
        className="border-border size-8 rounded-lg border object-cover"
      />
    );
  }

  return (
    <div className="border-border bg-muted flex size-8 items-center justify-center rounded-lg border">
      <CircleUserRound className="text-muted-foreground size-4" />
    </div>
  );
};

export default DisplayUserImage;
