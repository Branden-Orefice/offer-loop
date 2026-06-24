"use client";

import Link from "next/link";
import { ArrowLeft, Check, Mail, MoveRight } from "lucide-react";
import GlowOrb from "@/components/glow-orb";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(12, "Password must be at least 12 characters"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpPage = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleSignUp = async (data: SignUpFormData) => {
    try {
      const name = `${data.firstName} ${data.lastName}`;
      const response = await authClient.signUp.email(
        {
          ...data,
          name,
          callbackURL: "/",
        },
        {
          onError: (context) => {
            console.error(context.error.message);
          },
        },
      );
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitGoogle = async () => {
    try {
      await authClient.signIn.social(
        {
          provider: "google",
          callbackURL: "/dashboard/home",
          errorCallbackURL: "/auth/sign-up",
        },
        {
          onRequest() {
            console.log("Signing up with Google...");
          },
          onError(context) {
            console.error(
              "There was an error signing up with Google.",
              context.error.message,
            );
          },
        },
      );
    } catch (error) {
      console.error(
        "An unexpected error occurred during Google sign-up:",
        error,
      );
    }
  };

  const checkMarkItems = [
    {
      title: "Auto-tracked system",
      sub: "Every application - screen - on-site - offer move, parsed from your inbox.",
    },
    {
      title: "AI interview prep & tailored guidance",
      sub: "Tuned by job requirements and your preferences.",
    },
    {
      title: "Read-only access",
      sub: "We never send emails. We never store your messages, ever.",
    },
  ];

  return (
    <div className="grid min-h-dvh grid-cols-2">
      <div className="relative flex w-full flex-col overflow-hidden bg-(--ink-text-dark)">
        <div className="relative z-10 flex items-center justify-between p-10">
          <GlowOrb className="-top-60 -right-60 size-[700px]" />
          <h2 className="z-30 text-2xl font-bold text-(--card-background)">
            OfferLoop
            <span className="font-bold text-(--accent-text-dark)">.</span>
          </h2>

          <Link
            className="flex items-center text-[12px] font-light tracking-widest text-white/80 uppercase"
            href="/"
          >
            <ArrowLeft className="mr-2" size={14} /> Back to site
          </Link>
        </div>

        <div className="z-10 flex flex-1 flex-col p-10">
          <div className="mt-20 max-w-xl space-y-10">
            <h3 className="text-[12px] tracking-widest text-(--accent-text-medium) uppercase">
              Start the loop
            </h3>
            <h1 className="w-130 text-5xl font-bold text-(--card-background)">
              Win your job search with a
              <span className="text-(--accent-text-medium)"> system</span>.
            </h1>

            <div className="space-y-10">
              <p className="text-md max-w-[52ch] leading-6 text-white/45">
                Every application has a next step. OfferLoop helps you track
                opportunities, stay on top of follow-ups, and prepare for
                interviews before they happen.
              </p>

              <div className="space-y-4">
                {checkMarkItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-(--accent-text-medium)">
                      <Check size={12} className="text-(--ink-text-dark)" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-(--card-background)">
                        {item.title}
                      </p>
                      <p className="text-xs leading-5 text-white/40">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <span className="text-[11px] font-normal tracking-widest text-white/60 uppercase">
              Built for candidates targeting companies like
            </span>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="text-base font-bold text-white/60">stripe</span>
              <span className="text-sm font-bold tracking-wider text-white/60 uppercase">
                Notion
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white/60">
                Linear
              </span>
              <span className="font-mono text-sm font-bold text-white/60">
                ▲ vercel
              </span>
              <span className="text-base font-bold text-white/60 italic">
                figma
              </span>
            </div>
          </div>
        </div>
        <GlowOrb className="absolute -bottom-60 -left-60 size-[600px]" />
      </div>

      <div className="flex min-h-dvh flex-col">
        <div className="flex items-center justify-end gap-4 p-10">
          <p className="text-sm font-light text-(--ink-text-lighter)">
            Already on OfferLoop?
          </p>

          <Link
            className="flex items-center border-b border-(--accent-text-dark) text-[14px] font-bold text-(--ink-text-dark)"
            href="/auth/sign-in"
          >
            Sign in <MoveRight className="ml-2" size={12} />
          </Link>
        </div>

        <div className="flex flex-1 justify-center pt-24">
          <div className="w-full max-w-md space-y-4 px-10">
            <h4 className="text-start text-xs tracking-widest text-(--accent-text-dark) uppercase">
              01 - create account
            </h4>

            <h2 className="text-5xl font-bold text-(--ink-text-dark)">
              Land your next offer.
            </h2>

            <p className="text-sm font-light text-(--ink-text-light)">
              Takes 30 seconds. Sync your inbox and start tracking every
              opportunity.
            </p>

            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(handleSignUp)}
            >
              <Button
                type="button"
                onClick={onSubmitGoogle}
                className="w-full cursor-pointer bg-(--ink-text-dark) p-5 hover:bg-(--ink-text-dark)/80"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="text-(--accent-text-dark)" />
                    <span>Sign up with Gmail</span>
                  </div>

                  <p className="text-[10px] font-light tracking-widest text-(--accent-text-dark) uppercase">
                    Fastest
                  </p>
                </div>
              </Button>

              <Button
                type="button"
                className="w-full cursor-pointer bg-(--card-background) p-5 hover:bg-(--card-background)/60"
              >
                <div className="flex w-full items-center gap-2">
                  <Mail className="text-(--ink-text-dark)" />
                  <span className="text-(--ink-text-dark)">
                    Sign up with Outlook
                  </span>
                </div>
              </Button>

              <div className="mx-auto flex max-w-xs items-center gap-4">
                <div className="h-px flex-1 bg-(--ink-text-light)/40" />
                <span className="text-[10px] tracking-widest text-(--ink-text-light) uppercase">
                  or with email
                </span>
                <div className="h-px flex-1 bg-(--ink-text-light)/40" />
              </div>
              <FieldGroup className="flex flex-row gap-4">
                <Field className="flex-1">
                  <FieldLabel
                    className="text-[10px] tracking-widest text-(--ink-text-lighter) uppercase"
                    htmlFor="input-group-first-name"
                  >
                    First Name
                  </FieldLabel>
                  <InputGroup className="w-full bg-(--card-background) p-5">
                    <InputGroupInput
                      className="md:text-md text-sm"
                      type="text"
                      id="input-group-first-name"
                      required
                      placeholder="First Name"
                      {...form.register("firstName")}
                    />
                  </InputGroup>
                </Field>

                <Field className="flex-1">
                  <FieldLabel
                    className="text-[10px] tracking-widest text-(--ink-text-lighter) uppercase"
                    htmlFor="input-group-last-name"
                  >
                    Last Name
                  </FieldLabel>
                  <InputGroup className="w-full bg-(--card-background) p-5">
                    <InputGroupInput
                      className="md:text-md text-sm"
                      type="text"
                      id="input-group-last-name"
                      required
                      placeholder="Last Name"
                      {...form.register("lastName")}
                    />
                  </InputGroup>
                </Field>
              </FieldGroup>

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
                      type="email"
                      id="input-group-email"
                      required
                      placeholder="you@email.com"
                      {...form.register("email")}
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel
                    className="text-[10px] tracking-widest text-(--ink-text-lighter) uppercase"
                    htmlFor="input-group-password"
                  >
                    Password
                  </FieldLabel>
                  <InputGroup className="w-full bg-(--card-background) p-5">
                    <InputGroupInput
                      className="md:text-md text-sm"
                      type="password"
                      id="input-group-password"
                      required
                      minLength={12}
                      maxLength={64}
                      placeholder="Min. 12 characters"
                      {...form.register("password")}
                    />
                  </InputGroup>
                </Field>
              </FieldGroup>

              <div className="flex items-center gap-1.5">
                <Checkbox id="terms-policy" required defaultChecked />
                <Label
                  htmlFor="terms-policy"
                  className="text-xs text-(--ink-text-dark)/80"
                >
                  I agree to the
                </Label>
                <Link href="/privacy" className="text-xs font-medium underline">
                  Privacy
                </Link>
                <span className="text-xs text-(--ink-text-dark)/80">and</span>
                <Link href="/terms" className="text-xs font-medium underline">
                  Terms
                </Link>
              </div>

              <Button
                className="w-full cursor-pointer bg-(--accent-text-medium) p-5 text-(--ink-text-dark) hover:bg-(--accent-text-medium)/80"
                type="submit"
                disabled={isSubmitting}
              >
                Create Account <MoveRight className="ml-2" size={12} />
              </Button>
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

export default SignUpPage;
