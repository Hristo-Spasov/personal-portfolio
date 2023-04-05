import {ImGithub} from 'react-icons/im'
import {BsLink45Deg} from 'react-icons/bs'
import facerecogniton from '/src/assets/facerecognition.jpg'
import skycast from '/src/assets/skycast.jpg'




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
]


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
    project_image: skycast
  },
  {
    name: "Face Recognition",
    description:
      `Face Recognition App which detects human face on a .jpg URLs using the Clarifay API.
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
    project_image: facerecogniton
  },
]

export {navLinks,projects}

