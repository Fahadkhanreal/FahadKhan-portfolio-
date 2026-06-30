"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectCardProps } from "@/types";

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -14, transition: { duration: 0.4, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
      className={`relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl hover:shadow-[#64ffda]/10 transition-shadow ${
        project.liveUrl ? "cursor-pointer" : ""
      }`}
    >
      {/* Overlay link — covers entire card */}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`${project.title} — live demo`}
        />
      )}
      <div className="relative aspect-video overflow-hidden pointer-events-none">
        <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={index < 2} />
      </div>
      <div className="p-8 flex flex-col flex-grow pointer-events-none">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">{project.title}</h3>
        <p className="mt-3 text-zinc-400 leading-relaxed flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-mono px-4 py-1.5 bg-zinc-950 text-[#64ffda] border border-zinc-700 rounded-full">{tech}</span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 justify-end pointer-events-auto relative z-20">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#64ffda] transition-colors"
            >
              <ExternalLink size={18} />Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#64ffda] transition-colors"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
