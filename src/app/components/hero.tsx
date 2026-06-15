import { Button } from "@/components/ui/button";
import { Mail, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative container mx-auto max-w-[1600px] px-6 py-12 lg:px-12 lg:py-20">
      <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2">
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
            with
            <span className="text-(--accent-text-dark)"> receipts.</span>
          </h1>
          <p className="text max-w-[50ch] text-left text-sm font-extralight text-(--ink-text-dark) md:text-base">
            OfferLoop turns the chaos of recruiter threads, take homes, and
            &quot;we&apos;ll be in touch&quot; into a single board with the
            numbers behind every decision. Plus an AI that drafts cover letters
            and runs interview prep.
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
              Trusted by candidates from
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
        <div className="relative container">
          <div className="">
            <Image
              src="/offerloop-dashboard.png"
              alt="offerloop dashboard"
              width={1200}
              height={900}
              className=""
            />
          </div>
          <div className="absolute -top-15 right-6 rotate-6">
            <Image
              src="/offerloop-interview-prep.png"
              alt="offerloop interview prep"
              width={300}
              height={300}
              className=""
            />
          </div>
          <div className="absolute bottom-12 left-0 -rotate-5">
            <Image
              src="/offerloop-ai-cover-letter.png"
              alt="offerloop ai cover letter"
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="mt-24 rounded-2xl bg-(--ink-text-dark) p-8">
        <div className="grid grid-cols-1 gap-8 text-(--card-background) md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-[10px] tracking-widest text-(--accent-text-medium) uppercase">
              The job search, by the numbers
            </p>
            <p className="font-semibold">
              Built on data from{" "}
              <span className="text-(--accent-text-medium)">487,210</span>{" "}
              tracked applications across{" "}
              <span className="text-(--accent-text-medium)">9,300</span>{" "}
              companies.
            </p>
          </div>

          <div className="flex flex-col justify-center border-white/15 md:border-l md:pl-8">
            <div className="text-4xl font-bold">
              +38
              <span className="text-base text-(--accent-text-medium)">%</span>
            </div>
            <p className="text-sm text-white/60">
              interview rate w/ AI letters
            </p>
          </div>

          <div className="flex flex-col justify-center border-white/15 lg:border-l lg:pl-8">
            <div className="text-4xl font-bold">
              5.4
              <span className="text-base text-(--accent-text-medium)">d</span>
            </div>
            <p className="text-sm text-white/60">
              avg. recruiter response time
            </p>
          </div>

          <div className="flex flex-col justify-center border-white/15 md:border-l md:pl-8">
            <div className="text-4xl font-bold">
              12.4
              <span className="text-base text-(--accent-text-medium)">k</span>
            </div>
            <p className="text-sm text-white/60">offers landed this quarter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
