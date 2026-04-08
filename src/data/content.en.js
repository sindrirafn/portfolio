export const contentEn = {
  hero: {
    title: "Sindri Rafn Guðmundsson",
    subtitle: "Software specialist building practical, user-focused technical solutions.",
    viewProjects: "View Projects",
    contactMe: "Contact Me"
  },
  navbar: {
    logo: "Sindri Rafn",
    tabsAriaLabel: "Primary content tabs",
    tabs: {
      about: "About",
      cv: "CV",
      skills: "Skills",
      projects: "Projects"
    },
    controls: {
      languageToggleAria: "Language selector",
      themeToggleAria: "Toggle color theme"
    }
  },
  IntroPanel: {
    name: "Sindri Rafn Guðmundsson",
    title: "Software Specialist / Developer",
    intro: "I build practical, user-focused solutions with a background in support, systems, and software development.",
    imageSrc: "",
    imageAlt: "Portrait of Sindri Rafn Guðmundsson",
    badges: ["React", ".NET", "SQL", "Power BI"]
  },
  About: {
    heading: "About me",
    introParagraphs: [
      "I am a software specialist with a background in computer science and biomedical engineering.",
      "I have worked on setup, maintenance, and development of solutions, and I care about building simple, well-designed software that is genuinely useful in real projects.",
      "I focus on clear structure, good user experience, and solutions that are practical in day-to-day work."
    ],
    intro: "I am a software specialist with a background in computer science and biomedical engineering.",
    focusLabel: "Focus",
    focus: "Building practical software and systems work across modern development and Microsoft-based environments.",
    currentlyLabel: "Currently",
    currently: "I am currently building this portfolio, developing projects, and looking for opportunities in software development or engineering.",
    linksLabel: "Links",
    contactLabel: "Contact",
    contactText: "Feel free to reach out if you want to talk about work opportunities, projects, or collaboration.",
    githubLabel: "GitHub",
    githubValue: "github.com/sindrirafn",
    githubUrl: "https://github.com/sindrirafn",
    linkedInUrl: "",
    emailLabel: "Email",
    email: "sindrig94@gmail.com",
    phoneLabel: "Phone",
    phone: "846-0717",
    locationLabel: "Location",
    location: "Hveragerdi"
  },
  CV: {
    title: "Curriculum Vitae",
    subtitle: "Professional background and qualifications",
    tabs: {
      profile: "Profile",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      other: "Other",
      references: "References"
    },
    otherSections: {
      languages: "Languages",
      interests: "Interests"
    },
    profile: {
      name: "Sindri Rafn Guðmundsson",
      phone: "846-0717",
      email: "sindrig94@gmail.com",
      location: "Dalahraun 13, 810 Hveragerði",
      summary: [
        "I am educated in biomedical engineering and computer science. In my role as a software specialist at Spektra, I handled the setup and maintenance of solutions, along with user support and data migration work. The job was diverse and required both precision and solution-oriented thinking.",
        "Previously, I worked for seven years at a residential home for people with autism, where I gained extensive experience in teamwork, communication with individuals with diverse needs, and handling challenging situations.",
        "I am ready to take on new challenges and adapt quickly to changes and learn new things."
      ]
    },
    experience: [
      {
        id: "spektra",
        title: "Software Specialist",
        company: "Spektra",
        location: "Laugarvegur 128, 105 Reykjavík",
        start: "2023-07",
        end: "2025-09",
        startLabel: "July 2023",
        endLabel: "September 2025",
        bullets: [
          "Setup, maintenance and adaptation of solutions (SharePoint and WorkPoint)",
          "Technical analysis and troubleshooting",
          "User support and communication with clients",
          "Data migration between systems and environments",
          "Automation and simplification of workflows using PowerShell and Power Automate"
        ]
      },
      {
        id: "joklasel",
        title: "Support Worker",
        company: "Íbúðarkjarninn Jöklaseli",
        location: "Jöklasel 2, 109 Reykjavík",
        start: "2016-04",
        end: "2023-06",
        startLabel: "April 2016",
        endLabel: "June 2023",
        bullets: [
          "Support for individuals with autism in daily life",
          "Work according to clear procedures and in teams",
          "Responsibility, patience and professional approach in challenging situations"
        ]
      },
      {
        id: "blonduos-pool",
        title: "Pool Attendant",
        company: "Íþróttamiðstöðin á Blönduósi",
        location: "Melabraut 2, 540 Blönduósi",
        start: "2014",
        end: "2015",
        startLabel: "2014",
        endLabel: "2015",
        bullets: [
          "Supervision and cleaning of pool area and related facilities",
          "Guest service and ensuring safety and compliance"
        ]
      },
      {
        id: "summer-part-time",
        title: "Various Summer and Part-time Jobs",
        company: "",
        location: "",
        start: "2009",
        end: "2014",
        startLabel: "2009",
        endLabel: "2014",
        bullets: []
      }
    ],
    education: [
      {
        id: "cs-bsc",
        degree: "B.Sc. in Computer Science",
        school: "Reykjavik University",
        start: "2021-01",
        end: "2022-01",
        startLabel: "Jan 2021",
        endLabel: "Jan 2022"
      },
      {
        id: "biomed-bsc",
        degree: "B.Sc. in Biomedical Engineering",
        school: "Reykjavik University",
        start: "2017-09",
        end: "2020-06",
        startLabel: "Sept 2017",
        endLabel: "June 2020"
      }
    ],
    projects: [
      {
        id: "tasklist",
        title: "TaskList – Task Management App (Full-stack)",
        github: "https://github.com/sindrirafn/TaskList",
        bullets: [
          "Developed a task management application with frontend and backend",
          "Implemented key functionality including task creation, status overview, and interactive modals",
          "Connected frontend and backend with REST API",
          "Emphasized clear structure and good development practices",
          "Used Git for version control"
        ]
      }
    ],
    languages: [
      { id: "is", name: "Icelandic", level: 5, max: 5 },
      { id: "en", name: "English", level: 5, max: 5 },
      { id: "es", name: "Spanish", level: 3.5, max: 5 }
    ],
    interests: [
      "Fitness",
      "Cooking",
      "Family time"
    ],
    references: [
      {
        id: "thor-haraldsson",
        name: "Þór Haraldsson",
        role: "CEO",
        company: "Spektra",
        phone: "840-4640",
        email: "thor@spektra.is"
      },
      {
        id: "stefania-smaradottir",
        name: "Stefanía Smáradóttir",
        role: "Manager",
        company: "Íbúðarkjarninn Jöklaseli",
        phone: "693-9281",
        email: "stefania.smaradottir@reykjavik.is"
      }
    ]
  },
  skills: {
    title: "Skills",
    subtitle: "Technical expertise and professional strengths",
    sections: {
      core: "Programming Languages",
      tools: "Tools and Environments",
      concepts: "Development Concepts",
      professional: "Professional Strengths"
    },
    items: {
      cpp: "C++",
      csharp: "C#",
      dotnet: ".NET",
      python: "Python",
      javascript: "JavaScript",
      sql: "SQL",
      html: "HTML",
      css: "CSS",
      react: "React",
      django: "Django",
      node: "Node.js",
      flutter: "Flutter",
      sharepoint: "SharePoint",
      powershell: "PowerShell",
      git: "Git",
      linux: "Linux",
      bash: "Bash",
      azure: "Azure",
      jira: "Jira",
      backend: "Backend Development",
      fullstack: "Full-Stack Development",
      api_development: "API Development",
      database_design: "Database Design",
      database_integration: "Database Integration",
      system_design: "System Design",
      state_management: "State Management",
      testing: "Testing",
      debugging: "Debugging",
      version_control: "Version Control",
      communication: "Communication",
      teamwork: "Teamwork",
      initiative: "Initiative",
      attention_to_detail: "Attention to Detail",
      adaptability: "Adaptability",
      fast_learner: "Fast Learning",
      problem_solving: "Problem Solving"
    }
  },
  projectsPage: {
    navAriaLabel: "Project navigation",
    labels: {
      skills: "Skills & Technologies",
      links: "Project Links",
      github: "GitHub Repository",
      live: "Live Site",
      tryItOut: "Try It Out",
      imageFallback: "Preview coming soon"
    },
    statuses: {
      completed: "Completed",
      active: "In progress"
    },
    items: {
      tasklist: {
        title: "TaskList",
        summary: "A full-stack task management application focused on practical workflows, clear task visibility, and a clean day-to-day user experience.",
        highlights: [
          "Built a full-stack task workflow with a React frontend and .NET backend.",
          "Focused on clarity and fast interactions for daily task management.",
          "Connected core features through a clean API-driven architecture."
        ],
        imageAlt: "TaskList project preview"
      },
      portfolio: {
        title: "Portfolio Website",
        summary: "A personal portfolio built to present experience, projects, and technical strengths through a calm, modern interface with bilingual support.",
        highlights: [
          "Designed a unified tab-based portfolio experience with shared layout patterns.",
          "Implemented bilingual content and dark/light theme support.",
          "Emphasized polished design and user experience."
        ],
        imageAlt: "Portfolio website project preview"
      }
    }
  }
  // Add more sections as needed
};
