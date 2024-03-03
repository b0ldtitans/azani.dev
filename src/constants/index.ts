const links = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Skills",
    url: "#skills",
  },
  {
    name: "Experience",
    url: "#experience",
  },
  {
    name: "Portfolio",
    url: "#portfolio",
  },
  {
    name: "Contact",
    url: "#contact",
  },
] as const;

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS",
  "Python 3",
  "React.Js",
  "Next.Js",
  "TailwindCSS",
  "Node.Js",
  "Express.Js",
  "Sequelize.Js",
  "REST APIs",
  "JSON Web Token (JWT)",
  "bcrypt",
  "PostgreSQL",
  "MySQL",
  "FastAPI",
  "Debugging",
  "GitHub",
  "Problem Solving",
  "Agile Methodology",
] as const;

const portfolio = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Nginapp - Booking platform",
    desc: "Nginapp is a cutting-edge Property Renting Web App designed to revolutionize the rental experience. Nginapp operates on a web-based platform, offer users a seamless and efficient way to compare accommodation prices based on specific dates. The app introduces a unique approach to property rental, considering factors such as national holidays, extended weekends, and manually set dates that influence accommodation prices.",
    img: "/nginapp.png",
    srcCode: "https://github.com/b0ldtitans/jcwd250402",
    link: "https://nginapp.azani.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Medium Articles",
    desc: "You'll often find me sharing my thoughts, experiences, and knowledge on Medium.com. I love translating complex coding concepts into easy-to-understand articles. From diving into the intricacies of React.js to unleashing the power of Next.js, my articles are a blend of tutorials, tips, and real-world application stories.    ",
    img: "/medium.png",
    srcCode: "",
    link: "https://medium.com/@thareqazani",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "FamilyMart POS Web App",
    desc: `The "FamilyMart Cashier POS Web App" is an innovative point-of-sale (POS) solution designed to streamline and enhance the cashier operations at FamilyMart convenience stores. This web-based application aims to provide FamilyMart's cashier staff with a modern, efficient, and user-friendly tool for processing transactions, managing inventory, and improving the overall shopping experience for customers.`,
    img: "/familymart.png",
    srcCode: "https://github.com/b0ldtitans/FamilyMart-POSWebApp",
    link: "",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "The Ticket Registry",
    desc: "Passionate and results-driven Front-End Developer with a strong focus on creating intuitive and user-friendly web applications. Currently, I am working on an exciting project similar to SeatGeek, where users can buy tickets for various events, webinars, and sports. Additionally, users have the option to sell their tickets, and event organizers can effortlessly create events and sell tickets. I'm dedicated to bringing this concept to life, ensuring a seamless and engaging user experience.",
    img: "/TRR.png",
    srcCode: "https://github.com/b0ldtitans/project1-event_management",
    link: "https://fantastic-beignet-b35cbd.netlify.app/",
  },
];

const variants = {
  topVariants: {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255, 255)",
    },
  },

  centerVariants: {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  },

  bottomVariants: {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255, 255)",
    },
  },

  listVariants: {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },

  listItemVariants: {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  },
};

const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export type SectionName = (typeof links)[number]["name"];

export { links, skills, portfolio, variants, fadeIn };
