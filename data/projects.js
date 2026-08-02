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
    tool: "React",
    year: "2025",
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
    tool: "Next.js",
    year: "2025",
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
    tool: "Framer",
    year: "2025",
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
    tool: "Vue",
    year: "2025",
    liveUrl: "https://sidepr.netlify.app/",
    repoUrl: "https://github.com/mishcodes09/algoabus.git",
    content:
      "Redesign & development of the Algoa Bus website, enhancing user experience and functionality.",
  },
  {
    slug: "algoa-bus-uiux-case-study",
    title:
      "From 'ask a local' to 'search and go' — redesigning Algoa Bus's digital experience.",
    category: "design",
    tagline:
      "Redesigning the digital experience of Port Elizabeth's public bus system by replacing uncertainty with clarity.",
    description:
      "Self-directed UX/UI redesign of Algoa Bus's website — research, wireframes, and a mobile-first prototype that replaces guesswork with a simple route search.",
    image: "/projects/trip-2.png",
    tags: ["UX Research", "Wireframing", "Figma"],
    tool: "Figma",
    year: "2025",
    figmaUrl: null,
    liveUrl: null,
    repoUrl: null,

    // Working example of the full case-study data shape.
    // Every field here is placeholder copy — swap in the real content.
    caseStudy: {
      years: "2025",
      heroImage: "/projects/trip-2.png",

      overview: {
        role: "Self-directed UX/UI redesign",
        type: "Speculative case study",
        responsibilities: [
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
        ],
        timeline: "5 months",
        body: "This case study explores the redesign of the Algoa Bus website, a public transport service that plays a vital role in helping people travel across Port Elizabeth (Gqeberha). The project was driven by a simple challenge: while the buses are widely used, finding reliable information about routes, schedules, and fares online is unnecessarily difficult. Through user research and a mobile-first UX approach, the redesign creates a clearer, more intuitive journey-planning experience for commuters, making public transport easier to understand and more accessible for both existing and first-time users.",
      },

      challenge: {
        eyebrow: "The Problem",
        headline: "A site that promotes a service it no longer has.",
        heroImage: "/projects/challenge.png",
        heroTag: "No live schedule data",
        heroCaption:
          'The live site still lists a "timetable mobile app" as a core offer — it was discontinued.',
        evidence: [
          {
            image: "/projects/videosnap.gif",
            caption:
              "Trying to find times, fares, or routes on the current site. The experience is confusing and frustrating.",
          },
          {
            image: "/projects/reviews.png",
            caption: "Real commuter feedback — names redacted.",
          },
        ],
        pinpointingIssues: [
          {
            icon: "🧭",
            boldLabel: "Outdated information.",
            text: "The site lists a discontinued mobile app and old timetables, which misleads users.",
          },
          {
            icon: "⏱️",
            boldLabel: "No schedules, fares, routes data.",
            text: "The site doesn't clearly communicate when buses run, how much they cost, or where they go.",
          },
          {
            icon: "📱",
            boldLabel: "Poor mobile experience.",
            text: "The website isn't optimized for commuters accessing information on their phones.",
          },
        ],
      },

      solution: {
        eyebrow: "The Solution",
        headline:
          "A trip planner that actually answers where, when, and how much.",
        highlights: [
          {
            title: "Search replaces browsing.",
            text: "A simple search bar lets users enter their starting point and destination instead of manually browsing routes.",
            image: "/projects/trip.png",
          },
          {
            title: "One screen, every answer.",
            text: "Times, fares, and routes surface together on the results screen.",
            image: "/projects/oone.png",
          },
          {
            title: "The full route, step by step.",
            text: "A stop-by-stop timeline shows exactly where the bus goes.",
            image: "/projects/central.png",
          },
          {
            title: "Browse by suburb or stop.",
            text: "Users can also explore routes by suburb or bus stop if they prefer to browse instead of search.",
            image: "/projects/both.png",
          },
        ],
      },

      research: {
        intro:
          "I combined competitor analysis, commuter interviews, and personal experience to uncover the biggest barriers preventing people from confidently using Algoa Bus.",
        methods: [
          {
            heading: "Market Insights & Competitor Analysis",
            body: "I analyzed transport services like Uber, Bolt, Google Maps, and MyCiTi to understand how clear information and simple navigation improve the travel experience.",
            images: ["/projects/competitor.png"],
          },
          {
            heading: "Personal Experience",
            body: "I've used Algoa Bus myself for years — it got me to school reliably and cheaply, and I trusted it for that one route. But I never knew what else it could do for me. I didn't know the other routes, the stops, the fares, or the times for anywhere beyond my daily trip. When friends found out I used the bus, they'd ask me about routes to other parts of town, and I never had an answer.\n\nI was curious about exploring other routes, but never confident enough to actually try — calling the depot to ask felt like more effort than it was worth, and getting it wrong meant being stranded somewhere unfamiliar. So for anything outside my one known route, I defaulted to a taxi or an Uber instead, even though the bus would've been cheaper.\n\nThat gap — trusting the bus for one specific trip but avoiding it for everything else — is really what started this project.",
            images: ["/projects/IMG_1713.jpeg", "/projects/IMG_0215.jpeg"],
          },
          {
            heading: "Usability Interviews",
            body: "I spoke with local commuters to learn how they plan journeys and why many avoid using Algoa Bus for unfamiliar destinations.",
            interviews: [
              {
                conversation: [
                  {
                    speaker: "researcher",
                    text: "How do you usually find the right bus route?",
                  },
                  {
                    speaker: "commuter",
                    text: "Mostly by asking someone, or calling the depot. The website doesn't actually tell you times or fares, so there's no point checking it.",
                  },
                  {
                    speaker: "researcher",
                    text: "What would make planning a trip easier?",
                  },
                  {
                    speaker: "commuter",
                    text: "Just seeing the route, time, and fare all in one place — that's not there at all right now.",
                  },
                ],
              },
              {
                conversation: [
                  {
                    speaker: "researcher",
                    text: "Have you ever tried a route you didn't already know?",
                  },
                  {
                    speaker: "commuter",
                    text: "Not really — too risky. If I get it wrong I could be stuck waiting a long time.",
                  },
                  {
                    speaker: "researcher",
                    text: "What stopped you from using the website to check first?",
                  },
                  {
                    speaker: "commuter",
                    text: "I looked, but there was nothing useful on it — no times, no way to search a route.",
                  },
                ],
              },
              {
                conversation: [
                  {
                    speaker: "researcher",
                    text: "How do you usually find out if a bus is running late?",
                  },
                  {
                    speaker: "commuter",
                    text: "You don't. The site doesn't have any of that, you just wait and hope.",
                  },
                  {
                    speaker: "researcher",
                    text: "If the site actually had real route and time info, would that change how you use it?",
                  },
                  {
                    speaker: "commuter",
                    text: "Definitely — right now there's no reason to check it at all.",
                  },
                ],
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
        tools: "Figma",
        designReview:
          "I sought feedback from fellow designers to evaluate usability, visual hierarchy, and overall user experience throughout the design process.",
        wireframing:
          "I focused on designing a journey planner that lets users search their starting point and destination instead of manually browsing routes.",
        wireframingImages: [
          "/projects/wireframes.png",
          "/projects/hero-wireframes.png",
          "/projects/table-yadika.png",
        ],
      },

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
    tool: "Figma",
    year: "2025",
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
];

export default projects;
