import emoji from "react-easy-emoji";

export const greetings = {
  name: "Odhiambo George",
  title: "Hi all, I'm George",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    "https://docs.google.com/document/d/1WSADYSzVQCtHlAkHqPtEFvk23apzYvpoz1mixdWRvO8/",
};

export const openSource = {
  githubUserName: "GeorgeSamuelOdhiambo",
};

export const contact = {};

export const socialLinks = {
  url: "",
  linkedin: "https://www.linkedin.com/in/george-samuel-44807b20b/",
  github: "https://github.com/GeorgeSamuelOdhiambo",
  instagram: "",
  facebook: "https://www.facebook.com/odhiambo.george.775/",
  twitter: "https://twitter.com/Odhiamb08032450",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          iconifyTag: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          iconifyTag: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
        {
          skillName: "Sentry",
          iconifyTag: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Usenge High School",
    subHeader: "Kenya Certificate of Secondary Education",
    duration: "From 2014 to 2017",
    desc: "Participated in the research of XXX and published 3 papers.",
    grade: "",
    descBullets: [],
  },
  {
    schoolName: "Maseno University",
    subHeader: "BSc in Computer Technology",
    duration: "From 2018 to 2022",
    desc: "Participated in the research of XXX and published 3 papers.",
    grade: "",
    descBullets: [],
  },
];

export const experience = [
  {
    role: "Junior Software Developer",
    company: "SG NewTech",
    companyLogo: "/img/icons/common/softwareTest.jpg",
    date: "November 2022 – Present",
    desc: `
    ➢ Integrating T24 with third-party system i.e MasterCard.
    ➢ Learning T24 modules and the overall architecture.
    ➢ Developing proposals and new propositions
    ➢ Assist in the creation of presentations decks, spreadsheets and other assessment tools. Learn the modules of T24 and the overall architecture
    `,
  },
  {
    role: "Software Developer Intern",
    company: "AppKings Solutions",
    companyLogo: "/img/icons/common/appkins.jpg",
    date: "September 2021 – January 2022",
    desc: `
    ➢ Contributed to the development process, identifying and solving technical challenges.
    ➢ Assisted in the installation and configuration of network equipment.
    ➢ Gained valuable exposure to Microsoft Dynamics (ERP and CRM) solutions.
    ➢ Augmented knowledge of software development methodologies.
    `,
  },
];

export const projects = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "https://github.com/1hanzla100/Django-React-Marketplace",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "https://github.com/1hanzla100/django-react-forum",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "https://github.com/1hanzla100/Django-ecommerce",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on /types/section.ts page
export const seoData = {
  title: "Odhiambo George",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Odhiambo George",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
