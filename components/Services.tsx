"use client";

import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Share2,
  PenTool,
  Smartphone,
  Zap,
  ArrowRight,
  Circle,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Architect a technical, on-page, and content roadmap that compounds organic visibility and demand.",
    features: [
      "Technical audits and migration oversight",
      "Topic authority mapping",
      "Conversion-focused content",
      "Enterprise reporting cadence",
    ],
  },
  {
    icon: BarChart3,
    title: "PPC Advertising",
    description:
      "Scale efficient acquisition across search, social, and programmatic with real-time budget rebalancing.",
    features: [
      "Full-funnel paid search programs",
      "Meta & TikTok creative testing",
      "Always-on remarketing loops",
      "Attribution & incrementality analysis",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build narrative-driven campaigns that accelerate community growth and brand affinity across channels.",
    features: [
      "Organic content studios",
      "Influencer playbooks",
      "Social listening & insight mining",
      "Community activation frameworks",
    ],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Deliver editorial systems that convert throughout the customer journey and ladder back to pipeline.",
    features: [
      "Editorial strategy & production",
      "Video & motion storytelling",
      "Sales enablement alignment",
      "Lifecycle nurture architecture",
    ],
  },
  {
    icon: Smartphone,
    title: "Web Design & Experience",
    description:
      "Ship high-performing product and marketing experiences with UX, CRO, and experimentation baked in.",
    features: [
      "Experience design sprints",
      "Conversion rate optimization lab",
      "E-commerce merchandising systems",
      "Performance benchmarking",
    ],
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Activate lifecycle programs that automate retention, expansion, and customer success touchpoints.",
    features: [
      "Lifecycle program orchestration",
      "CRM & CDP implementation",
      "Lead scoring and routing",
      "Revenue intelligence dashboards",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery & opportunity mapping",
    detail:
      "Audit customer journeys, analytics, and creative assets to prioritize the highest-leverage initiatives.",
  },
  {
    title: "Integrated campaign build",
    detail:
      "Stand up the cross-channel engine with dedicated operators, playbooks, and measurement guardrails.",
  },
  {
    title: "Scale & optimization loops",
    detail:
      "Weekly experimentation, creative refresh, and revenue impact reviews keep momentum compounding.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-linear-to-b from-gray-50 via-white to-gray-50"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Proven service lines
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-[2.75rem]">
              Specialized teams that plug into every growth lever.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Every engagement is staffed with embedded strategists, channel
              specialists, creative leads, and analysts so you can activate
              quickly and scale what works without adding headcount.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-3 text-sm text-gray-500 sm:grid-cols-2 lg:max-w-md"
          >
            <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm">
              <p className="font-semibold text-gray-800">Dedicated pods</p>
              <p>
                Cross-functional squads run strategy, execution, and analytics
                as one motion.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm">
              <p className="font-semibold text-gray-800">
                Transparency by design
              </p>
              <p>
                Dashboards, async updates, and working sessions keep your team
                in the loop.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
          }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              whileHover={{ y: -12 }}
              className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-gray-200 bg-white/85 p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 -z-[1] bg-gray-900/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
                    <service.icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Fractional unit · 6 or 12 month programs
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <p className="text-base leading-7 text-gray-600">
                {service.description}
              </p>

              <ul className="grid gap-3 text-sm text-gray-600">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Circle className="h-2 w-2 text-gray-800" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <div className="h-2 w-2 rounded-full bg-gray-800" />
                Integrated with strategy, analytics, and creative partners.
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900">
              How our partnership unfolds
            </h3>
            <p className="mt-2 text-base text-gray-600">
              Every phase has a clear owner, deliverables, and success criteria
              so you know exactly what is live and what is shipping next.
            </p>

            <div className="mt-6 space-y-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-gray-200 bg-gray-50/80 p-5"
                >
                  <span className="absolute -left-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-gray-700 shadow">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Phase {index + 1}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-dashed border-gray-200 bg-gray-50 p-8 shadow-inner">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Enablement & velocity
              </p>
              <h4 className="mt-3 text-3xl font-semibold text-gray-900">
                Weekly rituals that keep shipping momentum high.
              </h4>
              <p className="mt-4 text-base text-gray-600">
                Live working sessions, async feedback in shared workspaces, and
                dashboards built around your leadership KPIs.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">
                  RevOps sync
                </p>
                <p>Pipeline pacing, forecasts, and budget alignment.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">
                  Experiment scorecards
                </p>
                <p>
                  Insights, decisions, and next steps captured transparently.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">
                  Creative pulse
                </p>
                <p>
                  Creative briefs, production roadmaps, and QA walkthroughs.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">
                  Executive dashboard
                </p>
                <p>Single source of truth for leadership and board updates.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
