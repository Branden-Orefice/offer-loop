"use client";

import { Button } from "@/components/ui/button";
import { Mail, Play } from "lucide-react";
import EmailAnimation from "./email-animation";
import LivePreview from "./live-preview";

const Hero = () => {
  return (
    <section className="relative container mx-auto max-w-[1600px] px-6 py-12 lg:px-12 lg:py-20">
      <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="text mb-5 flex w-full max-w-60 items-center gap-2 rounded-2xl border border-(--card-background) bg-(--card-background) px-2 py-2 text-sm text-(--ink-text-dark)">
            <div className="ml-3 h-3 w-3 animate-pulse rounded-2xl bg-(--success-text)" />
            Reads your inbox - that&apos;s it.
          </div>
          <h1 className="text-4xl font-bold text-wrap text-(--ink-text-dark) md:text-6xl lg:text-7xl">
            Win your job
            <br />
            search
            <br />
            with a<span className="text-(--accent-text-dark)"> system.</span>
          </h1>
          <p className="text max-w-[50ch] text-left text-sm font-extralight text-(--ink-text-dark) md:text-base">
            OfferLoop turns the chaos of job hunting into a system. Track every
            application, never miss a follow-up, remember what each company
            does, and prepare for interviews with AI-powered guidance. See the
            numbers behind your search and focus on the actions that lead to
            offers.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="cursor-pointer bg-(--ink-text-dark) p-6 text-(--card-background) transition-all duration-300 hover:bg-(--ink-text-dark)/90">
              <Mail className="text-(--accent-text-medium)" /> Connect Gmail
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer border-(--ink-text-dark) bg-(--accent-background) p-6 text-(--ink-text-dark) transition-all duration-300 hover:bg-(--accent-background)/30"
            >
              <Play /> 90-second tour
            </Button>
          </div>
          <div className="pt-4">
            <span className="text-[11px] font-normal tracking-widest text-(--ink-text-lighter) uppercase">
              Built for candidates targeting companies like
            </span>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="text-base font-bold text-(--ink-text-lighter)">
                stripe
              </span>
              <span className="text-sm font-bold tracking-wider text-(--ink-text-lighter) uppercase">
                Notion
              </span>
              <span className="text-lg font-extrabold tracking-tight text-(--ink-text-lighter)">
                Linear
              </span>
              <span className="font-mono text-sm font-bold text-(--ink-text-lighter)">
                ▲ vercel
              </span>
              <span className="text-base font-bold text-(--ink-text-lighter) italic">
                figma
              </span>
            </div>
          </div>
        </div>

        <EmailAnimation />
      </div>
      <div className="mt-24 rounded-2xl bg-(--ink-text-dark) p-8">
        <div className="grid grid-cols-1 gap-8 text-(--card-background) md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-[10px] tracking-widest text-(--accent-text-medium) uppercase">
              Job search, by the numbers
            </p>
            <p className="font-semibold">
              Every application, reply, interview, and offer becomes measurable,
              so you always know what&apos;s working.
            </p>
          </div>

          <div className="flex flex-col justify-center border-white/15 md:border-l md:pl-8">
            <div className="text-4xl font-bold">
              100
              <span className="text-base text-(--accent-text-medium)">%</span>
            </div>
            <p className="text-sm text-white/60">
              automatic application tracking
            </p>
          </div>

          <div className="flex flex-col justify-center border-white/15 lg:border-l lg:pl-8">
            <div className="text-4xl font-bold">
              24
              <span className="text-base text-(--accent-text-medium)">/7</span>
            </div>
            <p className="text-sm text-white/60">inbox monitoring</p>
          </div>

          <div className="flex flex-col justify-center border-white/15 md:border-l md:pl-8">
            <div className="text-4xl font-bold">
              0<span className="text-base text-(--accent-text-medium)">%</span>
            </div>
            <p className="text-sm text-white/60">missed follow-ups</p>
          </div>
        </div>
      </div>

      <LivePreview />

      <div className="container mt-8">
        <div className="border-border flex flex-col items-start justify-between gap-6 rounded-xl border bg-(--sidebar-background) p-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-xl font-bold text-(--ink-text-dark) md:text-2xl">
              Your inbox already has everything you need.
            </h2>
            <h2 className="text-xl font-bold text-(--ink-text-dark) md:text-2xl">
              OfferLoop turns it into your next offer.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button className="border border-(--ink-text-dark) bg-(--sidebar-background) text-(--ink-text-dark) transition-all duration-300 hover:bg-(--sidebar-background)/80 hover:text-(--ink-text-dark)/80">
              Browse pricing
            </Button>
            <Button className="bg-(--ink-text-dark) text-(--card-background) transition-all duration-300 hover:bg-(--ink-text-dark)/80 hover:text-(--card-background)/80">
              Land your next offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
