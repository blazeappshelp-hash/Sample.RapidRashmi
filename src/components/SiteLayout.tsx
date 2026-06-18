import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-background pt-20 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary animate-fade-up">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl animate-fade-up [animation-delay:120ms]">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:240ms]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
