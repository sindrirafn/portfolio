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
        // title: "Software Specialist / Developer",
        title: "Biomedical Engineering · Computer Science",
        intro: "I like understanding how things work, solving problems, and building practical solutions.",
        imageSrc: "",
        imageAlt: "Portrait of Sindri Rafn Guðmundsson",
        badges: ["React", ".NET", "SQL", "Power BI"]
    },
    About: {
        heading: "About me",
        // introParagraphs: [
        //     "I am a software specialist with a background in computer science and biomedical engineering.",
        //     "I have worked on setup, maintenance, and development of solutions, and I care about building simple, well-designed software that is genuinely useful in real projects.",
        //     "I focus on clear structure, good user experience, and solutions that are practical in day-to-day work."
        // ],
        introParagraphs: [
            "I have B.Sc. degrees in Biomedical Engineering and Computer Science. What I enjoy most is solving problems, building something new and understanding how things work. That curiosity is a large part of why I ended up studying both engineering and computer science in the first place.",
            "I'm open to opportunities across engineering and technology where that combination of backgrounds can be useful. I'm particularly drawn to work where I can dig into a problem, understand it properly and turn that understanding into something useful."
        ],

        intro: "I am a software specialist with a background in computer science and biomedical engineering.",
        focusLabel: "Focus",
        focus: "Building practical software and systems work across modern development and Microsoft-based environments.",
        currentlyLabel: "Currently",
        currently: "I am currently building this portfolio, developing projects, and looking for opportunities in software development or engineering.",
        linksLabel: "Links",
        contactLabel: "Contact",
        contactText: "Feel free to reach out if you want to talk about work opportunities or projects.",
        // githubLabel: "GitHub",
        // githubValue: "github.com/sindrirafn",
        // githubUrl: "https://github.com/sindrirafn",
        linkedInUrl: "https://www.linkedin.com/in/sindri-rafn",
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
                "I have B.Sc. degrees in Biomedical Engineering and Computer Science and have spent the last few years working on software solutions and technical user support. I enjoy solving problems, building something new and understanding how things work. I am comfortable diving into new subject areas and learning what is needed to turn ideas into working solutions.",
            ]
        },
        experience: [
            {
                id: "joklasel",
                title: "Support Worker",
                company: "City of Reykjavík - Jöklasel/Brekknaás",
                location: "Reykjavík",
                start: "2016-04",
                end: "2023-06",
                startLabel: "April 2016",
                endLabel: "June 2023",
                start2: "2026-05",
                end2: null,
                startLabel2: "May 2026",
                endLabel2: "Current",
                bullets: [
                    "Supported autistic adults and individuals with extensive support needs in daily life, including personal care, household tasks, meals and leisure activities.",
                    "Worked according to individualized support plans and procedures, with a strong focus on consistency, routine and reliable day-to-day support.",
                    "Handled demanding situations calmly and patiently, with attention to preventing and reducing stress while ensuring safety and wellbeing for residents and staff."
                ]
            },
            {
                id: "spektra",
                title: "Software Specialist",
                company: "Spektra",
                location: "Reykjavík",
                start: "2023-07",
                end: "2025-09",
                startLabel: "July 2023",
                endLabel: "September 2025",
                bullets: [
                    "Set up, maintained and adapted solutions in SharePoint and WorkPoint, including websites, lists, document libraries, metadata and permissions.",
                    "Analyzed and resolved technical problems for clients.",
                    "Worked on large-scale data migrations between systems and environments using PowerShell and ShareGate, alongside validation of results.",
                    "Designed and built automated processes in Power Automate, including both simple and more complex flows that replaced manual work.",
                    "Used PowerShell for installations, data imports and creation of lists and document libraries."
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
                endLabel: "2015",
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
        projectsCallToAction: {
            text: "View project portfolio"
        },
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
            problem_solving: "Problem Solving",
            engineering_mindset: "Engineering Mindset",
            collaboration: "Collaboration",
            critical_thinking: "Critical Thinking",
            creativity: "Creativity",
            data_analysis: "Data Analysis",
            data_visualization: "Data Visualization",
            statistical_analysis: "Statistical Analysis",
            simulation: "Simulation",
            data_processing: "Data Processing",
            matlab: "MATLAB",
            r: "R",
            frontend_development: "Frontend Development",
            systems_work: "Systems Work",
            automation: "Automation",
            workpoint: "WorkPoint",
            power_automate: "Power Automate",
            sharegate: "ShareGate",
            data_migration: "Data Migration",
            troubleshooting: "Troubleshooting",
            system_configuration: "System Configuration",
            technical_support: "Technical Support",
            data_classification: "Data Classification",
            typescript: "TypeScript",
            data_engineering: "Data Engineering",
            web_data_collection: "Web Data Collection",
            data_enrichment: "Data Enrichment",
            postgresql: "PostgreSQL",
            workflow_design: "Workflow Design",
            data_automation: "Data Automation",
            ai_enrichment: "AI Enrichment",
            data_modeling: "Data Modeling",
            computer_vision: "Computer Vision",
            web_development: "Web Development"
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
            imageFallback: "Preview coming soon",
            viewOnGithub: "View on GitHub",
            viewLive: "View Live"
        },
        statuses: {
            completed: "Completed",
            active: "In progress"
        },
        items: {
            // tasklist: {
            //     title: "TaskList",
            //     summary: "A full-stack task management application focused on practical workflows, clear task visibility, and a clean day-to-day user experience.",
            //     highlights: [
            //         "Built a full-stack task workflow with a React frontend and .NET backend.",
            //         "Focused on clarity and fast interactions for daily task management.",
            //         "Connected core features through a clean API-driven architecture."
            //     ],
            //     imageAlt: "TaskList project preview"
            // },
            // portfolio: {
            //     title: "Portfolio Website",
            //     summary: "A personal portfolio built to present experience, projects, and technical strengths through a calm, modern interface with bilingual support.",
            //     highlights: [
            //         "Designed a unified tab-based portfolio experience with shared layout patterns.",
            //         "Implemented bilingual content and dark/light theme support.",
            //         "Emphasized polished design and user experience."
            //     ],
            //     imageAlt: "Portfolio website project preview"
            // },
            // case_system: {
            //     title: "Case Management System",
            //     summary: "A case management system designed to streamline workflows, improve task visibility, and provide a practical solution for day-to-day work.",
            //     highlights: [
            //         "Developing a full-stack case management system with a React frontend and .NET backend.",
            //         "Designed and implemented a REST API for managing cases, users, and comments.",
            //         "Built a data model and storage solution using SQL database.",
            //         "Implemented key features such as status management, filtering, and access control.",
            //         "Focused on clear structure, separation of concerns, and practical usage."
            //     ],
            //     imageAlt: "Case Management System project preview"
            // },
            vinnsyn: {
                title: "Vinnsýn",
                subheading: "31,235 listings · 405 skills · 82 professions · 4,355 employers",
                summary: "A data-driven project focused on processing, visualizing, and classifying data efficiently, with a React frontend and Python backend.",
                highlights: [
                    "Built an end-to-end data pipeline and interactive exploration of the Icelandic job market, combining current public listings with reconstructed historical data.",
                    "Collects current public listings and reconstructs historical coverage from web archives, with deduplication, change tracking and evidence-preserving storage.",
                    "Enriches largely unstructured job data through source categories, bilingual skill extraction, profession classification, advertiser normalization and geographic mapping.",
                    "Designed the public experience around five linked views of the same market data: job fields, professions, skills, geography and advertisers, with exploration across time."                ],
                imageAlt: "Vinnsyn project preview"
            },
            career_radar: {
                title: "Career Radar",
                summary: "A project aimed at providing insights into career trends and opportunities.",
                highlights: [
                    "Built a private, local-first job-search system that turns automated job discovery into a structured workflow for reviewing opportunities, prioritizing applications and tracking outcomes.",
                    "Designed a staged import and review pipeline with URL normalization, duplicate detection and historical reconciliation, allowing repeated imports to refresh listings without overwriting later decisions or application data.",
                    "Combined rule-based filtering with AI-assisted enrichment to assess relevance, surface skills and gaps, identify concerns and recommend next actions while keeping final decisions with the user.",
                    "Built application tracking, deadline and follow-up management, skill-coverage analysis and a focused Today view that turns job-market data into concrete next actions."
                ],
                imageAlt: "Career Radar project preview"
            },
            go_green: {
                title: "GoGreen",
                heading: "Real-time analysis of vehicle traffic and emissions",
                subheading: "Final project in Computer Science · Reykjavik University · 2021",
                summary: "A project focused on promoting sustainable practices and environmental awareness.",
                highlights: [
                    "End-to-end vehicle analysis system — Built a system that processed a live camera feed, identified Icelandic license plates using an existing YOLOv4 model, enriched detections with vehicle information, and stored the results in PostgreSQL for further analysis.",
                    "Database & synthetic data tooling — Built the initial database and Python generators for synthetic vehicle data, then redesigned the database around the project's ER model and adapted the tooling to the new schema.",
                    "Analytics & visualization — Developed traffic and emissions calculations and reporting functionality, then researched and implemented interactive Plotly visualizations for integration into the Django application.",
                    "Web application & integration — Built substantial parts of the final Django interface, including the analytics overview, vehicle views, authentication UI, navigation and overall styling. The finished dashboard surfaced daily statistics alongside the latest detected vehicle and its captured image."
                ],
                imageAlt: "Go Green project preview"
            }

        }
    }
    // Add more sections as needed
};
