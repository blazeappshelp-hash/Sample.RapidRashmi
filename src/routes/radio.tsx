import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

import radio1 from "@/assets/radio1.wav";
import radio2 from "@/assets/radio2.wav";
import radio3 from "@/assets/radio3.wav";

export const Route = createFileRoute("/radio")({
  head: () => ({
    meta: [
      { title: "Radio Journey — Rapid Rashmi" },
      {
        name: "description",
        content:
          "Thoughtful audio reflections by Rapid Rashmi on life, growth, mindfulness, and travel.",
      },
      { property: "og:title", content: "Radio Journey — Rapid Rashmi" },
      {
        property: "og:description",
        content:
          "Listen to original radio recordings exploring personal growth, presence, and self-discovery.",
      },
      { property: "og:url", content: "/radio" },
    ],
    links: [{ rel: "canonical", href: "/radio" }],
  }),
  component: Radio,
});

const recordings = [
  {
    id: "01",
    title: "One Step at a Time",
    audio: radio1,
    description:
      "A reflection on uncertainty, the future, and why you don't need the entire map to move forward. Sometimes all it takes is the courage for the next step.",
  },
  {
    id: "02",
    title: "Slow Down",
    audio: radio2,
    description:
      "In a world that constantly pushes us to rush, this episode explores the value of being present and appreciating the moment you're living right now.",
  },
  {
    id: "03",
    title: "Solo Travel",
    audio: radio3,
    description:
      "A thoughtful reflection on traveling alone, embracing freedom, and discovering parts of yourself while exploring new places.",
  },
];

function Radio() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Radio Journey"
        title={
          <>
            Stories, thoughts &
            <br />
            <span className="italic">quiet moments.</span>
          </>
        }
        intro="A collection of thoughtful audio reflections by Rapid Rashmi. From personal growth and mindfulness to travel and self-discovery, each recording is designed to inspire a moment of pause and perspective."
      />

      {/* Featured Episode */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border border-border bg-card p-10 md:p-16">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Featured Episode
            </p>

            <h2 className="mb-4 font-display text-5xl tracking-tight">
              Solo Travel
            </h2>

            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              A reflection on freedom, self-discovery, and the unique beauty
              of exploring the world alone. Sometimes the greatest journey
              isn't to a new place—it's to a new understanding of yourself.
            </p>

            <audio
              controls
              preload="metadata"
              className="w-full"
            >
              <source src={radio3} type="audio/wav" />
              Your browser does not support audio playback.
            </audio>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Episodes
            </p>

            <h2 className="font-display text-4xl tracking-tight">
              Radio Recordings
            </h2>
          </div>

          <div className="space-y-8">
            {recordings.map((recording) => (
              <article
                key={recording.id}
                className="border border-border bg-card p-8 transition-all hover:border-primary"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                    Episode {recording.id}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Audio Reflection
                  </span>
                </div>

                <h3 className="mb-4 font-display text-3xl">
                  {recording.title}
                </h3>

                <p className="mb-6 max-w-3xl text-muted-foreground leading-relaxed">
                  {recording.description}
                </p>

                <audio
                  controls
                  preload="metadata"
                  className="w-full"
                >
                  <source src={recording.audio} type="audio/wav" />
                  Your browser does not support audio playback.
                </audio>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            About The Series
          </p>

          <h2 className="mb-8 font-display text-4xl tracking-tight">
            A voice exploring life's simple truths.
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            These recordings mark the beginning of Rapid Rashmi's journey into
            radio storytelling. Each episode captures reflections on growth,
            presence, courage, and exploration—ideas that encourage listeners
            to pause, think, and see everyday life from a different perspective.
          </p>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 font-display text-4xl tracking-tight">
            What's Next
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
                Published
              </p>
              <h3 className="font-display text-2xl">
                First three radio recordings released
              </h3>
            </div>

            <div className="border-l-2 border-dashed border-border pl-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Coming Soon
              </p>
              <h3 className="font-display text-2xl">
                New reflections, conversations, and audio stories
              </h3>
            </div>

            <div className="border-l-2 border-dashed border-border pl-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Future Vision
              </p>
              <h3 className="font-display text-2xl">
                Building a library of meaningful audio experiences
              </h3>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
