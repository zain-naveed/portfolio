/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Zain Naveed",
  title: "Hi all, I'm Zain",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Hybrid mobile applications with JavaScript / React / Next / Nodejs / Ionic / React Native and some other cool libraries and frameworks."
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/zain-naveed",
  linkedin: "https://www.linkedin.com/in/zain-naveed-%EF%A3%BF-5014a9163/",
  gmail: "zainnaveed3000@gmail.com",
  gitlab: "https://gitlab.com/zain-naveed",
  facebook: "https://www.facebook.com/aghaali.abbas.5",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop scaleable and clean api's"),
    emoji("⚡ Desing scaleable database"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS"),
    emoji(
      "⚡ Full command in deploying apps on both stores (Appstore & Playstore)"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "appstore",
      fontAwesomeClassname: "fab fa-app-store-ios",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongoDb",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Reactjs", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Nextjs", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Sass", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Material UI", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Bootstrap", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Stripe", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Nodejs",
      progressPercentage: "85%",
    },
    {
      Stack: "Nestjs",
      progressPercentage: "85%",
    },
    {
      Stack: "Mongodb",
      progressPercentage: "85%",
    },
    {
      Stack: "AWS",
      progressPercentage: "70%",
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken:
    "OGMyOGE1NmQ4MGI2MzBiZmUyMjBmNzM1NDJkNGRlNjBkZGE1YWQ0Yg==",
  githubUserName: "zain-naveed",
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects developed by me",
  subtitle: "These are some of the projects developed by me",
  projects: [
    {
      name: "Aliflaila",
      description: "A web app for a Education Tech",
      techStack: [
        {
          name: "Next.js",
          color: "#c3142d",
        },
        {
          name: "Redux",
          color: "#ffcb2b",
        },
        {
          name: "Laravel",
          color: "#ffcb2b",
        },
        {
          name: "SQL",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://www.aliflaila.app/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Alter",
      description: "A web app for a live Streaming",
      techStack: [
        {
          name: "React.js",
          color: "#478aff",
        },
        {
          name: "Redux",
          color: "#c3142d",
        },
        {
          name: "PHP (LARAVEL)",
          color: "#5466b6",
        },
        {
          name: "SQL",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://alter.tv/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Canonizer",
      description: "A web app for generate consenus content",
      techStack: [
        {
          name: "Next.js",
          color: "#478aff",
        },
        {
          name: "Antd",
          color: "#c3142d",
        },
      ],
      webUrl: "https://canonizer.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Procurement Web",
      description: "A web app related to client specification",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://web.procurementleague.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "JMK",
      description: "A web app sell arts for the artist",
      techStack: [
        {
          name: "React.js",
          color: "#478aff",
        },
        {
          name: "Stripe",
          color: "#5466b6",
        },
        {
          name: "Sass",
          color: "#c3142d",
        },
      ],
      webUrl: "https://johnniemaeking.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "MediTour",
      description: "A web app related for medical",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://meditour.global/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Trader 2B",
      description: "A web app for stock trading",
      techStack: [
        {
          name: "React.js",
          color: "#478aff",
        },
        {
          name: "Nats.io",
          color: "#c3142d",
        },
        {
          name: "Quote Media",
          color: "#5466b6",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
      ],
      webUrl: "https://trader2b.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Beautypass",
      description: "A web app for beauty fashion",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://www.beautypass.app/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Novus Guard",
      description: "An web app for client specification",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://www.novusguard.co.uk/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Openborders Web",
      description: "An web for border consultation application",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://openborders.io/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Salon Substitue",
      description:
        "A Salon Substitue web app with salon & professionals found using locations ",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://thesalonsubstitute.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Cryptokara",
      description: "An web app for crypto curency application",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://www.cryptokara.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "ACX",
      description: "An app for Defi application",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Web3.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://acxd.kryptomind.net/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Exchange Bot Platform",
      description: "An web app for order management",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "http://mm.netrosol.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
    {
      name: "Venly and Mercuryo Integration",
      description: "An web app for client specification",
      techStack: [
        {
          name: "React.js",
          color: "#c3142d",
        },
        {
          name: "Node.js",
          color: "#ffcb2b",
        },
        {
          name: "Express.js",
          color: "#ffcb2b",
        },
        {
          name: "MongoDB",
          color: "#5466b6",
        },
        {
          name: "AWS-S3",
          color: "#5466b6",
        },
      ],
      webUrl: "https://rarefnd.com/",
      appStoreUrl: null,
      playStoreUrl: null,
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3064658206",
  email_address: "zainnaveed3000@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
