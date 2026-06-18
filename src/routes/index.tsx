import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroPortrait from "@/assets/media.jpg";
import sareeFeature from "@/assets/saree-feature.webp";
import sareeTexture from "@/assets/saree-texture.jpg";
import podcast1 from "@/assets/podcast-1.jpg";
import podcast2 from "@/assets/podcast-2.jpg";
import podcast3 from "@/assets/podcast-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rapid Rashmi — Voice, Stories & Heritage" },
      { name: "description", content: "Official digital home of Rapid Rashmi: podcasts, radio, media, and the handwoven Saree Atelier." },
      { property: "og:title", content: "Rapid Rashmi — Voice, Stories & Heritage" },
      { property: "og:description", content: "Podcasts, radio, media, and a curated saree atelier." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      
    ],
  }),
  component: Index,
});

const stats = [
  { value: "550k+", label: "Subscribers" },
  { value: "450+", label: "Episodes" },
  { value: "15Y+", label: "On Air" },
  { value: "25Cr+", label: "Audience" },
];

const episodes = [
  {
    image: podcast1,
    num: "Episode #78",
    title: "Beyond Labels",
    desc: "Is Society Programming Your Mind? Conditioning, Manipulation & Manifestation Explained",
  },
  {
    image: podcast2,
    num: "Episode #75",
    title: "Beyond Anger",
    desc: "How Trauma Changes Us Forever: Digital Era Challenges, Social Anxiety, and Healthy Mind Tips",
  },
  {
    image: podcast3,
    num: "Episode #73",
    title: "Wildlife Uncovered",
    desc: "Inside the Mind of Wildlife: How Elephants Think, Survive & Communicate",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative animate-scale-in">
              <img
                src={heroPortrait}
                alt="Portrait of Rapid Rashmi in a recording studio"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-black/5"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:mb-12 animate-fade-up [animation-delay:200ms]">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Media Personality & Entrepreneur
            </p>
            <h1 className="mb-8 font-display text-6xl leading-[0.9] tracking-tighter md:text-8xl">
              Rapid <span className="font-normal italic">Rashmi</span>
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Unfiltered conversations, cultural archives, and the timeless art of the drape.
              Connecting millions through voice and weave.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/podcasts"
                className="bg-primary px-8 py-4 text-center text-[11px] uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground"
              >
                Watch Podcasts
              </Link>
              <Link
                to="/radio"
                className="border border-border px-8 py-4 text-center text-[11px] uppercase tracking-widest text-foreground transition-colors hover:bg-card"
              >
                Listen to Radio
              </Link>
              <Link
                to="/sarees"
                className="border border-border px-8 py-4 text-center text-[11px] uppercase tracking-widest text-foreground transition-colors hover:bg-card"
              >
                Explore Sarees
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-border py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-border">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-4 text-center">
              <span className="mb-1 font-mono text-3xl">{s.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Podcast Rail */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="mb-4 font-display text-4xl tracking-tight">Just Curious India Podcasts</h2>
              <p className="text-sm text-muted-foreground">
                Latest episodes featuring global icons and local legends.
              </p>
            </div>
            <Link
              to="/podcasts"
              className="shrink-0 border-b border-primary pb-1 text-[10px] font-medium uppercase tracking-widest"
            >
              All Episodes
            </Link>
          </div>
          <div className="no-scrollbar -mx-6 flex gap-8 overflow-x-auto px-6 pb-8">
            {episodes.map((e) => (
              <Link
                key={e.title}
                to="/podcasts"
                className="group block min-w-[320px] max-w-[360px]"
              >
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-sm bg-muted outline outline-1 -outline-offset-1 outline-black/5">
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    width={1280}
                    height={736}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-primary">
                  {e.num}
                </p>
                <h3 className="mb-2 text-lg font-medium transition-colors group-hover:text-primary">
                  {e.title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Radio band */}
      
<section className="border-y border-border py-24">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:items-center">
    <div className="md:col-span-5">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
        Radio Reflections
      </p>

      <h2 className="mb-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">
        Stories that make you pause and think.
      </h2>

      <p className="mb-8 text-muted-foreground">
        Through short radio recordings, Rapid Rashmi explores personal growth,
        mindfulness, and the freedom of solo travel. Each episode is a quiet
        conversation designed to offer perspective, inspiration, and a moment
        away from the noise of everyday life.
      </p>

      <Link
        to="/radio"
        className="inline-block border border-foreground px-8 py-4 text-[11px] uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
      >
        Listen to Episodes
      </Link>
    </div>

    <div className="md:col-span-7">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            title: "One Step at a Time",
            tag: "Growth",
            quote: "You only need enough courage for the next step.",
          },
          {
            title: "Slow Down",
            tag: "Mindfulness",
            quote: "Life isn't a race where the fastest person wins.",
          },
          {
            title: "Solo Travel",
            tag: "Travel",
            quote: "While exploring new places, you discover yourself too.",
          },
        ].map((episode) => (
          <div
            key={episode.title}
            className="group border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {episode.tag}
            </p>

            <h3 className="mt-3 mb-4 font-display text-2xl group-hover:text-primary">
              {episode.title}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              "{episode.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Saree Atelier band */}
      <section className="relative overflow-hidden bg-stone-900 py-32 text-stone-200">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${sareeTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="animate-fade-up">
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80">
              Radha by Rapid Rashmi
            </span>
            <h2 className="mb-8 font-display text-5xl leading-tight tracking-tight md:text-6xl">
              The Saree <br />
              <span className="font-normal italic">Atelier</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-stone-400">
              Each piece in the collection is handpicked and curated by Rashmi, celebrating the
              craftsmanship of master weavers from across the subcontinent. Modern elegance,
              rooted in history.
            </p>
            <Link
              to="/sarees"
              className="inline-block bg-stone-100 px-10 py-5 text-[11px] font-semibold uppercase tracking-widest text-stone-900 transition-all hover:bg-primary hover:text-white"
            >
              Shop the Collection
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm border border-white/10 p-4">
              <img
                src={sareeFeature}
                alt="Handwoven silk saree from The Saree Atelier"
                loading="lazy"
                width={896}
                height={1184}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-8 font-display text-3xl italic leading-snug text-muted-foreground md:text-4xl">
            "Rashmi has a rare ability to make you feel like the only person in the room, even
            when millions are listening. Her voice is the pulse of a generation."
          </p>
          <div className="flex flex-col items-center">
            <div className="mb-6 h-12 w-px bg-primary" />
            <p className="font-mono text-[11px] uppercase tracking-widest"></p>
            <p className="mt-1 text-xs text-muted-foreground"></p>
          </div>
        </div>
      </section>

      {/* Press Strip */}
      <section className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-12 px-6 opacity-50 grayscale">
          {["The Hindu", "Decade Herald", "Times Of India", "AajTak", "IBTimes India"].map((p) => (
            <span
              key={p}
              className="font-display text-xl font-bold uppercase tracking-tighter"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-foreground py-32 text-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Collaborate
          </p>
          <h2 className="mb-8 font-display text-4xl leading-tight md:text-6xl">
            Work with the voice of a generation.
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-background/70">
            From brand partnerships and live events to guest appearances and sponsorships —
            let's create something that lingers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-background px-10 py-4 text-[11px] uppercase tracking-widest text-foreground transition-colors hover:bg-primary hover:text-background"
            >
              Business Inquiry
            </Link>
            <Link
              to="/about"
              className="border border-background/20 px-10 py-4 text-[11px] uppercase tracking-widest text-background transition-colors hover:bg-background/5"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
