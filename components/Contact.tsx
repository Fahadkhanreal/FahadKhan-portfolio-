"use client";

import { motion } from "framer-motion";
import { contactData } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#64ffda] font-mono text-sm mb-4">
            04. What's Next?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            {contactData.title}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-8 max-w-xl mx-auto">
            {contactData.description}
          </p>

          <p className="text-[#64ffda] text-lg font-mono mb-12">
            {contactData.email}
          </p>

          <motion.a
            href={`https://mail.google.com/mail/?view=cm&to=${contactData.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded font-medium hover:bg-[#64ffda]/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {contactData.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
