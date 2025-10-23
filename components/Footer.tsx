"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const navColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Growth strategy", href: "#services" },
      { label: "Paid media", href: "#services" },
      { label: "Lifecycle", href: "#services" },
      { label: "Creative systems", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case studies", href: "#portfolio" },
      { label: "Playbooks", href: "#" },
      { label: "Insights", href: "#" },
      { label: "Partner program", href: "#" },
    ],
  },
];

const contactBlocks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@abc.com",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    label: "Studio",
    value: "123 Digital Street, Tech City",
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-300">
      <div
        className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-gray-900 via-gray-950 to-gray-950"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12 lg:flex-row lg:justify-between"
        >
          <div className="max-w-md space-y-6">
            <p className="text-2xl font-semibold text-white">ABC</p>
            <p className="text-sm text-gray-400">
              Embedded growth operators scaling acquisition, lifecycle, and
              creative with measurable revenue impact.
            </p>

            <div className="grid gap-4 text-sm text-gray-400">
              {contactBlocks.map((block) => (
                <div key={block.label} className="flex items-center gap-3">
                  <block.icon className="h-4 w-4 text-gray-300" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      {block.label}
                    </p>
                    <p className="text-gray-200">{block.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {navColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <p className="text-sm font-semibold text-white">
                  {column.title}
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col gap-6 border-t border-gray-800 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-gray-500">
            © {currentYear} ABC Growth Collective. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <a
              className="transition-colors duration-200 hover:text-white"
              href="#"
            >
              Privacy
            </a>
            <span className="h-1 w-1 rounded-full bg-gray-700" />
            <a
              className="transition-colors duration-200 hover:text-white"
              href="#"
            >
              Terms
            </a>
            <span className="h-1 w-1 rounded-full bg-gray-700" />
            <a
              className="transition-colors duration-200 hover:text-white"
              href="#"
            >
              Security
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 bg-gray-900 text-gray-400 transition-colors duration-200 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
