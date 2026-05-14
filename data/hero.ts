export interface HeroData {
  name: string;
  title: string;
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

export const heroData: HeroData = {
  name: "Fahad",
  title: "Full-Stack Developer & AI Enthusiast",
  description: "I build fast, scalable, and modern web applications with exceptional user experiences using Next.js, React, TypeScript, and cutting-edge technologies.",
  cta: {
    primary: "View Projects",
    secondary: "Contact Me",
  },
};
