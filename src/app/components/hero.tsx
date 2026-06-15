import { Button } from "@/components/ui/button";
import { Mail, Play } from "lucide-react";
import Image from "next/image";

const companies = [
  {
    id: 1,
    logo: "/stripe.png",
    name: "Stripe",
    width: 80,
    height: 80,
  },
  {
    id: 2,
    logo: "/notion.png",
    name: "Notion",
    width: 100,
    height: 80,
  },
  {
    id: 3,
    logo: "/linear.png",
    name: "Linear",
    width: 80,
    height: 80,
  },
  {
    id: 4,
    logo: "/vercel.png",
    name: "Vercel",
    width: 100,
    height: 80,
  },
  {
    id: 5,
    logo: "/figma.png",
    name: "Figma",
    width: 80,
    height: 80,
  },
];

const Hero = () => {
  return (
    <section className="container mx-auto max-w-[1600px] px-12 py-20 lg:px-0">
      <div className="mt-20 grid grid-cols-2">
        <div className="space-y-6">
          <div className="text mb-5 flex w-60 items-center gap-2 rounded-2xl border bg-(--card-background) px-2 py-2 text-sm text-(--ink-text-dark)">
            <div className="ml-3 h-3 w-3 animate-pulse rounded-2xl bg-(--success-text)" />
            Reads your inbox - that&apos;s it.
          </div>
          <h1 className="text-7xl font-bold text-wrap text-(--ink-text-dark)">
            Win your job
            <br />
            search
            <br />
            with
            <span className="text-(--accent-text-dark)"> receipts.</span>
          </h1>
          <p className="w-[50ch] text-left font-light">
            OfferLoop turns the chaos of recruiter threads, take homes, and
            &quot;we&apos;ll be in touch&quot; into a single board with the
            numbers behind every decision. Plus an AI that drafts cover letters
            and runs interview prep.
          </p>
          <div className="flex gap-4">
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
          <div>
            <span className="text-[11px] font-normal tracking-wide text-(--ink-text-lighter) uppercase">
              Trusted by candidates from
            </span>
            <div className="flex gap-4">
              {companies.map((company) => (
                <Image
                  key={company.id}
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className=""
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative container">
          <div className="">
            <Image
              src="/offerloop-dashboard.png"
              alt="offerloop dashboard"
              width={1200}
              height={700}
              className=""
            />
          </div>
          <div className="absolute -top-14 right-8 rotate-6">
            <Image
              src="/offerloop-interview-prep.png"
              alt="offerloop interview prep"
              width={300}
              height={300}
              className=""
            />
          </div>
          <div className="absolute -bottom-2 left-0 -rotate-5">
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
      <div className="mt-20 w-full rounded-2xl border bg-(--ink-text-dark) p-8">
        <div className="flex flex-col justify-between">
          <p className="mb-2 text-[10px] tracking-widest text-(--accent-text-medium) uppercase">
            The job search, by the numbers
          </p>
          <p className="font-semibold text-(--card-background)">
            Built on data from{" "}
            <span className="text-(--accent-text-medium)"> 487,210</span>{" "}
            tracked
          </p>
          <p className="font-semibold text-(--card-background)">
            applications across{" "}
            <span className="text-(--accent-text-medium)">9,300</span>{" "}
            companies.
          </p>
          <div className="flex items-center justify-evenly">
            <p className="text-4xl font-bold text-(--card-background)">
              +38
              <span className="text-[16px] text-(--accent-text-medium)">%</span>
              <p className="text-sm text-(--text-accent-foreground)">
                interview rate w/ AI letters
              </p>
            </p>
            <p className="text-4xl font-bold text-(--card-background)">
              5.4
              <span className="text-[16px] text-(--accent-text-medium)">d</span>
              <p className="text-sm text-(--text-accent-foreground)">
                avg. recruiter response
              </p>
            </p>
            <p className="text-4xl font-bold text-(--card-background)">
              12.4
              <span className="text-[16px] text-(--accent-text-medium)">k</span>
              <p className="text-sm text-(--text-accent-foreground)">
                offers landed this quarter
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
