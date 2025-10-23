"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Sparkles, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO · TechStart",
    quote:
      "ABC helped us stand up a unified growth engine in under 90 days. Paid, lifecycle, and creative finally work in sync—and the numbers show it.",
    impact: [
      "+412% organic revenue",
      "5.1x paid media ROAS",
      "Lifecycle attrition down 32%",
    ],
  },
  {
    name: "Michael Chen",
    role: "VP Growth · GrowthCo",
    quote:
      "The embedded pod structure is a cheat code. We have access to strategists, creatives, and analysts without the hiring lag.",
    impact: [
      "Experiment velocity +3.2x",
      "CAC reduced 27%",
      "Attribution stack rebuilt",
    ],
  },
  {
    name: "Emily Rodriguez",
    role: "Founder · EcoStyle",
    quote:
      "From positioning to product launch, the team orchestrated everything. Weekly standups feel like we are one team.",
    impact: [
      "Retention up 18 pts",
      "Email revenue +240%",
      "International launch in 8 weeks",
    ],
  },
];

const caseHighlights = [
  {
    company: "Northwind",
    challenge: "Attrition after onboarding and paid channels plateauing.",
    solution:
      "Lifecycle sequences mapped to product milestones and paid creative refresh sprints every 14 days.",
    results: ["+62% activation", "3.8x blended ROAS", "NPS up to 56"],
  },
  {
    company: "Boreal Co.",
    challenge: "Scaling DTC revenue in new regions without ballooning CAC.",
    solution:
      "Localized creative pods, influencer partner framework, and first-party data enrichment.",
    results: ["Launch in 4 countries", "CAC down 21%", "Repeat purchase +44%"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-24">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-gray-50 via-white to-white"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Proof in market
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Operators trusted to own outcomes—not just deliverables.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              We plug into your workflows, align with finance and product, and
              keep experimentation velocity high so each channel pushes toward
              shared revenue targets.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <Sparkles className="h-5 w-5" />
            <span>92% of partners expand scope after the first 6 months.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-gray-200 bg-white/85 p-8 shadow-sm transition-shadow duration-300 hover:shadow-2xl"
            >
              <Quote className="h-7 w-7 text-gray-300" />
              <p className="text-lg leading-8 text-gray-700">
                “{testimonial.quote}”
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {testimonial.impact.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 text-gray-800" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        >
          <div className="rounded-3xl border border-gray-200 bg-gray-50/90 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Snapshot impact
            </p>
            <p className="mt-4 text-3xl font-semibold text-gray-900">
              51% increase in net revenue retention in six months.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Revenue and lifecycle teams share dashboards, hypotheses, and
              post-mortems in a single workspace so insights never stall at
              execution.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-gray-600">
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Weekly experiment cadence
                </p>
                <p className="text-sm text-gray-600">
                  +3.7 tests per pod per month after centralizing briefs and
                  creative production.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Attribution clarity
                </p>
                <p className="text-sm text-gray-600">
                  Multi-touch models and finance alignment removed channel silos
                  within one quarter.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Case highlights
              </p>
              <ArrowUpRight className="h-5 w-5 text-gray-500" />
            </div>

            <div className="mt-8 space-y-8">
              {caseHighlights.map((highlight) => (
                <div
                  key={highlight.company}
                  className="rounded-2xl border border-gray-200 bg-gray-50/80 p-6"
                >
                  <p className="text-base font-semibold text-gray-900">
                    {highlight.company}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {highlight.challenge}
                  </p>
                  <p className="mt-3 text-sm text-gray-600">
                    {highlight.solution}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {highlight.results.map((result) => (
                      <li key={result} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-gray-800" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
