"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, resumeUrl } from "@/data/navigation";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl font-bold text-zinc-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          <div className="flex items-center gap-8">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-[#64ffda] transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Resume Button - Desktop */}
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-mono text-[#64ffda] border-2 border-[#64ffda]/50 rounded-lg hover:bg-[#64ffda]/10 hover:border-[#64ffda] hover:shadow-[0_0_20px_rgba(100,255,218,0.25)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            {/* Resume Button - Mobile (visible without opening menu) */}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center px-3.5 py-2 text-xs font-mono text-[#64ffda] border-2 border-[#64ffda]/50 rounded-lg hover:bg-[#64ffda]/10 hover:border-[#64ffda] transition-all duration-300"
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-400 hover:text-[#64ffda] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 right-0 bottom-0 w-72 bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-800 z-[60] shadow-2xl"
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <span className="text-lg font-bold text-zinc-100">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-[#64ffda] hover:bg-zinc-800 rounded-lg transition-all"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-[#64ffda] hover:bg-zinc-900 rounded-lg transition-all group"
                    >
                      <span className="text-xs font-mono text-[#64ffda]">
                        0{index + 1}.
                      </span>
                      <span className="text-base font-medium group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resume Button - inside mobile menu */}
            <div className="p-6 pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3.5 text-center font-mono text-base text-[#64ffda] border-2 border-[#64ffda]/50 rounded-lg hover:bg-[#64ffda]/10 hover:border-[#64ffda] transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
        />
      )}
    </>
  );
}
