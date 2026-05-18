import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import { GinkgoMark } from "@/components/Icons";
import type { LegalPageContent } from "@/lib/legal";

type LegalPageProps = {
  content: LegalPageContent;
};

export default function LegalPage({ content }: LegalPageProps) {
  return (
    <>
      <main className="min-h-screen bg-charcoal text-white">
        <section className="relative isolate overflow-hidden px-4 pb-16 pt-8 md:pb-24">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_12%,rgba(230,182,74,0.24),transparent_28%),linear-gradient(135deg,#10130f_0%,#10240a_48%,#050704_100%)]" />
          <div className="absolute inset-0 -z-10 luxury-grid opacity-15" />
          <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 py-4" aria-label="Legal page navigation">
            <a href="/" className="flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-white backdrop-blur-xl transition hover:border-gold/50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-charcoal">
                <GinkgoMark className="h-7 w-7" />
              </span>
              <span className="hidden text-sm font-black uppercase tracking-[0.18em] sm:block">Ginkgo Pressure Washing</span>
            </a>
            <CTAButton href="/" variant="secondary" className="min-h-11 px-5 py-2.5 text-xs" ariaLabel="Return to homepage">
              Home
            </CTAButton>
          </header>

          <div className="mx-auto mt-16 grid w-full max-w-6xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-gold">{content.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{content.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">{content.description}</p>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-white/48">Last updated: {content.updated}</p>
            </div>

            <aside className="rounded-[1.5rem] border border-white/12 bg-white/9 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl" aria-labelledby="legal-highlights">
              <h2 id="legal-highlights" className="text-lg font-black text-gold">
                Key SMS & Privacy Commitments
              </h2>
              <ul className="mt-5 grid gap-4">
                {content.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-white/78">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="bg-cream px-4 py-16 text-charcoal md:py-24" aria-label={`${content.eyebrow} details`}>
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-8 rounded-[1.25rem] border border-deepGreen/10 bg-white p-5 shadow-xl shadow-black/5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-deepGreen">On this page</p>
                <nav className="mt-4 grid gap-2" aria-label={`${content.eyebrow} section links`}>
                  {content.sections.map((section) => (
                    <a key={section.title} href={`#${slugify(section.title)}`} className="rounded-xl px-3 py-2 text-sm font-bold text-charcoal/66 transition hover:bg-mist hover:text-deepGreen">
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="grid gap-5">
              {content.sections.map((section) => (
                <article
                  key={section.title}
                  id={slugify(section.title)}
                  className="scroll-mt-8 rounded-[1.35rem] border border-deepGreen/10 bg-white p-6 shadow-[0_18px_60px_rgba(16,19,15,0.08)] transition hover:border-gold/50 md:p-8"
                >
                  <h2 className="text-2xl font-black leading-tight text-charcoal">{section.title}</h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-8 text-charcoal/72">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 leading-7 text-charcoal/72">
                          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-deepGreen" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <div className="rounded-[1.5rem] bg-charcoal p-6 text-white shadow-2xl shadow-black/15 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-gold">Need a service quote?</p>
                <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <p className="max-w-2xl text-xl font-bold text-white/82">
                    Legal pages are handled. When you are ready, the quote tool is still the fastest way for customers to start.
                  </p>
                  <CTAButton>Start Your Quote</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
