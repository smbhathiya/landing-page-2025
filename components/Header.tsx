"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#portfolio" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur"
          : "border-b border-transparent bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-6">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm"
            >
              <span className="text-xl font-semibold tracking-tight">ABC</span>
              <span className="hidden text-xs font-medium text-gray-500 sm:inline">
                Growth partners
              </span>
            </motion.a>

            <div className="hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500 lg:flex">
              <span>New York</span>
              <span className="h-1 w-1 rounded-full bg-gray-400" />
              <span>Remote first</span>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-gray-200 bg-white/80 p-1 shadow-sm lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900"
              >
                {item.name}
                <span className="absolute inset-x-3 bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-gray-900/30 transition-transform duration-200 group-hover:scale-x-100" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hidden items-center gap-2 rounded-full border border-gray-900 bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform duration-200 lg:flex"
            >
              Request proposal
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 transition-colors duration-200 hover:bg-gray-100 lg:hidden"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/20"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-gray-200 bg-white shadow-xl"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <span className="text-lg font-semibold text-gray-900">ABC</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                  aria-label="Close mobile menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-6 px-6 py-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block text-2xl font-semibold text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-6 border-t border-gray-200 px-6 py-8">
                <p className="text-sm text-gray-500">
                  Book a working session with our strategy leads to map the
                  first 90 days of traction.
                </p>
                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-900 bg-gray-900 px-6 py-3 text-base font-semibold text-white">
                  Request proposal
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
