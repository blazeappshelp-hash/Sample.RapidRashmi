import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rapid Rashmi" },
      { name: "description", content: "Business inquiries, collaborations, sponsorships, and press contact for Rapid Rashmi." },
      { property: "og:title", content: "Contact — Rapid Rashmi" },
      { property: "og:description", content: "Get in touch for business, collaborations, sponsorships, or press." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const inquiryTypes = ["Business", "Collaboration", "Sponsorship", "Press / Interview", "Saree Order"] as const;

function Contact() {
  const [type, setType] = useState<(typeof inquiryTypes)[number]>("Business");
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's begin a <span className="italic">conversation.</span></>}
        intro="For business inquiries, collaborations, sponsorships, or press — choose the right line below and we'll get back to you within 48 hours."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-10">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Direct lines</p>
              <ul className="space-y-3 text-sm">
                <li><span className="text-muted-foreground">Business · </span><a className="hover:text-primary" href="mailto:hello@rapidrashmi.com">hello@rapidrashmi.com</a></li>
                <li><span className="text-muted-foreground">Press · </span><a className="hover:text-primary" href="mailto:press@rapidrashmi.com">press@rapidrashmi.com</a></li>
                <li><span className="text-muted-foreground">Atelier · </span><a className="hover:text-primary" href="mailto:atelier@rapidrashmi.com">atelier@rapidrashmi.com</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Social</p>
              <ul className="space-y-3 text-sm">
                <li><a className="hover:text-primary" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="hover:text-primary" href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a className="hover:text-primary" href="https://spotify.com" target="_blank" rel="noopener noreferrer">Spotify</a></li>
                <li><a className="hover:text-primary" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Studio</p>
              <p className="text-sm text-muted-foreground">
                Indiranagar, Bengaluru<br />
                By appointment only
              </p>
            </div>
          </aside>

          <form
            className="lg:col-span-8 border border-border bg-card p-8 md:p-12"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Inquiry type</p>
            <div className="mb-10 flex flex-wrap gap-2">
              {inquiryTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`border px-4 py-2 text-[11px] uppercase tracking-widest transition-colors ${
                    type === t ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company / Organisation" name="company" />
              <Field label="Phone (optional)" name="phone" type="tel" />
            </div>

            <div className="mt-6">
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Your message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                maxLength={2000}
                className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
                placeholder={`Tell us a little about your ${type.toLowerCase()} inquiry…`}
              />
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">
                We reply within 48 hours, Mon–Fri.
              </p>
              <button
                type="submit"
                className="bg-foreground px-10 py-4 text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-primary"
              >
                {sent ? "Message sent ✓" : "Send Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
