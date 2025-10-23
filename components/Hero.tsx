"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Target,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Campaign health", value: "92%" },
  { icon: Users, label: "Active audiences", value: "38 segments" },
  { icon: Target, label: "Average ROAS", value: "5.4x" },
];

const valueProps = [
  "End-to-end growth squad embedded with your team",
  "Experimentation sprints backed by first-party data",
  "Lifecycle journeys engineered for retention and LTV",
];

const milestones = [
  {
    title: "Strategy sprint",
    detail: "Market intelligence, KPI modeling, and channel mix in week one.",
  },
  {
    title: "Activation wave",
    detail: "Paid, lifecycle, and creative launch packaged inside 21 days.",
  },
  {
    title: "Scale loop",
    detail: "Weekly optimization cadences and budget rebalancing playbooks.",
  },
];

const trustMarks = ["Apex Labs", "Northwind", "Boreal Co.", "Lumenix"];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-28">
      <div
        className="absolute inset-0 bg-linear-to-b from-white via-white to-gray-50"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-dashed border-gray-200 opacity-40"
        aria-hidden
      />
      <div
        className="absolute -right-36 bottom-0 hidden h-72 w-72 rounded-full border border-gray-100 bg-gray-100/60 blur-3xl lg:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="space-y-10">


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05]"
            >
              Build resilient revenue engines with an embedded growth team.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg leading-8 text-gray-600 sm:text-xl"
            >
              We partner with modern brands to orchestrate strategy, creative,
              and experimentation across the full funnel. Our operators plug
              into your workflows so every sprint moves the metrics that matter.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {valueProps.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white/70 p-4 text-sm font-medium text-gray-700 shadow-sm backdrop-blur"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-gray-900" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-200 sm:w-auto"
              >
                Start your growth audit
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-800 transition-transform duration-200 sm:w-auto"
              >
                <Play className="h-5 w-5" />
                View product walkthrough
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-3"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Trusted by teams scaling predictable growth
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-600">
                {trustMarks.map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <div className="h-2 w-2 rounded-full bg-gray-900" />
                    {brand}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative w-full max-w-xl rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-2xl backdrop-blur"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Live performance workspace
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">
                    Weekly snapshot
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <TrendingUp className="h-6 w-6 text-gray-800" />
                </motion.div>
              </div>

              <div className="mt-10 space-y-5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <stat.icon className="h-5 w-5 text-gray-700" />
                      <span className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-dashed border-gray-200 px-5 py-4 text-sm text-gray-600">
                Automation sync scheduled in{" "}
                <span className="font-semibold text-gray-900">02h 18m</span> ·
                Creative update ready for approval
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="absolute -bottom-14 left-1/2 w-full max-w-lg -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                  <ShieldCheck className="h-6 w-6 text-gray-800" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Proven launch blueprint
                  </p>
                  <p className="text-sm text-gray-500">
                    Mapped to your roadmap in three collaborative working
                    sessions.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {milestones.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-100 bg-gray-50/70 p-4"
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{item.detail}</p>
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

export default Hero;
