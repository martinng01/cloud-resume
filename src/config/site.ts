export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "My Portfolio",
  description: "My Portfolio.",
  navItems: [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Skills",
      href: "#skills",
    },
  ],
  links: {
    github: "https://github.com/martinng01",
    linkedin: "https://linkedin.com/in/martinng01",
    email: "mailto:martin.ng2001@gmail.com",
  },
};
