"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactChannels = [
  {
    title: "Email",
    description:
      "Drop a note and our partnerships team will reply within one business day.",
    details: ["hello@abc.com", "partnerships@abc.com"],
    icon: Mail,
  },
  {
    title: "Call",
    description:
      "Speak with a strategist to unpack goals, budgets, and timelines.",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    icon: Phone,
  },
  {
    title: "Office hours",
    description:
      "Schedule a working session with our leadership in person or virtually.",
    details: ["123 Digital Street, Tech City", "Mon–Fri · 9:00–18:00"],
    icon: MapPin,
  },
  {
    title: "Support window",
    description:
      "Active partners receive same-day responses via Slack or email.",
    details: ["Dedicated Slack channel", "Response SLA · 4 business hours"],
    icon: Clock,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-100 py-24"
    >
      <div
        className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-white/30 via-white/70 to-white"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full border border-dashed border-gray-200"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Let’s collaborate
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
            Share the challenge—we’ll map the first 90 days of traction.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Tell us about your product, revenue goals, and timelines. Our
            partnership leads will curate the right pod, craft a roadmap, and
            jump into execution.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="name"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    placeholder="Jamie Rivera"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="email"
                  >
                    Work email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    placeholder="jamie@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="company"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium text-gray-600"
                    htmlFor="service"
                  >
                    Priority focus
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  >
                    <option value="">Select</option>
                    <option value="acquisition">Customer acquisition</option>
                    <option value="lifecycle">Lifecycle & retention</option>
                    <option value="creative">Creative & brand systems</option>
                    <option value="analytics">Attribution & analytics</option>
                    <option value="product-launch">Product launch</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="text-sm font-medium text-gray-600"
                  htmlFor="message"
                >
                  What should we know? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  placeholder="Share your goals, budgets, timelines, and challenges."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200"
              >
                <Send className="h-4 w-4" />
                Book strategy call
              </motion.button>

              <p className="text-xs text-gray-500">
                We respect your inbox. Expect one confirmation email and a
                scheduling link—no drip sequences.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col justify-between gap-10 rounded-3xl border border-gray-200 bg-white/80 p-10"
          >
            <div className="space-y-6">
              {contactChannels.map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5"
                >
                  <channel.icon className="h-5 w-5 text-gray-900" />
                  <p className="mt-3 text-sm font-semibold text-gray-900">
                    {channel.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {channel.description}
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-gray-500">
                    {channel.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-600 shadow-sm">
              <p className="font-semibold text-gray-900">Partner onboarding</p>
              <p className="mt-2">
                Kickoff in under two weeks: roadmap workshop, pod assignment,
                and live campaign planning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
