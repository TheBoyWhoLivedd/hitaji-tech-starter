export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Table",
  description:
    "Hitaji Tech Starter with a Shadcn table component with server side sorting, pagination, and filtering",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hitaji-tech-starter.vercel.app",
  links: { github: "" },
};
