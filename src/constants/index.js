import { ImGithub } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Za Vecheria",
    description: `Full-Stack recipe recommendation platform. Developed using Next.js, TypeScript and Strapi CMS. Integrated Redis for server-side state persistence and high performance query handling. Features a custom Python data pipeline for 1400+ recipes enriched by LLM APIs and AI-generated imagery.`,
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "Redis", color: "orange-text-gradient" },
      { name: "Strapi", color: "blue-text-gradient" },
    ],
    source_code: "https://github.com/Hristo-Spasov/za-vacheria-FE",
    live: "https://www.zavecheria.com",
    project_image: "https://zavecheria.com/opengraph-image.png",
  },
  {
    name: "Azure Routes",
    description: `Real-time aviation schedule explorer. Built with React, TypeScript, and Node.js. Features dynamic search with PostgreSQL-backed auto suggestions and efficient client-side caching via React Query. Visualizes complex arrivals/departures data from third-party aviation APIs.`,
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "React Query", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "orange-text-gradient" },
    ],
    source_code: "https://github.com/Hristo-Spasov/azureroutes",
    live: "https://azureroutes.com/",
    project_image:"https://azureroutes.com/open_graph_image.png", // Placeholder
  },
  {
    name: "Recipe Data Pipeline",
    description: `Automated data engineering pipeline. Built with Python and BeautifulSoup for web scraping, using Pandas for validation and LLM APIs for metadata enrichment. Automates AI image generation via ComfyUI WebSocket API to produce structured, multilingual datasets.`,
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "BeautifulSoup", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
      { name: "OpenAI SDK", color: "orange-text-gradient" },
      { name: "ComfyUI", color: "orange-text-gradient" },
    ],
    source_code: "https://github.com/Hristo-Spasov/recipe_scrapper",
    project_image: "https://www.kdnuggets.com/wp-content/uploads/yada_python_used_data_visualization_10.jpg", // Placeholder
  },
];

export { navLinks, projects };
