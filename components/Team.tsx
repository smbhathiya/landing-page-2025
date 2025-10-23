"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter, Users } from "lucide-react";

const leadership = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    focus: "Owns vision, revenue narratives, and high-impact partnerships.",
    tenure: "Ex-Google growth strategist, 12 years in performance marketing.",
    email: "sarah@abc.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Michael Chen",
    role: "Head of Strategy",
    focus: "Leads integrated growth roadmaps and experimentation frameworks.",
    tenure: "Scaled lifecycle programs for unicorn SaaS and commerce teams.",
    email: "michael@abc.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Executive Creative Director",
    focus:
      "Guides narrative, creative systems, and cross-channel storytelling.",
    tenure: "Award-winning creative leader with global brand experience.",
    email: "emily@abc.com",
    linkedin: "#",
    twitter: "#",
  },
];

const pods = [
  {
    title: "Growth strategy pod",
    description:
      "Runs positioning, channel mix, and forecasting. Embedded with leadership for weekly prioritization.",
    crew: ["Strategist lead", "Lifecycle architect", "Revenue analyst"],
  },
  {
    title: "Paid media pod",
    description:
      "Owns paid search, paid social, and programmatic experimentation with creative refresh loops.",
    crew: ["Acquisition lead", "Creative producer", "Measurement scientist"],
  },
  {
    title: "Lifecycle pod",
    description:
      "Designs onboarding, nurture, retention, and win-back journeys across email, SMS, and in-product.",
    crew: ["Lifecycle manager", "Copy strategist", "Automation engineer"],
  },
  {
    title: "Creative studio",
    description:
      "Delivers modular creative systems, playbooks, and rapid-response campaigns synced to channel data.",
    crew: ["Design lead", "Motion editor", "Content strategist"],
  },
];

const rituals = [
  {
    title: "Weekly growth standup",
    details:
      "Shared dashboards, KPIs, and experiment pipeline with your marketing and product leads.",
  },
  {
    title: "Creative pulse review",
    details:
      "Figma showcases, storyboards, and performance clips reviewed with leadership for rapid approvals.",
  },
  {
    title: "Revenue retro",
    details:
      "Monthly deep-dive with finance + RevOps aligning budget allocations and ROAS targets.",
  },
];

const Team = () => {
  return (
    <section id="team" className="relative overflow-hidden bg-gray-50 py-24">
      <div
        className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/40 via-white/80 to-white"
        aria-hidden
      />
      <div
        className="absolute right-24 top-32 hidden h-72 w-72 rounded-full border border-dashed border-gray-200 lg:block"
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
          <div className="max-w-2xl space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              The operators
            </span>
            <h2 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              A cross-functional guild embedded with your team from day zero.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              We staff nimble pods—strategists, creatives, lifecycle experts,
              and analysts—so you scale headcount impact without the hiring
              footprint.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>
              Average pod size: 6 specialists with a single point of leadership.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {leadership.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-sm"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold text-gray-900">
                    {leader.name}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    {leader.role}
                  </p>
                </div>
                <p className="text-sm text-gray-600">{leader.focus}</p>
                <p className="text-sm text-gray-500">{leader.tenure}</p>
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  href={leader.linkedin}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                  aria-label={`${leader.name} on LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href={leader.twitter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                  aria-label={`${leader.name} on Twitter`}
                >
                  <Twitter className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${leader.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                  aria-label={`Email ${leader.name}`}
                >
                  <Mail className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
        >
          <div className="rounded-3xl border border-gray-200 bg-white/90 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Pods & disciplines
            </p>
            <p className="mt-4 text-3xl font-semibold text-gray-900">
              Pods built around the customer journey—not channel silos.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Each pod has a playbook, metrics, and workstream owner. We meet
              inside your Slack, Notion, Asana, or whatever stack keeps momentum
              real-time.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {pods.map((pod) => (
                <div
                  key={pod.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    {pod.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {pod.description}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-500">
                    {pod.crew.map((member) => (
                      <li key={member} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-800" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50/80 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Collaboration rituals
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our rhythms keep your internal teams, leadership, and our pods
              truly integrated.
            </p>

            <div className="mt-8 space-y-5">
              {rituals.map((ritual) => (
                <div
                  key={ritual.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-gray-900">
                    {ritual.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{ritual.details}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border border-gray-200 bg-white/90 p-6 text-sm text-gray-600"
            >
              <p className="font-semibold text-gray-900">40+ specialists</p>
              <p>
                Hiring, onboarding, and management handled by ABC—so your team
                focuses on roadmap and outcomes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
