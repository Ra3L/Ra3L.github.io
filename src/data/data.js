import SocialApp from "../assets/projects/SocialApp.png";
import PizzaHub from "../assets/projects/PizzaHub.jpg";

export const data = [
  {
    id: 1,
    name: "SocialApp",
    image: SocialApp,
    github: "https://github.com/Rha3L/socialapp-mern",
    live: "https://socialapp-mern.vercel.app/",
    description:
      "- This project is social media webpage built with ReactJS and NodeJS.\n- It requires user authorization and authentication.\n- It's a full stack MERN project practicing CRUD operations with database.",
    tech: ["mongoBD", "ExpressJS", "reactJS", "nodeJS"],
  },
  {
    id: 2,
    name: "Pizzeria Hub",
    image: PizzaHub,
    github: "https://github.com/Rha3L/pizzeriahub-ts",
    live: "https://pizzeriahub.vercel.app/",
    description:
      "-This project is pizza shop webpage built with ReactJS and Typescript.\n- It integrated with external APIs. \n- It's a frontend project practicing typescript with react framework.",
    tech: ["typescript", "reactJS"],
  },
  // {
  //   id: 3,
  //   name: "React JS Application",
  //   image: RealEst,
  //   github: "",
  //   live: "",
  // },
];
