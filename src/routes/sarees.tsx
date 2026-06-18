import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import sareeFeature from "@/assets/saree-feature.webp";
import sareeTexture from "@/assets/saree-texture.jpg";
import s1 from "@/assets/saree-collection-1.webp";
import s2 from "@/assets/saree-collection-2.webp";
import s3 from "@/assets/saree-collection-3.webp";

export const Route = createFileRoute("/sarees")({
  head: () => ({
    meta: [
      { title: "The Saree Atelier — Rapid Rashmi" },
      { name: "description", content: "A curated atelier of handwoven Indian sarees, personally selected by Rapid Rashmi." },
      { property: "og:title", content: "The Saree Atelier — Rapid Rashmi" },
      { property: "og:description", content: "Handwoven sarees from master weavers across Banaras, Kanchipuram, and Chanderi." },
      { property: "og:url", content: "/sarees" },
    ],
    links: [{ rel: "canonical", href: "/sarees" }],
  }),
  component: Sarees,
});

const collection = [
  {
    image: s1,
    name: "Red Dola Viscose Saree",
    region: "Banaras",
    regularPrice: "Rs. 1,999",
    salePrice: "Rs. 1,299",
    link: "https://radhabyrapidrashmi.in/products/red-dal-viscose-saree-with-elephant-zari-border-traditional-festive-wear-saree-ss-112",
  },
  {
    image: s2,
    name: "Elegant Bridal Tissue Saree",
    region: "Chanderi",
    regularPrice: "Rs. 6,250",
    salePrice: "Rs. 3,750",
    link: "https://radhabyrapidrashmi.in/products/elegant-bridal-tissue-saree-with-rich-zari-weave-bt-02",
  },
  {
    image: s3,
    name: "Vibrant Orange Silk Saree",
    region: "Bhuj",
    regularPrice: "Rs. 2,999",
    salePrice: "Rs. 2,059",
    link: "https://radhabyrapidrashmi.in/products/vibrant-orange-silk-saree-with-black-gold-zari-border-ss-117",
  },
  {
    image: sareeFeature,
    name: "Semi Silk Saree",
    region: "Kanchipuram",
    regularPrice: "Rs. 2,565",
    salePrice: "Rs. 1,859",
    link: "https://radhabyrapidrashmi.in/products/semi-silk-saree-with-contrast-border-gold-zari-festive-wedding-wear-sarees-ss-119",
  },
];

const testimonials = [
  { quote: "It arrived in a wooden box, with a note from the weaver. I cried.", name: "Anjali R.", city: "Bangalore" },
  { quote: "The drape, the fall, the weight — every detail considered.", name: "Priya M.", city: "Mumbai" },
  { quote: "I wore it to my mother's 60th. She wore it after.", name: "Tanya S.", city: "Delhi" },
];

function Sarees() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-stone-900 py-32 text-stone-200">
        <div
          className="absolute inset-0 opacity-35"
          style={{ backgroundImage: `url(${sareeTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/85 to-stone-900/70" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary animate-fade-up">Radha by Rapid Rashmi</p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-7xl animate-fade-up [animation-delay:120ms]">
            Handwoven for the <span className="italic">slow wearer.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-stone-400 animate-fade-up [animation-delay:240ms]">
            A small, deliberate label. Each saree is sourced from a single weaver, named on the
            label, and shipped with its story.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">The Story</p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">From the loom, with intent.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The atelier began as a personal project — a search for a single perfect Banarasi
              for Rashmi's mother. What followed was four years of travel, conversation, and
              quiet relationship-building with master weavers across the country.
            </p>
            <p>
              Every piece in the collection is handpicked. There are no seasons, no sales, and
              no synthetic shortcuts. The atelier exists to keep these looms running.
            </p>
          </div>
        </div>
      </section>

      {/* Collection grid */}
      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-4xl tracking-tight">Featured Collection</h2>
            <a
              href="https://radhabyrapidrashmi.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-primary pb-1 text-[10px] font-medium uppercase tracking-widest"
            >
              Shop on the Store →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {collection.map((p) => (
              <a
  key={p.name}
  href={p.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group block"
>
                <div className="mb-5 aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={896}
                    height={1184}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-primary">{p.region}</p>
                <h3 className="mt-1 font-display text-xl group-hover:text-primary">{p.name}</h3>
                <div className="mt-2 flex items-center gap-3">
  <span className="text-sm text-muted-foreground line-through">
    {p.regularPrice}
  </span>
  <span className="text-lg font-semibold text-primary">
    {p.salePrice}
  </span>
</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 font-display text-4xl tracking-tight">From the wearers.</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="border-l-2 border-primary pl-6">
                <blockquote className="mb-6 font-display text-2xl italic leading-snug">
                  "{t.quote}"
                </blockquote>
                <figcaption className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.name} · {t.city}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-display text-4xl md:text-5xl">Visit the full store.</h2>
          <p className="mx-auto mb-10 max-w-xl text-background/70">
            The complete collection, custom orders, and weaver stories live on the atelier's
            dedicated boutique site.
          </p>
          <a
            href="https://radhabyrapidrashmi.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary px-10 py-4 text-[11px] uppercase tracking-widest text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            Open the Boutique →
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
