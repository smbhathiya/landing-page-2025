"use client";

import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Compass,
  Layers,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const proofPoints = [
  {
    icon: TrendingUp,
    metric: "310%+",
    label: "Average lift in qualified pipeline within 12 months",
  },
  {
    icon: Users,
    metric: "38",
    label: "Specialists across paid, lifecycle, data, and creative pods",
  },
  {
    icon: Award,
    metric: "8",
    label: "Industry awards for performance marketing and experimentation",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Launch",
    detail:
      "ABC founded to embed growth operators directly inside scale-up teams.",
  },
  {
    year: "2020",
    title: "Expansion",
    detail:
      "Introduced creative studio and experimentation lab to support lifecycle programs.",
  },
  {
    year: "2023",
    title: "Global partners",
    detail:
      "Grew to five global hubs supporting brands across SaaS, commerce, and marketplaces.",
  },
];

const pillars = [
  {
    icon: Brain,
    title: "Strategy that ships",
    copy: "Operators join your weekly cadence so decisions translate into experiments and launches fast.",
  },
  {
    icon: Layers,
    title: "Creative intelligence",
    copy: "Creative, audience insights, and analytics live together to keep stories consistent across every touchpoint.",
  },
  {
    icon: Compass,
    title: "Outcome obsessed",
    copy: "Every sprint is framed around revenue, retention, and LTV impact—not vanity metrics.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gray-50 py-24">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/40 via-white/80 to-white"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-32 h-72 w-72 rounded-full border border-dashed border-gray-200"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-10">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500"
            >
              Our story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl"
            >
              Designing growth systems that help modern brands compound.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              className="text-lg leading-8 text-gray-600"
            >
              We launched ABC to rethink how performance marketing teams partner
              with founders and marketing leaders. Instead of handing over
              decks, we stay embedded—aligning positioning, creative, channel
              mix, and experimentation inside your operating rhythm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-gray-200 bg-white/85 p-5 shadow-sm"
                >
                  <point.icon className="h-5 w-5 text-gray-900" />
                  <p className="mt-4 text-2xl font-semibold text-gray-900">
                    {point.metric}
                  </p>
                  <p className="text-sm text-gray-600">{point.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-dashed border-gray-200 bg-white/70 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                How we operate
              </p>
              <p className="mt-3 text-base text-gray-600">
                Every engagement comes with a dedicated pod of strategists,
                channel owners, creatives, and analysts working in weekly
                cadences. That structure means what we design on Monday is live
                by Thursday—and measured by the following standup.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                Milestones
              </p>
              <div className="mt-6 space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative pl-8">
                    <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-700">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.year}
                    </p>
                    <p className="text-base font-medium text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50/80 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Embedded growth guild
                </p>
                <p className="text-sm text-gray-600">
                  Our teams sit across revenue operations, product marketing,
                  and creative—so every launch stays cohesive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute -bottom-14 left-1/2 w-full max-w-lg -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg"
            >
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 flex-none text-gray-800" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Operating principles
                  </p>
                  <p className="text-sm text-gray-600">
                    We anchor every playbook to four pillars that keep teams
                    aligned.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4"
                  >
                    <pillar.icon className="h-5 w-5 text-gray-800" />
                    <p className="mt-3 text-sm font-semibold text-gray-900">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">{pillar.copy}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
