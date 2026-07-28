// data/projects.js
const projects = [
  {
    slug: "ibm-revenuex",
    title: "IBM-RevenueX",
    category: "development",
    tagline: "AI-powered sales & revenue automation",
    description:
      "AI-powered sales and revenue automation agent with predictive analytics.",
    image: "/projects/4.png",
    tags: ["React", "Firebase", "AI"],
    liveUrl: "https://ibm-revenuex-frontend.onrender.com/",
    repoUrl: "https://github.com/mishcodes09/IBM-RevenueX",
    content:
      "AI-powered sales and revenue automation agent with predictive analytics.",
  },
  {
    slug: "madolo-innovative-construction",
    title: "Madolo Innovative Construction",
    category: "development",
    tagline: "Full-stack marketing site for a construction business",
    description:
      "Full-stack marketing site for Madolo Construction — Next.js 15, and WhatsApp.",
    image: "/projects/1.png",
    tags: ["Next.js", "React", "TailwindCSS", "WhatsApp"],
    liveUrl: "https://www.madolo.org.za/",
    repoUrl: "https://github.com/mishcodes09/madolo-construction.git",
    content:
      "Full-stack marketing site for Madolo Construction — Next.js 15, and WhatsApp.",
  },
  {
    slug: "mzongwana",
    title: "Mzongwana",
    category: "development",
    tagline: "Non-profit site built with Framer",
    description:
      "Non-profit organization website built with Framer, showcasing their mission and initiatives.",
    image: "/projects/2.png",
    tags: ["Framer"],
    liveUrl: "https://mzongwana.org/",
    repoUrl: null,
    content:
      "Non-profit organization website built with Framer, showcasing their mission and initiatives.",
  },
  {
    slug: "algoa-bus-redesign",
    title: "Algoa Bus Redesign",
    category: "development",
    tagline: "Redesign & development of a transit company site",
    description:
      "Redesign & development of the Algoa Bus website, enhancing user experience and functionality.",
    image: "/projects/3.png",
    tags: ["Vue", "TailwindCSS"],
    liveUrl: "https://sidepr.netlify.app/",
    repoUrl: "https://github.com/mishcodes09/algoabus.git",
    content:
      "Redesign & development of the Algoa Bus website, enhancing user experience and functionality.",
  },
  {
    slug: "algoa-bus-uiux-case-study",
    title: "Algoa Bus Redesign",
    category: "design",
    tagline:
      "Redesigning the digital experience of Port Elizabeth's public bus system by replacing uncertainty with clarity.",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/algoaa.png",
    tags: ["UX Research", "Wireframing", "Figma"],
    figmaUrl: null,
    liveUrl: null,
    repoUrl: null,

    // Working example of the full case-study data shape.
    // Every field here is placeholder copy — swap in the real content.
    caseStudy: {
      years: "2025",
      heroImage: "/projects/algoaa.png",

      overview: {
        role: "Product & UX Designer",
        focus: "Wayfinding & journey planning for commuters",
        responsibilities: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
        ],
        platform: "Web",
        timeline: "5 months",
        status: "In Progress",
        deliverables: [
          "User Flows",
          "Wireframes",
          "High-Fidelity Prototype",
          "Figma File",
        ],
        body: "This case study explores the redesign of the Algoa Bus website, a public transport service that plays a vital role in helping people travel across Port Elizabeth (Gqeberha). The project was driven by a simple challenge: while the buses are widely used, finding reliable information about routes, schedules, and fares online is unnecessarily difficult. Through user research and a mobile-first UX approach, the redesign creates a clearer, more intuitive journey-planning experience for commuters, making public transport easier to understand and more accessible for both existing and first-time users.",
      },

      highlights: [
        "/projects/design-placeholder-hifi.png",
        "/projects/design-placeholder-wireframes.png",
      ],

      challenge: {
        problemFraming:
          "Algoa Bus is an essential public transport service in Port Elizabeth (Gqeberha), yet its digital experience does not provide commuters with the information they need to travel confidently. Users struggle to find routes, timetables, fares, and stop information, often relying on word-of-mouth, phone calls, or prior knowledge instead of the official website. The challenge was to redesign the platform into a user-centred experience that removes uncertainty from the journey-planning process. By making route discovery, scheduling, and fare information easy to access, the goal was to help both existing and first-time commuters make informed travel decisions while improving trust in the service.",
        pinpointingIssues: [
          {
            icon: "🧭",
            boldLabel: "Confusing routes.",
            text: "Commuters struggled to find the right bus route.",
          },
          {
            icon: "⏱️",
            boldLabel: "No live updates.",
            text: "No way to check real-time schedules or delays.",
          },
          {
            icon: "📱",
            boldLabel: "Poor mobile experience.",
            text: "The old site wasn't usable on a phone.",
          },
        ],
      },

      solution: {
        goalsBody:
          "I redesigned the Algoa Bus website into a mobile-first, user-centred platform that enables commuters to easily search routes, view schedules, compare fares, and plan trips from start to finish. By prioritizing clarity, intuitive navigation, and accessible travel information, the redesign reduces uncertainty and makes public transport a more convenient and reliable choice.",
        highLevelGoals: [
          {
            icon: "🎯",
            boldLabel: "Simplify route discovery.",
            text: "Placeholder: simplify route discovery.",
          },
          {
            icon: "📶",
            boldLabel: "Surface live schedule data.",
            text: "Placeholder: surface live schedule data.",
          },
          {
            icon: "📲",
            boldLabel: "Design mobile-first.",
            text: "Placeholder: design mobile-first.",
          },
        ],
      },

      research: {
        intro:
          "I combined competitor analysis, commuter interviews, Google Reviews, and personal experience to uncover the biggest barriers preventing people from confidently using Algoa Bus.",
        methods: [
          {
            heading: "Market Insights & Competitor Analysis",
            body: "I analyzed transport services like Uber, Bolt, Google Maps, and MyCiTi to understand how clear information and simple navigation improve the travel experience.",
            images: ["/projects/competitor.png"],
          },
          {
            heading: "Usability Interviews",
            body: "I spoke with local commuters to learn how they plan journeys and why many avoid using Algoa Bus for unfamiliar destinations.",
            conversation: [
              {
                speaker: "researcher",
                text: "How do you usually find the right bus route?",
              },
              {
                speaker: "commuter",
                text: "Mostly by asking someone or calling the office. The website is difficult to understand on my phone.",
              },
              {
                speaker: "researcher",
                text: "What information would make planning a trip easier?",
              },
              {
                speaker: "commuter",
                text: "A clear route search, the timetable, and the fare in one place.",
              },
            ],
            findings: [
              {
                text: "Finding the right bus depended more on local knowledge than the official website.",
              },
              {
                text: "A simple start-to-destination search emerged as the most valuable feature for reducing travel uncertainty.",
              },
            ],
          },
          {
            heading: "User Personas",
            body: "Based on real user research, this persona highlights the motivations and pain points that shaped the redesign of the Algoa Bus experience.",
            images: ["/projects/thando.png", "/projects/zola.png"],
          },
        ],
      },

      designProcess: {
        tools: "Figma, Pinterest, Procreate ",
        designReview:
          "I sought feedback from fellow designers to evaluate usability, visual hierarchy, and overall user experience throughout the design process.",
        wireframing:
          "I focused on designing a journey planner that lets users search their starting point and destination instead of manually browsing routes.",
        wireframingImages: [
          "/projects/wireframes.png",
          "/projects/hero-wireframes.png",
          "/projects/table-yadika.png",
        ],
        explorations:
          "I explored visual concepts that made journey planning fast and intuitive, with the search experience becoming the focal point of the interface.",
        explorationsImages: [
          "/projects/explore (1).png",
          "/projects/explore (2).png",
          "/projects/explore (3).png",
          "/projects/explore (4).png",
        ],
      },

      keyFeatures: [
        {
          heading: "Route Finder",
          image: "/projects/findd.png",
          bullets: ["Search by stop or destination", "Saves recent routes"],
        },
        {
          heading: "Live Schedules",
          image: "/projects/live.png",
          bullets: ["Real-time arrival estimates", "Service alerts"],
        },
      ],

      finalDesigns: {
        prototypeUrl: "https://sidepr.netlify.app/",
      },

      developerHandoff: {
        body: "The final designs were translated directly into a responsive frontend, ensuring the implemented experience remained faithful to the original UX decisions. Owning both the design and development process allowed for faster iteration, consistent interactions, and a seamless transition from prototype to production.",
      },

      reflections: {
        keyTakeaways: [
          {
            icon: "💡",
            boldLabel: "Design around user goals not features.",
            text: "A simple journey planner solved a bigger problem than adding more functionality.",
          },
          {
            icon: "🔄",
            boldLabel: "Information architecture matters.",
            text: "Making routes, schedules, and fares easy to find significantly improves the overall user experience.",
          },
          {
            icon: "🔄",
            boldLabel: "Design and development work best together.",
            text: "Owning both disciplines ensured the final product closely matched the original design vision.",
          },
        ],
        nextSteps: [
          "Introduce live bus tracking",
          "Expand the journey planner",
          "Smart notifications",
        ],
      },
    },
  },
  {
    slug: "chef-gpt-uiux-case-study",
    title: "ChefGPT - Recipe Application",
    category: "design",
    tagline:
      "Placeholder tagline — a fresh ordering flow for a local souvlaki spot",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/chef.png",
    tags: ["UX Research", "Branding", "Figma"],
    problem: "Placeholder: what was broken/missing before the redesign.",
    process: [
      {
        label: "Research",
        image: "/public/projects/chef-research.png",
      },
      {
        label: "Wireframes",
        image: "/projects/design-placeholder-wireframes-2.png",
      },
      {
        label: "High-fidelity",
        image: "/projects/design-placeholder-hifi-2.png",
      },
    ],
    outcome: "Placeholder: result / what you learned.",
    figmaUrl: null,
    liveUrl: null,
    repoUrl: null,
  },
  {
    slug: "habit-tracker-app-uiux-case-study",
    title: "Habit Tracker App — Product Design",
    category: "design",
    tagline:
      "Placeholder tagline — helping users build consistent daily habits",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/design-placeholder-3.png",
    tags: ["UX Research", "UI Design", "Figma"],
    problem: "Placeholder: what was broken/missing before the redesign.",
    process: [
      {
        label: "Research",
        image: "/projects/design-placeholder-research-3.png",
      },
      {
        label: "Wireframes",
        image: "/projects/design-placeholder-wireframes-3.png",
      },
      {
        label: "High-fidelity",
        image: "/projects/design-placeholder-hifi-3.png",
      },
    ],
    outcome: "Placeholder: result / what you learned.",
    figmaUrl: null,
    liveUrl: null,
    repoUrl: null,
  },
];

export default projects;
