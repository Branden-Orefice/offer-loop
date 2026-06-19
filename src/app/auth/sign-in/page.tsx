import Link from "next/link";
import { ArrowLeft, Mail, MoveRight } from "lucide-react";
import GlowOrb from "@/components/glow-orb";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const inboxCardItems = [
  {
    dot: "bg-(--accent-text-medium)",
    title: "Loom offer letter received",
    sub: "$218k base + equity · respond by 6/20",
  },
  {
    dot: "bg-(--success-text)",
    title: "Retool on-site scheduled",
    sub: "Fri · 4 loops, system design focus",
  },
  {
    dot: "bg-(--accent-text-light)",
    title: "Notion phone screen booked",
    sub: "Tue 2:00 PM PT · prep deck ready",
  },
];

const SignInPage = () => {
  return (
    <div className="grid min-h-dvh grid-cols-2">
      <div className="relative flex w-full flex-col overflow-hidden bg-(--ink-text-dark)">
        <div className="relative z-10 flex items-center justify-between p-10">
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

        <div className="z-10 flex flex-1 flex-col justify-between p-10">
          <div className="mt-16 space-y-16">
            <h3 className="text-[12px] tracking-widest text-(--accent-text-medium) uppercase">
              welcome back
            </h3>
            <h1 className="w-130 text-5xl font-bold text-(--card-background)">
              Turn applications into
              <span className="text-(--accent-text-medium)"> offers</span>.
            </h1>

            <div className="card-glass-background mt-8 w-130 flex-1 space-y-4 rounded-lg border p-5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] tracking-widest text-(--accent-text-medium) uppercase">
                  Inbox · Last 24h
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-(--success-text)" />
                  <p className="text-[10px] tracking-widest text-(--success-text) uppercase">
                    Live
                  </p>
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {inboxCardItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <span
                      className={`mt-1.5 size-2 shrink-0 rounded-full ${item.dot}`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-(--card-background)">
                        {item.title}
                      </p>
                      <p className="text-xs text-white/40">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex-col border-r border-white/15">
              <h2 className="text-3xl font-bold text-(--card-background)">
                7,210
              </h2>
              <p className="leading-widest mr-6 text-xs text-white/40 uppercase">
                Applications Tracked
              </p>
            </div>
            <div className="flex-col">
              <h2 className="text-3xl font-bold text-(--card-background)">
                400{" "}
                <span className="text-[16px] text-(--accent-text-medium)">
                  offers
                </span>
              </h2>
              <p className="leading-widest text-xs text-white/40 uppercase">
                Landed This Quarter
              </p>
            </div>
          </div>
        </div>
        <GlowOrb className="absolute -right-60 -bottom-60 size-[600px]" />
      </div>
      <div className="flex min-h-dvh flex-col">
        <div className="flex items-center justify-end gap-4 p-10">
          <p className="text-sm font-light text-(--ink-text-lighter)">
            New to OfferLoop?
          </p>
          <Link
            className="flex items-center border-b border-(--accent-text-dark) text-[14px] font-bold text-(--ink-text-dark)"
            href="/auth/sign-up"
          >
            Create account <MoveRight className="ml-2" size={12} />
          </Link>
        </div>

        <div className="flex flex-1 justify-center pt-28">
          <div className="w-full max-w-md space-y-4 px-10">
            <h4 className="tracking text-start text-xs tracking-widest text-(--accent-text-dark) uppercase">
              01 - sign in
            </h4>
            <h2 className="text-5xl font-bold text-(--ink-text-dark)">
              Pick up where you left off.
            </h2>
            <p className="text-sm font-light text-(--ink-text-light)">
              Use the inbox you applied with. We&apos;ll sync your account and
              get you back in the loop.
            </p>
            <form>
              <div className="space-y-4">
                <Button className="w-full cursor-pointer bg-(--ink-text-dark) p-5 hover:bg-(--ink-text-dark)/80">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="text-(--accent-text-dark)" />
                      <span>Continue with Gmail</span>
                    </div>

                    <p className="text-[10px] font-light tracking-widest text-(--accent-text-dark) uppercase">
                      Recommended
                    </p>
                  </div>
                </Button>

                <Button className="w-full cursor-pointer bg-(--card-background) p-5 hover:bg-(--card-background)/60">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="text-(--ink-text-dark)" />
                      <span className="text-(--ink-text-dark)">
                        Continue with Outlook
                      </span>
                    </div>
                  </div>
                </Button>
                <div className="mx-auto flex max-w-xs items-center gap-4">
                  <div className="h-px flex-1 bg-(--ink-text-light)/40" />

                  <span className="text-[10px] tracking-widest text-(--ink-text-light) uppercase">
                    or with email
                  </span>

                  <div className="h-px flex-1 bg-(--ink-text-light)/40" />
                </div>

                <FieldGroup className="flex flex-col">
                  <Field>
                    <FieldLabel
                      className="text-[10px] tracking-widest text-(--ink-text-lighter) uppercase"
                      htmlFor="input-group-email"
                    >
                      Email
                    </FieldLabel>
                    <InputGroup className="w-full bg-(--card-background) p-5">
                      <InputGroupInput
                        className="md:text-md text-sm"
                        id="input-group-email"
                        type="email"
                        required
                        name="input-group-email"
                        placeholder="you@email.com"
                      />
                    </InputGroup>
                  </Field>
                  <Field>
                    <div className="flex justify-between">
                      <FieldLabel
                        className="text-[10px] tracking-widest text-(--ink-text-lighter) uppercase"
                        htmlFor="input-group-password"
                      >
                        Password
                      </FieldLabel>
                      <Link href="/auth/forgot-password">
                        <FieldLabel className="hover:text-primary cursor-pointer text-xs text-(--ink-text-lighter)">
                          Forgot?
                        </FieldLabel>
                      </Link>
                    </div>
                    <InputGroup className="bg-(--card-background) p-5">
                      <InputGroupInput
                        className="md:text-md text-start text-sm"
                        id="input-group-password"
                        type="password"
                        required
                        name="input-group-password"
                        minLength={12}
                        maxLength={64}
                        placeholder="••••••••"
                      />
                    </InputGroup>
                  </Field>
                </FieldGroup>
                <div className="flex items-center justify-start gap-1.5">
                  <Checkbox
                    id="remember-me"
                    name="remember-me"
                    defaultChecked
                  />
                  <Label
                    htmlFor="remember-me"
                    className="text-xs text-(--ink-text-dark)/80"
                  >
                    Keep me signed in for 30 days
                  </Label>
                </div>
                <Button className="w-full cursor-pointer bg-(--accent-text-medium) p-5 hover:bg-(--ink-text-dark)/80">
                  <Link
                    className="flex items-center text-[14px] font-bold text-(--ink-text-dark)"
                    href="/"
                  >
                    Sign in <MoveRight className="ml-2" size={10} />
                  </Link>
                </Button>
              </div>
            </form>
            <div className="flex w-full items-center gap-2 rounded-2xl px-2 py-2 text-sm text-(--ink-text-lighter)">
              <div className="h-2 w-2 rounded-2xl bg-(--success-text)" />
              Reads your inbox - that&apos;s it.
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-10 text-xs font-light text-(--ink-text-light)">
          <p>@ 2026 OfferLoop, Inc.</p>

          <div className="flex items-center gap-8">
            <Link href="/">Privacy</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
