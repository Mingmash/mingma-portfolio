import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Tech Innovators Nepal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2025 - July 2025",
    points: [
     "Built responsive user interfaces using React.js and Tailwind CSS.",
    "Worked closely with senior developers to integrate REST APIs.",
    "Fixed UI bugs and improved website performance.",
    "Used Git and GitHub for version control and team collaboration.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance Projects",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2025",
    points: [
      "Developed portfolio and business websites for small clients.",
    "Implemented responsive design for mobile and desktop compatibility.",
    "Optimized websites for SEO and faster loading speed.",
    "Deployed projects using Vercel and Netlify.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "College Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2026 - June 2026",
    points: [
       "Built RESTful APIs using Node.js and Express.js.",
    "Integrated MongoDB for database management.",
    "Implemented authentication using JWT.",
    "Tested APIs using Postman and handled error management.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Personal Startup Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
     "Developing a full-stack web application using MERN stack.",
    "Designed database schema and managed backend logic.",
    "Built dynamic frontend with reusable React components.",
    "Deployed and maintained the application on cloud platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make website as beautiful this one but Mingma proved me wrong.",
    name: "Lhemi Sherpa",
    designation: "CFO",
    company: "Acme Co",
    image: "/images/rev3.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mingma does.",
    name: "Ngima Sherpa",
    designation: "COO",
    company: "DEF Corp",
    image: "/images/rev1.jpg",
  },
  {
    testimonial:
      " The experience was amazing! Their creative approach helped me see solutions I hadn’t thought of before.",
    name: "Karma Sherpa",
    designation: "CTO",
    company: "456 Enterprises",
    image: "/images/rev4.jpg",
  },
  {
    testimonial:
      "His guidance made a complex process feel easy. I’m grateful for the clarity and efficiency they provided. ",
    name: "Lhakpa Sherpa",
    designation: "CFO",
    company: "Acme Co",
    image: "/images/rev2.jpeg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };