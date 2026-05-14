"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-zinc-100 mb-12">
            <span className="text-[#64ffda] font-mono text-xl mr-2">02.</span>
            Experience
          </h2>

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-zinc-800"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#64ffda] border-4 border-zinc-950" />

                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {job.title}
                  </h3>
                  <p className="text-[#64ffda] font-medium">{job.company}</p>
                  <p className="text-sm text-zinc-500 mt-1">{job.period}</p>
                </div>

                <p className="text-zinc-400 mb-4">{job.description}</p>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-400 flex items-start gap-2"
                    >
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {job.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-zinc-950 text-[#64ffda] border border-zinc-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
