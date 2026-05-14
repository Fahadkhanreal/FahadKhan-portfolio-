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
  title: "Full-Stack Developer",
  description: "I build exceptional digital experiences with modern web technologies. Specialized in React, Next.js, and TypeScript.",
  cta: {
    primary: "View Projects",
    secondary: "Contact Me",
  },
};
