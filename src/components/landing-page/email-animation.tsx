"use client";

import { MailIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const EmailAnimation = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      defaults: {
        ease: "power1.inOut",
      },
    });

    timeline
      .fromTo(
        ".email-raised",
        {
          y: -22,
          scale: 0.96,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.35,
        },
      )
      .to(".email-raised", {
        opacity: 0.35,
        duration: 0.4,
        stagger: 0.35,
      })
      .fromTo(
        "#google-email-pop-out",
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 1,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
      )
      .to("#google-email-pop-out", {
        x: "200%",
        y: "550%",
        scale: 0.46,
        duration: 1.5,
        opacity: 0,
      })
      .fromTo(
        "#google-email-pop-in-animation",
        {
          opacity: 0,
          y: -8,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1.04,
          duration: 0.35,
        },
        "-=0.55",
      )
      .to("#google-email-pop-in-animation", {
        opacity: 1,
        scale: 1,
        duration: 0.18,
      })
      .fromTo(
        "#notion-email-pop-out",
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 1,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
      )
      .to("#notion-email-pop-out", {
        x: "0%",
        y: "500%",
        scale: 0.46,
        duration: 1.25,
        opacity: 0,
      })
      .fromTo(
        "#notion-email-pop-in-animation",
        {
          opacity: 0,
          y: -8,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1.04,
          duration: 0.35,
        },
        "-=0.55",
      )
      .to("#notion-email-pop-in-animation", {
        opacity: 1,
        scale: 1,
        duration: 0.18,
      })
      .fromTo(
        "#vercel-email-pop-out",
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 1,
        },
        {
          opacity: 1,
          duration: 0.35,
        },
      )
      .to("#vercel-email-pop-out", {
        x: "100%",
        y: "225%",
        scale: 0.46,
        duration: 1.5,
        opacity: 0,
      })
      .fromTo(
        "#vercel-email-pop-in-animation",
        {
          opacity: 0,
          y: -8,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1.04,
          duration: 0.35,
        },
        "-=0.55",
      )
      .to("#vercel-email-pop-in-animation", {
        opacity: 1,
        scale: 1,
        duration: 0.18,
      });
  }, []);

  return (
    <div className="relative container">
      <div className="rounded-2xl bg-(--card-background)">
        <div className="border-border flex items-center justify-between rounded-t-2xl border-b bg-(--sidebar-background) p-4">
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-xl bg-(--ink-text-light)" />
            <div className="h-2 w-2 rounded-xl bg-(--ink-text-light)" />
            <div className="h-2 w-2 rounded-xl bg-(--ink-text-light)" />
          </div>
          <p className="text-xs text-(--ink-text-light)">
            branden@gmail.com • OfferLoop
          </p>
        </div>
        <div className="p-6">
          <p className="text-xs text-(--ink-text-light)">New Email Detected</p>
          <div className="email-raised relative mt-2 w-full rounded-xl border-none bg-(--sidebar-background) p-6">
            <div className="relative flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--ink-text-dark) bg-(--ink-text-dark)">
                <MailIcon className="text-(--accent-text-medium)" size={24} />
              </div>
              <div className="ml-3 flex flex-col">
                <h2 className="font-bold text-(--ink-text-dark)">
                  Google Recruiting
                </h2>
                <p className="text-[10px] tracking-wide text-(--ink-text-light) uppercase">
                  Your offer from Google - $218k base + equity
                </p>
              </div>
            </div>
            <div
              id="google-email-pop-out"
              className="absolute top-14 left-6 z-50"
              style={{
                animation: "trail-glow 8s ease-in-out infinite",
              }}
            >
              <div className="flex flex-col rounded-lg border border-(--accent-text-medium) bg-(--card-background) p-2 sm:w-40 md:w-50">
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  Google
                </p>
                <p className="text-sm text-(--ink-text-light)">$218k</p>
              </div>
            </div>
          </div>
          <div className="email-raised relative mt-2 w-full rounded-xl border-none bg-(--sidebar-background) p-6">
            <div className="relative flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--ink-text-dark) bg-(--ink-text-dark)">
                <MailIcon className="text-(--accent-text-medium)" size={24} />
              </div>
              <div className="ml-3 flex flex-col">
                <h2 className="font-bold text-(--ink-text-dark)">Notion HR</h2>
                <p className="text-[10px] tracking-wide text-(--ink-text-light) uppercase">
                  Thank you for applying to Notion
                </p>
              </div>
            </div>
            <div
              id="notion-email-pop-out"
              className="absolute top-14 left-6 z-50"
              style={{
                animation: "trail-glow 8s ease-in-out infinite",
              }}
            >
              <div className="flex flex-col rounded-lg border border-(--accent-text-medium) bg-(--card-background) p-2 sm:w-40 md:w-50">
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  Notion
                </p>
                <p className="text-sm text-(--ink-text-light)">2d</p>
              </div>
            </div>
          </div>
          <div className="email-raised relative mt-2 w-full rounded-xl border-none bg-(--sidebar-background) p-6">
            <div className="relative flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--ink-text-dark) bg-(--ink-text-dark)">
                <MailIcon className="text-(--accent-text-medium)" size={24} />
              </div>
              <div className="ml-3 flex flex-col">
                <h2 className="font-bold text-(--ink-text-dark)">
                  Vercel Interview Invitation
                </h2>
                <p className="text-[10px] tracking-wide text-(--ink-text-light) uppercase">
                  We are pleased to invite you to our interview
                </p>
              </div>
            </div>
            <div
              id="vercel-email-pop-out"
              className="absolute top-14 left-6 z-50"
              style={{
                animation: "trail-glow 8s ease-in-out infinite",
              }}
            >
              <div className="flex flex-col rounded-lg border border-(--accent-text-medium) bg-(--card-background) p-2 sm:w-40 md:w-50">
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  Vercel
                </p>
                <p className="text-sm text-(--ink-text-light)">Fri</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-20">
            <p className="mb-2 text-xs text-(--ink-text-light)">
              Tracked Automatically
            </p>
            <div className="flex gap-2">
              <div className="flex w-full flex-col rounded-xl bg-(--sidebar-background) p-2">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Applied
                  </p>
                  <p className="text-sm text-(--ink-text-light)">42</p>
                </div>
                <div
                  id="notion-email-pop-in-animation"
                  className="flex w-full flex-col rounded-lg bg-(--card-background) p-2"
                >
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Notion
                  </p>
                  <p className="text-sm text-(--ink-text-light)">2d</p>
                </div>
              </div>
              <div className="flex w-full flex-col rounded-xl bg-(--sidebar-background) p-2">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Interview
                  </p>
                  <p className="text-sm text-(--ink-text-light)">3</p>
                </div>
                <div
                  id="vercel-email-pop-in-animation"
                  className="flex w-full flex-col rounded-lg bg-(--card-background) p-2"
                >
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Vercel
                  </p>
                  <p className="text-sm text-(--ink-text-light)">Fri</p>
                </div>
              </div>
              <div className="flex w-full flex-col rounded-xl bg-(--sidebar-background) p-2">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-(--accent-text-medium)">
                    Offer
                  </p>
                  <p className="text-sm text-(--accent-text-medium)">1</p>
                </div>
                <div
                  id="google-email-pop-in-animation"
                  className="flex w-full flex-col rounded-lg border border-(--accent-text-medium) bg-(--card-background) p-2"
                >
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Google
                  </p>
                  <p className="text-sm text-(--ink-text-light)">$218k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailAnimation;
