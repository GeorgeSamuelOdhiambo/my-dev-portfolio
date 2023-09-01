import emoji from "react-easy-emoji";

export const greetings = {
  name: "Odhiambo George",
  title: "Hi all, I'm George",
  description:
    "I am a dedicated software developer with a wealth of experience in developing web applications using a wide range of technologies, including JavaScript, Node.js, React.js, Next.js, and Java (Spring Boot). In addition I have expertise in cloud computing, particularly with Azure, and am proficient in working with various databases, including MySQL, PostgreSQL, MongoDB, Firebase.",
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
  subTitle: "",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in NodeJs & SpringBoot application"),
        emoji("⚡ Databases: Well-versed in working with MongoDB, PostgreSQL, and MySQL."),
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
    Stack: "Javascript (NodeJs)",
    progressPercentage: "90",
  },
  {
    Stack: "API Integration",
    progressPercentage: "80",
  },
  {
    Stack: "Java (SpringBoot)",
    progressPercentage: "70",
  },
  {
    Stack: "ReactJs and NextJs",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Maseno University",
    subHeader: "BSc in Computer Technology",
    duration: "From 2018 to 2022",
    desc: "I gained a comprehensive understanding of computer science and technology. This program equipped me with valuable knowledge and skills in areas such as programming, software development and computer networks.",
    grade: "",
    descBullets: [],
  },
  {
    schoolName: "Usenge High School",
    subHeader: "Kenya Certificate of Secondary Education",
    duration: "From 2014 to 2017",
    desc: "At Usenge High School, I pursued my Kenya Certificate of Secondary Education from 2014 to 2017, during which I gained valuable knowledge and skills that have contributed to my educational and personal growth.",
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
    name: "T24 Bridge",
    desc: "The T24 Bridge is a robust and versatile integration solution designed to seamlessly connect T24 core banking systems with external applications, enabling efficient data exchange, real-time updates, and enhanced operational flexibility for financial institutions.",
    github: "https://github.com/GeorgeSamuelOdhiambo",
  },
  {
    name: "Poultry Management",
    desc: "The poultry management system efficiently tracks poultry, manages expenses, schedules vaccinations, monitors investments, analyzes profits, oversees incubation periods, optimizes feeding for poultry farmers e.t.c",
    github: "https://github.com/GeorgeSamuelOdhiambo",
  },
  {
    name: "Bill Reminder",
    desc: "The Bill Reminder System is a user-friendly solution that helps individuals and businesses effortlessly keep track of their upcoming bills, ensuring timely payments, avoiding late fees, and maintaining financial stability.",
    github: "https://github.com/GeorgeSamuelOdhiambo",
  },
  {
    name: "API Integration",
    desc: "Seamlessly connects multiple essential services, including STK push for mobile payments, Mastercard for secure transactions, SMS for instant notifications, email for communication, and POS for point-of-sale operations, providing businesses with a unified and efficient platform for their diverse digital needs.",
    github: "https://github.com/GeorgeSamuelOdhiambo",
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
