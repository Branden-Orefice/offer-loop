import { Button } from "@/components/ui/button";

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
  return (
    <header className="border-b border-(--accent-text-light)/40 px-12 py-8">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <h1 className="text-xl font-bold text-(--ink-text-dark)">
          OfferLoop
          <span className="font-bold text-(--accent-text-dark)">.</span>
        </h1>
        <nav className="ml-16 flex flex-1 items-center gap-6 text-sm font-light">
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
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="cursor-pointer text-sm font-light">
            Sign in
          </Button>
          <Button className="cursor-pointer bg-(--accent-text-medium) p-4 font-semibold text-(--ink-text-dark) transition-all duration-300 hover:bg-(--accent-text-medium)/80">
            Land your next offer
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
