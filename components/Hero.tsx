"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { heroData } from "@/data/hero";

export default function Hero() {
  const [displayedGreeting, setDisplayedGreeting] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const greeting = "Hi, my name is";
  const name = heroData.name + ".";
  const title = heroData.title;
  const description = heroData.description;

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;

    if (currentStep === 0) {
      typingInterval = setInterval(() => {
        if (index <= greeting.length) {
          setDisplayedGreeting(greeting.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setCurrentStep(1);
        }
      }, 30);
    } else if (currentStep === 1) {
      index = 0;
      typingInterval = setInterval(() => {
        if (index <= name.length) {
          setDisplayedName(name.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setCurrentStep(2);
        }
      }, 60);
    } else if (currentStep === 2) {
      index = 0;
      typingInterval = setInterval(() => {
        if (index <= title.length) {
          setDisplayedTitle(title.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setCurrentStep(3);
        }
      }, 50);
    } else if (currentStep === 3) {
      index = 0;
      typingInterval = setInterval(() => {
        if (index <= description.length) {
          setDisplayedDescription(description.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setCurrentStep(4);
        }
      }, 20);
    }

    return () => clearInterval(typingInterval);
  }, [currentStep, greeting, name, title, description]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#64ffda] font-mono text-sm mb-6 min-h-[1.5rem]">
            {displayedGreeting}
            {currentStep === 0 && <span className="animate-pulse">|</span>}
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 mb-4 min-h-[5rem]">
            {displayedName}
            {currentStep === 1 && <span className="animate-pulse">|</span>}
          </h1>

          <h2 className="text-5xl md:text-6xl font-bold text-zinc-400 mb-6 min-h-[4rem]">
            {displayedTitle}
            {currentStep === 2 && <span className="animate-pulse">|</span>}
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mb-12 leading-relaxed min-h-[4rem]">
            {displayedDescription}
            {currentStep === 3 && <span className="animate-pulse">|</span>}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentStep >= 4 ? 1 : 0, y: currentStep >= 4 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded font-medium hover:bg-[#64ffda]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroData.cta.primary}
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-4 text-zinc-400 hover:text-[#64ffda] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroData.cta.secondary}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
