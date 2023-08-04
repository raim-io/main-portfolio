import {
  // profile icons
  githubProfile,
  gitlab,
  instagram,
  linkedin,
  twitter,

  // skills icons
  webDev,
  devops,
  techWriter,
  mobile,
  backend,
  creator,
  web,

  // tech stack icons
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  aws,
  dO,
  jenkins,
  nexus,

  // experience icons
  meta,
  starbucks,
  tesla,
  shopify,

  // project images
  userMgmt,
  reactPlanner,
   carrent,
  jobit,
  tripguide,
} from "../assets";

// navigation links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// social profiles
export const socials = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/raheem-isaac/",
    icon: linkedin,
  },
  {
    id: "twitter",
    url: "https://twitter.com/raim_io",
    icon: twitter,
  },
  {
    id: "github",
    url: "https://github.com/raim-io",
    icon: githubProfile,
  },
  {
    id: "gitlab",
    url: "http://gitlab.com/raim.io",
    icon: gitlab,
  },
  {
    id: "instagram",
    url: "https://instagram.com/raim.io",
    icon: instagram,
  },
]


// services or skills
const services = [
  {
    title: "Web Developer",
    icon: webDev,
  },
  {
    title: "DevOps engineer",
    icon: devops,
  },
  {
    title: "Technical writer",
    icon: techWriter,
  },
];

// tech stack
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Digital Ocean",
    icon: dO,
  },
  {
    name: "Nexus",
    icon: nexus,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
];

// experiences/history of work
const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// feeabacks/testimonials
const testimonials = [
  {
    testimonial:
      "Hardworking, honest, and passionate, all you need in an employee. Always ready to take on complicated tasks and prove everyone wrong. Keep it up.",
    name: "Ismail Adedamola",
    designation: "CEO",
    company: "AUTODAMS Nig.",
    image: "https://media.licdn.com/dms/image/C5603AQG9tqkjOQgc_Q/profile-displayphoto-shrink_800_800/0/1648905982893?e=2147483647&v=beta&t=x64Q8Szvh6kHzDVYqqeJttOq5Bh-o1RLjlAQWYjicVE",
  },
];

// projects or works
const projects = [
  {
    name: "User Management System",
    description:
      "A web application that enables the creation of a user, deleting user details as well as updating user details. It is an implementation of CRUD abilities using the ejs view engine and express backend",
    tags: [
      {
        name: "EJS",
        color: "text-white",
      },
      {
        name: "Express",
        color: "text-white",
      },
      {
        name: "Mongodb",
        color: "text-white",
      },
    ],
    image: userMgmt,
    source_code_link: "https://github.com/raim-io/ejs-user_management-crud_application.git",
    site_link: "",
  },
  {
    name: "Planner App",
    description:
      "Web-based platform that allows users create a plan using widgets. Backed with date, time, Reminder, and stop-watch functionalities.",
    tags: [
      {
        name: "react",
        color: "text-white",
      },
      {
        name: "react-dom",
        color: "text-white",
      },
      {
        name: "web-vitals",
        color: "text-white",
      },
    ],
    image: reactPlanner,
    source_code_link: "https://github.com/raim-io/react-planner-app.git",
    site_link: "https://raim-planner-app.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
