import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutStage from "@/assets/media.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rapid Rashmi" },
      {
        name: "description",
        content:
          "Learn about Rapid Rashmi's journey from award-winning radio jockey to podcast host, television personality, and digital media entrepreneur.",
      },
      { property: "og:title", content: "About — Rapid Rashmi" },
      {
        property: "og:description",
        content:
          "The journey of Rapid Rashmi through radio, television, podcasting, and digital media.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  {
    year: "2007",
    title: "Radio Career Begins",
    desc: "Started her journey as a Radio Jockey and quickly became known for her energetic style, relatable conversations, and strong connection with Kannada audiences.",
  },
  {
    year: "2016",
    title: "Award-Winning Radio Host",
    desc: "Won multiple industry recognitions including IRF Silver Awards for 'Retro Savaari' and was honored as RJ of the Year for her contribution to radio broadcasting.",
  },
  {
    year: "2018",
    title: "Bigg Boss Kannada",
    desc: "Participated in Bigg Boss Kannada Season 6 and emerged as one of the finalists, further expanding her reach across Karnataka.",
  },
  {
    year: "2020",
    title: "Digital Media Expansion",
    desc: "Successfully expanded into digital content creation through live broadcasts, celebrity interviews, and audience-focused online programming.",
  },
  {
    year: "2021",
    title: "Just Curious Podcast",
    desc: "Launched the Just Curious Podcast, featuring conversations with celebrities, entrepreneurs, artists, athletes, and thought leaders from diverse backgrounds.",
  },
  {
    year: "Present",
    title: "Media Entrepreneur",
    desc: "Continues to inspire audiences through podcasting, public speaking, content creation, and entrepreneurial ventures while remaining one of Karnataka's most recognized media personalities.",
  },
];

const awards = [
  "Indian Radio Forum (IRF) Silver Winner — Retro Savaari (2016)",
  "Indian Radio Forum (IRF) Silver Winner — Retro Savaari (2017)",
  "Aryabhatta Award — RJ of the Year (2016)",
  "Media Award — Best RJ of the Year (2016)",
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The Story"
        title={
          <>
            A voice that began on the airwaves{" "}
            <span className="italic">and continues to inspire millions.</span>
          </>
        }
        intro="Rapid Rashmi is a renowned radio personality, podcast host, public speaker, singer, and media entrepreneur who has spent nearly two decades connecting with audiences through radio, television, and digital media."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={heroPortrait}
              alt="Rapid Rashmi portrait"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Rashmi R Rao, popularly known as Rapid Rashmi, is one of
              Karnataka's most recognized media personalities. She began her
              career as a radio jockey and quickly earned a reputation for her
              distinctive voice, engaging storytelling, and ability to connect
              deeply with listeners.
            </p>

            <p>
              Over the years, she established herself as a leading voice in
              Kannada radio, hosted television programs, participated in major
              reality shows, and received multiple industry awards for her
              contribution to broadcasting.
            </p>

            <p>
              As media evolved, Rashmi successfully expanded into the digital
              space through content creation, live broadcasts, and long-form
              conversations. Her Just Curious Podcast has become a platform for
              meaningful discussions with actors, entrepreneurs, artists,
              athletes, and thought leaders.
            </p>

            <p>
              Today, Rapid Rashmi continues to inspire audiences through
              podcasting, public speaking, digital content, and entrepreneurial
              ventures while remaining one of the most influential voices in
              Kannada media.
            </p>

            <p className="text-foreground font-display italic text-2xl">
              "Every conversation has the power to teach us something new — if
              we're curious enough to listen."
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Timeline
          </p>

          <h2 className="mb-16 font-display text-4xl tracking-tight md:text-5xl">
            A journey through media.
          </h2>

          <ol className="space-y-12">
            {timeline.map((t) => (
              <li
                key={t.year}
                className="grid grid-cols-1 gap-6 border-t border-border pt-8 md:grid-cols-12"
              >
                <p className="font-mono text-2xl text-primary md:col-span-2">
                  {t.year}
                </p>

                <h3 className="font-display text-2xl md:col-span-4">
                  {t.title}
                </h3>

                <p className="text-muted-foreground md:col-span-6">
                  {t.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-center">
          <img
            src={aboutStage}
            alt="Rashmi speaking at a live event"
            loading="lazy"
            width={1280}
            height={900}
            className="w-full object-cover"
          />

          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Recognition
            </p>

            <h2 className="mb-10 font-display text-4xl tracking-tight">
              Awards & Honours
            </h2>

            <ul className="space-y-4">
              {awards.map((a) => (
                <li
                  key={a}
                  className="border-b border-border pb-4 text-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
