import { ImGithub } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";

// URLs of the project images delivered through Cloudinary
const ellenaArtGallery =
  "https://res.cloudinary.com/dh3yknk5o/image/upload/v1691587633/Hristo%20site/ellena_bif8es.webp";

const skycast =
  "https://res.cloudinary.com/dh3yknk5o/image/upload/v1691588093/Hristo%20site/skycast_eqyb05.webp";

const crownshop =
  "https://res.cloudinary.com/dh3yknk5o/image/upload/v1691588093/Hristo%20site/crwn-shop_fdczrw.webp";

const navLinks = [
  {
    id: "about",
    title: "About",
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
    name: "Ellena Art Gallery",
    description: `Designed by Ellena and developed by me.'Ellena Art Gallery' is captivating website showcasing  Ellena artistic journey. Built using React and TypeScript, the platform elegantly captures her creative expressions while providing an immersive digital art experience.`,
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "react router",
        color: "pink-text-gradient",
      },
      {
        name: "CSS Modules",
        color: "orange-text-gradient",
      },
    ],
    image_source: ImGithub,
    source_code: "https://github.com/Trickkyyy/elena-portfolio",
    image_live: BsLink45Deg,
    live: "https://ellena-art.gallery",
    project_image: ellenaArtGallery,
  },
  {
    name: "Crown Shop",
    description: `E-commerce website with authentication and routing.Utilizing React-router and Context API.Authentication though email and password and Google 0Auth.Firestore is used for storing user and products data.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "orange-text-gradient",
      },
    ],
    image_source: ImGithub,
    source_code: "https://github.com/Trickkyyy/crwn-ecommerce",
    image_live: BsLink45Deg,
    live: "https://ecommece-crown-shop.netlify.app/",
    project_image: crownshop,
  },
  {
    name: "SkyCast",
    description:
      "Web application to check the current weather and a 24 hour forecast.The weather data is fetched through two different APIs and also using a geolocation API to display the weather at your current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image_source: ImGithub,
    source_code: "https://github.com/Trickkyyy/weather-app-react",
    image_live: BsLink45Deg,
    live: "https://skycast-v1g9.onrender.com",
    project_image: skycast,
  },
];

export { navLinks, projects };
