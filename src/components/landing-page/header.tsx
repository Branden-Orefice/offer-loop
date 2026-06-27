"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    label: "Product",
    href: "#products",
  },
  {
    id: 2,
    label: "How it works",
    href: "#how-it-works",
  },
  {
    id: 3,
    label: "AI Assist",
    href: "#ai-assist",
  },
  {
    id: 4,
    label: "Pricing",
    href: "#pricing",
  },
  {
    id: 5,
    label: "Changelog",
    href: "#changelog",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-(--accent-text-light)/40 px-6 py-6 md:px-12 md:py-8">
      <div className="container mx-auto flex max-w-[1600px] items-center justify-between">
        <h1 className="text-xl font-bold text-(--ink-text-dark)">
          OfferLoop
          <span className="font-bold text-(--accent-text-dark)">.</span>
        </h1>

        <nav className="ml-16 hidden flex-1 items-center gap-6 text-sm font-light lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-(--ink-text-dark)"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button
            variant="ghost"
            className="cursor-pointer text-sm font-light hover:bg-(--accent-background)"
          >
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
          <Button className="cursor-pointer bg-(--accent-text-medium) p-4 font-semibold text-(--ink-text-dark) transition-all duration-300 hover:bg-(--accent-text-medium)/80">
            Land your next offer
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-(--ink-text-dark)" />
          ) : (
            <Menu className="h-6 w-6 text-(--ink-text-dark)" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-(--accent-text-light)/20 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-(--ink-text-dark)"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-sm font-light"
            >
              <Link href="/auth/sign-in">Sign in</Link>
            </Button>
            <Button className="w-full bg-(--accent-text-medium) font-semibold text-(--ink-text-dark)">
              Land your next offer
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
