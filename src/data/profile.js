// Profile Data - Centralized & Corrected (2025)

export const profileData = {
  // Personal Information
  personal: {
    name: "Pavitra Kumar Gupta",
    title: "Full Stack Developer",
    summary:
      "Full Stack Developer with 3+ years of experience building scalable web and mobile applications using React, React Native, Node.js, and MongoDB. Currently working on AI-powered automation systems including resume parsing, interview bots, and email workflows, with a strong focus on production-ready products.",
    email: "pavitragupta021@gmail.com"
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/pavitra-kumar-gupta/",
    github: "https://github.com/pavitrakumargupta",
    resume:
      "https://drive.google.com/file/d/1qhQgnoi-1WO1MrRt0t4ecf_glmihDSpp/view"
  },

  // About Section
  about: {
    services: [
      {
        icon: "code",
        title: "Frontend Development",
        description:
          "Building scalable and reusable web and mobile interfaces using React, Next.js, React Native, and modern styling systems."
      },
      {
        icon: "server",
        title: "Backend Development",
        description:
          "Developing secure backend APIs and application logic using Node.js, Express, NestJS, and REST/WebSocket architectures."
      },
      {
        icon: "bot",
        title: "Automation & AI Workflows",
        description:
          "Working on AI-assisted automation including resume parsing, interview bots, speech-to-text pipelines, and email workflows."
      },
      {
        icon: "cloud",
        title: "Cloud & Deployment",
        description:
          "Deploying applications using AWS, Vercel, Netlify, Firebase, and Render with a focus on reliability and scalability."
      }
    ],
    aboutText: [
      "I’m a Full Stack Developer focused on building real, production-ready applications rather than experimental or demo projects.",
      "My experience spans frontend, backend, cloud deployment, and AI-supported automation, allowing me to contribute across the full product lifecycle.",
      "I enjoy working on complex systems that combine business logic, automation, and user-facing applications."
    ]
  },

  // Experience
  experience: [
    {
      title: "Full Stack Developer",
      company: "Easyrewardz",
      location: "Gurgaon",
      period: "06/2025 - Present",
      description: [
        "Developing and maintaining scalable web applications using React.js with integrated state management and backend APIs.",
        "Leading a sub-team of 3 developers, contributing to frontend architecture and data-flow planning.",
        "Developing and integrating application modules and APIs for banking-related platforms.",
        "Collaborating with cross-functional teams to deliver production-ready features.",
        "Contributing to AI-driven workflows and automation support within application processes."
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "MongoDB",
        "PostgreSQL"
      ]
    },
    {
      title: "Junior Full Stack Developer",
      company: "Digital Jalebi",
      location: "Noida",
      period: "12/2023 - 05/2025",
      description: [
        "Developed and maintained web and mobile applications using React.js, Next.js, Node.js, and React Native.",
        "Built scalable and reusable UI components for client-facing applications.",
        "Worked on AI-driven projects including an AI photobooth using ComfyUI and Stable Diffusion.",
        "Supported AI-based automation workflows.",
        "Collaborated directly with clients, designers, and QA teams to deliver high-quality, user-focused interfaces."
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "ComfyUI",
        "Stable Diffusion"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Unispade",
      location: "Remote",
      period: "08/2022 - 12/2023",
      description: [
        "Revamped the entire application using React.js, Node.js, and MongoDB, improving usability and user experience.",
        "Built end-to-end features independently, handling frontend UI, backend logic, and APIs.",
        "Integrated frontend with backend services to deliver dynamic, real-time web applications."
      ],
      technologies: ["React", "Node.js", "MongoDB"]
    }
  ],

  // Projects
  projects: [
    {
      title: "Bank Reward & Loyalty Platforms (Kotak, RBL)",
      description:
        "Developed end-to-end features for enterprise reward platforms used by leading banks, including travel shop, recharge deals, vouchers, and notifications. Led frontend development, coordinated with backend teams and designers, and implemented a highly synchronized and scalable frontend architecture for seamless user experience.",
        technologies: [
          "React.js",
          "Redux",
          "RTk Query",
          "Frontend System Design"
        ],
        github: null,
      image: "https://drive.google.com/file/d/1XyluTuFT_4zUBslD3z_Y7dshTAXxLWLz/view?usp=sharing",
      live: "https://rewards.rbl.bank.in/",
      video:null,
      mobile:null,
      featured: true
    },
    {
      title: "Docflix – OTT Platform for Doctors",
      description:
        "Worked on Docflix, an OTT platform for doctors. Developed search functionality using MongoDB indexing and integrated Instagram-like Reels and Stories for categorized content viewing. Also implemented Podcasts with a mini-player and advanced playback controls.",
        technologies: [
          "React.js",
          "Node.js",
          "MongoDB",
          "React Native",
          "MongoDB Indexing",
          "Mux Player",
          "Firebase Notifications",
        ],
        github: null,
      image: "https://drive.google.com/file/d/1U2TjKuNE9xYTWrNnac1N7fRtn2BEWVO_/view?usp=sharing",
      live: "https://docflix.com/",
      video:"https://drive.google.com/file/d/1MV4CgCfZ8ka-Ijvipqs98lRdblq6WTaL/view",
      mobile:"https://play.google.com/store/apps/details?id=com.mankind.docflix&hl=en_IN",
      featured: true
    },
    {
      title: "Hero NDCI Project – AI-Based Application",
      description:
        "Implemented real-time body segmentation for video background removal, clothing changes, and face swaps. Used TensorFlow Lite models to enable fast and efficient on-device processing.",
      technologies: [
        "TensorFlow Lite - Body Segmentation",
        "ComfyUI",
        "AI Models - Stable Difussion",
        "Real-Time Processing"
      ],
      github: null,
      live: null,
      featured: true,
      image:"https://drive.google.com/file/d/1jTmVzt3Hm8h3ZclzPr-chp__F69mEfuz/view?usp=sharing",
      video:"https://drive.google.com/file/d/1hiVFJi7nF5vcJ-5C4N9k5HyvANdsKSIw/view?usp=drive_link"
    },
    {
      title: "IIJS – Jewellery Exhibition Platform",
      description:
        "Designed and developed a jewelry exhibition platform featuring attendee registration, nearby hotel information, floor planning, exhibitor directory access, and dynamic theme-based data presentation for different exhibitions.",
      technologies: [
        "React.js",
        "React Native",
        "Node.js",
        "MongoDB",
        "REST APIs"
      ],
      github: null,
      live: null,
      featured: true,
      mobile:"https://play.google.com/store/apps/details?id=com.gjepc.iijs&hl=en_IN",
      image:"https://drive.google.com/file/d/1hKX1u8Y9FQGUXAfBzzH-bYx1Wf-t4_2S/view?usp=sharing",
      video:"https://drive.google.com/file/d/1bMF0gURTxB0blTekIXhsT2uIOKu0xQMu/view?usp=drive_link"
    },
    {
      title: "On-Campus – Student Community Platform",
      description:
        "Developed On-Campus, a web platform that enables students to connect, collaborate, and stay informed. Features include messaging, note sharing, blogs, polls, news updates, and a community hub for social interaction.",
      technologies: [
        "React.js",
        "Capacitor by Ionic - Cross-platform apps with web technology",
        "WebSocket",
        "Firebase",

        "Node.js",
        "MongoDB",
        "REST APIs"
      ],
      github: "https://github.com/pavitrakumargupta/On-Campus",
      featured: "https://avatars.githubusercontent.com/u/88044814?s=48&v=4",
      image:"https://drive.google.com/file/d/15RAUm0NCsyhnB933ZhmwkBjZNiNrHeu5/view?usp=sharing",
      live:"https://on-campus.netlify.app/",

    },
    {
      title: "BateJob – AI Hiring Automation Platform (In Progress)",
      description:
        "Currently building BateJob, an AI-powered hiring automation platform focused on resume screening, candidate shortlisting, interview automation, and email workflows. The system is designed to reduce manual hiring effort using automation and AI-assisted decision support.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Whisper (Speech-to-Text)",
        "Coqui TTS (Text-to-Speech)",
        "Google Apps Script",
        "AI Automation Pipelines"
      ],
      github: null,
      live: null,
      image: null,
      video: null,
      mobile: null,
      featured: false,
      status: "in-progress"
    }
  ],
  
  skills: {
    categories: [
      {
        category: "Frontend",
        skills: [
          { name: "JavaScript", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "React.js", level: 95 },
          { name: "Next.js", level: 90 },
          { name: "React Native", level: 85 },
          { name: "Expo", level: 85 },
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Redux", level: 90 },
          { name: "React Context API", level: 90 }
        ]
      },
      {
        category: "Backend",
        skills: [
          { name: "Node.js", level: 95 },
          { name: "Express.js", level: 90 },
          { name: "NestJS", level: 85 },
          { name: "REST APIs", level: 95 },
          { name: "WebSockets", level: 85 }
        ]
      },
      {
        category: "Databases",
        skills: [
          { name: "MongoDB", level: 90 },
          { name: "PostgreSQL", level: 85 },
          { name: "Sequelize", level: 80 },
          { name: "Firebase", level: 80 }
        ]
      },
      {
        category: "Cloud & DevOps",
        skills: [
          { name: "Git", level: 95 },
          { name: "GitHub", level: 95 },
          { name: "AWS (S3, ECS)", level: 80 },
          { name: "Render", level: 85 },
          { name: "Vercel", level: 90 },
          { name: "Netlify", level: 90 }
        ]
      },
      {
        category: "AI & Automation",
        skills: [
          { name: "Whisper (Speech-to-Text)", level: 90 },
          { name: "Coqui TTS", level: 85 },
          { name: "Stable Diffusion", level: 75 },
          { name: "ComfyUI", level: 80 },
          { name: "TensorFlow", level: 70 },
          { name: "Google Apps Script", level: 90 }
        ]
      }
    ]
  }
};
