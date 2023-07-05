import { ImGithub } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";

// URLs of the project images delivered through Cloudinary
const facerecognition =
  "https://res.cloudinary.com/dh3yknk5o/image/upload/v1688557607/facerecognition_wz7uc0.jpg";

const skycast =
  "https://res.cloudinary.com/dh3yknk5o/image/upload/v1688557607/skycast_z34m5t.jpg";

const crownshop =
  "https://res.cloudinary.com/dh3yknk5o/image/upload/v1688557607/crwnshop_oorddl.jpg";

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
  {
    name: "Face Recognition",
    description: `Face Recognition App which detects human face on a .jpg URLs using the Clarifay API.
      Demo credentials without Registering:
      account:test@test.com | password: test 
      *IMPORTANT* 
      Currently the app is hosted on render.com and the request are very slow!`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "tachyons",
        color: "orange-text-gradient",
      },
    ],
    image_source: ImGithub,
    source_code: "https://github.com/Trickkyyy/face-recognition",
    image_live: BsLink45Deg,
    live: "https://face-recognition-7rvj.onrender.com",
    project_image: facerecognition,
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
];

export { navLinks, projects };
