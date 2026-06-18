import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import podcast1 from "@/assets/podcast-1.jpg";
import podcast2 from "@/assets/podcast-2.jpg";
import podcast3 from "@/assets/podcast-3.jpg";
import podcast4 from "@/assets/podcast-4.jpg";
import podcast5 from "@/assets/podcast-5.jpg";
import podcast6 from "@/assets/podcast-6.jpg";

export const Route = createFileRoute("/podcasts")({
  head: () => ({
    meta: [
      { title: "Podcasts — Rapid Rashmi" },
      { name: "description", content: "The Rapid Podcast and Off The Record — long-form conversations with culture-shapers." },
      { property: "og:title", content: "Podcasts — Rapid Rashmi" },
      { property: "og:description", content: "Two podcast channels, hundreds of episodes, one unmistakable voice." },
      { property: "og:url", content: "/podcasts" },
    ],
    links: [{ rel: "canonical", href: "/podcasts" }],
  }),
  component: Podcasts,
});

type Episode = {
  channel: "Just Curious India" | "Rapid Rashmi - Kannad";
  category: "Psychology" | "Mental Health" | "Wildlife" |"Celebrity" | "Entertainment";
  num: string;
  title: string;
  desc: string;
  guest: string;
  image: string;
  duration: string;
  videoUrl: string; // 1. Added videoUrl property to the type definition
};

const episodes: Episode[] = [
  { channel: "Just Curious India", category: "Psychology", num: "Ep 78", title: "Beyond Labels", desc: "Is Society Programming Your Mind? Conditioning, Manipulation & Manifestation Explained", guest: "Rakesh B Pal", image: podcast1, duration: "1h 12m", videoUrl: "https://www.youtube.com/watch?v=qHxmUJciFb4" },

  { channel: "Just Curious India", category: "Mental Health", num: "Ep 75", title: "Beyond Anger", desc: "How Trauma Changes Us Forever: Digital Era Challenges, Social Anxiety, and Healthy Mind Tips", guest: "Tasneem Nakhoda", image: podcast2, duration: "58m", videoUrl: "https://www.youtube.com/watch?v=L-C0kOmMr4g" },

  { channel: "Just Curious India", category: "Wildlife", num: "Ep 73", title: "Wildlife Uncovered", desc: "Inside the Mind of Wildlife: How Elephants Think, Survive & Communicate", guest: "Avinash Krishnan", image: podcast3, duration: "1h 08m", videoUrl: "https://www.youtube.com/watch?v=9ksCoVvSZc8&t=2s" },

  { channel: "Rapid Rashmi - Kannad", category: "Entertainment", num: "Ep 396", title: "Comedy & Life", desc: "From Belagavi to a Household Name | The Untold Journey of Creativity, Comedy, Criticism & Success", guest: "Vadiraj Babaladi", image: podcast4, duration: "2h 06m", videoUrl: "https://www.youtube.com/watch?v=GINuO0mbNe8" },

  { channel: "Rapid Rashmi - Kannad", category: "Wildlife", num: "Ep 395", title: "The Cobra Code", desc: "The Untold Truth About King Cobras, Snake Myths, Rainforest Life & Wildlife Conservation Explained", guest: "Gowrishankar", image: podcast5, duration: "1h 26m", videoUrl: "https://www.youtube.com/watch?v=aHotlqiAMJk" },

  { channel: "Rapid Rashmi - Kannad", category: "Celebrity", num: "Ep 394", title: "Beyond Fame", desc: "What Success Really Feels Like After Fame | Criticism, Relationships, Trolls & Inner Struggles", guest: "Chandan Shetty", image: podcast6, duration: "1h 43m", videoUrl: "https://www.youtube.com/watch?v=0qucFv5aONQ" },
];

const channels = ["All", "Just Curious India", "Rapid Rashmi - Kannad"] as const;
const categories = ["All", "Psychology", "Mental Health", "Wildlife", "Celebrity", "Entertainment"] as const;

function Podcasts() {
  const [channel, setChannel] = useState<(typeof channels)[number]>("All");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      episodes.filter(
        (e) =>
          (channel === "All" || e.channel === channel) &&
          (category === "All" || e.category === category) &&
          (query === "" || (e.title + e.guest + e.desc).toLowerCase().includes(query.toLowerCase())),
      ),
    [channel, category, query],
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Podcasts"
        title={<>Two channels. <span className="italic">One unmistakable voice.</span></>}
        intro="The Rapid Podcast brings inspiring conversations, untold stories, and valuable insights from people across different walks of life."
      />

      {/* Filters */}
      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {channels.map((c) => (
              <button
                key={c}
                onClick={() => setChannel(c)}
                className={`border px-4 py-2 text-[11px] uppercase tracking-widest transition-colors ${
                  channel === c ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as (typeof categories)[number])}
              className="border border-border bg-background px-3 py-2 text-[11px] uppercase tracking-widest"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guests, topics…"
              className="border border-border bg-background px-3 py-2 text-sm w-full md:w-64 focus:outline-none focus:border-foreground"
            />
          </div>
        </div>
      </section>

      {/* Episode grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground">No episodes match these filters.</p>
          ) : (
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((e) => (
                <article key={e.num + e.title} className="group">
                  {/* 3. Wrap entire inner contents inside an anchor link targeting videoUrl */}
                  <a 
                    href={e.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block h-full"
                  >
                    <div className="mb-5 aspect-video w-full overflow-hidden bg-muted">
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
                      {e.channel} · {e.num} · {e.duration}
                    </p>
                    <h3 className="mb-2 font-display text-2xl leading-tight group-hover:text-primary">
                      {e.title}
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">{e.desc}</p>
                    <p className="text-xs text-foreground">with {e.guest}</p>
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* YouTube embed example */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Now Playing</p>
          <h2 className="mb-10 font-display text-4xl tracking-tight">Featured Episode</h2>
          <div className="aspect-video w-full overflow-hidden border border-border bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/5kOgWk8mX0w" // Quick fix: standard embed links should use /embed/ instead of /watch?v= inside iframes
              title="Featured podcast episode"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}