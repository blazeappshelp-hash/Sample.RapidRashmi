import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/podcasts", label: "Podcasts" },
  { to: "/radio", label: "Radio" },
  { to: "/sarees", label: "The Saree Room" },
  { to: "/mobileaccessories", label: "Mobile Accessories" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-bold uppercase tracking-tight">
          Rapid Rashmi
        </Link>
        <div className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-foreground px-4 py-2 text-background transition-colors hover:bg-primary"
          >
            Contact
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 items-center justify-center border border-border"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-foreground" />
            <span className="block h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 text-[11px] uppercase tracking-[0.2em]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-foreground px-4 py-3 text-center text-background"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
