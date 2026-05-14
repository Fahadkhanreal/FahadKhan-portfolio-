"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-12">
            <span className="text-[#64ffda] font-mono text-xl mr-2">01.</span>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-zinc-400 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-6"
              >
                <p className="text-zinc-400 mb-4">Technologies I work with:</p>
                <ul className="grid grid-cols-2 gap-2">
                  {aboutData.skills.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.08,
                        ease: "easeOut"
                      }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="text-sm text-zinc-400 flex items-center gap-2"
                    >
                      <span className="text-[#64ffda]">▹</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-[#64ffda] bg-zinc-900">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                  [Your Photo Here]
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
