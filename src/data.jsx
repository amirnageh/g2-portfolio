import { v4 } from "uuid";
import ProjectImg1 from "./assets/images/projects/1.png";
import ProjectImg2 from "./assets/images/projects/2.png";
import ProjectImg3 from "./assets/images/projects/3.png";
import ProjectImg4 from "./assets/images/projects/4.png";
import ProjectImg5 from "./assets/images/projects/5.png";
import ProjectImg6 from "./assets/images/projects/6.png";
import ProjectImg7 from "./assets/images/projects/7.png";
import ProjectImg8 from "./assets/images/projects/8.png";
import ProjectImg9 from "./assets/images/projects/9.png";

export const projects = [
  {
    id: v4(),
    title: "Bazy Track",
    client: "Bazy",
    technologies: "React, Node.js, MongoDB",
    image: ProjectImg1,
    previewLink: "https://bazytrack.com",
  },
  {
    id: v4(),
    title: "moseco",
    client: "moseco",
    technologies: "Vue.js, Firebase",
    image: ProjectImg2,
    previewLink: "https://moseco.com",
  },
  {
    id: v4(),
    title: "Guinness World Records™",
    client: "Guinness",
    technologies: "Angular, Express.js, MySQL",
    image: ProjectImg3,
    previewLink: "https://guinnessworldrecords.com",
  },
  {
    id: v4(),
    title: "Starlink",
    client: "starlink qa",
    technologies: "HTML, CSS, JavaScript",
    image: ProjectImg4,
    previewLink: "https://starlink.qa",
  },
  {
    id: v4(),
    title: "nafes Ai",
    client: "nafes",
    technologies: "Python, Django, PostgreSQL",
    image: ProjectImg5,
    previewLink: "https://nafes.ai",
  },
  {
    id: v4(),
    title: "seasonal markets",
    client: "seasonal markets",
    technologies: "Ruby on Rails, SQLite",
    image: ProjectImg6,
    previewLink: "https://seasonal-markets.ncpd.gov.sa/",
  },
  {
    id: v4(),
    title: "mcit",
    client: "ministry of communication and information technology",
    technologies: "PHP, Laravel, MariaDB",
    image: ProjectImg7,
    previewLink: "https://futureskills.mcit.gov.sa/ar/ambassadors-program",
  },
  {
    id: v4(),
    title: "ncnp",
    client: "national center for non-profit sector",
    technologies: "ASP.NET, C#, SQL Server",
    image: ProjectImg8,
    previewLink: "https://ncnp.gov.sa",
  },
  {
    id: v4(),
    title: "edumeter",
    client: "edumeter",
    technologies: "Java, Spring Boot, OracleDB",
    image: ProjectImg9,
    previewLink: "https://edumeter.sa",
  },
];
