import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GlowOrb from "@/components/glow-orb";
import { Card } from "@/components/ui/card";
const SignInPage = () => {
  return (
    <div className="grid min-h-dvh grid-cols-2">
      <div className="container w-full bg-(--ink-text-dark)">
        <div className="relative flex items-center justify-between p-10">
          <GlowOrb className="-top-60 -left-60 size-[700px]" />
          <h2 className="z-30 text-2xl font-bold text-(--card-background)">
            OfferLoop
            <span className="font-bold text-(--accent-text-dark)">.</span>
          </h2>

          <Link
            className="flex items-center text-[12px] font-light tracking-widest text-white/60 uppercase"
            href="/"
          >
            <ArrowLeft className="mr-2" size={14} /> Back to site
          </Link>
        </div>

        <div className="mt-20 space-y-6 p-10">
          <h3 className="text-[12px] tracking-widest text-(--accent-text-medium) uppercase">
            welcome back
          </h3>
          <h1 className="w-130 text-5xl font-bold text-(--card-background)">
            Your pipeline didn&apos;t stop while you were away -{" "}
            <span className="text-(--accent-text-medium)">3 new updates</span>.
          </h1>

          <div className="w-130">
            <Card>
              <div>
                <p>Loom - offer letter received</p>
                <p>Retool - on-site scheduled</p>
                <p>Notion - phone screen booked</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SignInPage;
