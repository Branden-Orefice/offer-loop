"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { EllipsisVerticalIcon, LogOutIcon } from "lucide-react";
import DisplayUserImage from "@/components/layout/display-user-image";

const DashboardUser = () => {
  const { session, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error handling sign-out:", error);
    }
  };

  const displayEmail = session?.user.email;
  const displayName = session?.user.name;
  const displayImage = session?.user.image;

  return (
    <div className="flex w-full items-center gap-2">
      {displayImage ? (
        <Image
          src={displayImage}
          alt={displayName}
          width={50}
          height={50}
          className="border-border size-8 shrink-0 rounded-md border"
        />
      ) : (
        <div className="size-8 shrink-0">{DisplayUserImage()}</div>
      )}
      <div className="flex min-w-0 flex-1 items-center justify-between">
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-sm font-semibold text-(--ink-text-lighter)">
            {displayName}
          </span>
          <span className="truncate text-[10px] text-(--ink-text-lighter)">
            {displayEmail}
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-(--accent-background)"
          >
            <EllipsisVerticalIcon className="size-3.5 text-(--ink-text-lightest)" />
          </button>

          {isMenuOpen && (
            <div className="border-border absolute -top-1.5 left-5 z-10 ml-2 w-32 rounded-md border bg-(--accent-background) p-1 shadow-md">
              <button
                onClick={handleSignOut}
                className="text-destructive hover:bg-destructive/10 flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors"
              >
                <LogOutIcon className="size-3.5" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
