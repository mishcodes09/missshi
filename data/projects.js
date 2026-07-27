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
    title: "Algoa Bus — UX Redesign",
    category: "design",
    tagline: "Placeholder tagline — improving wayfinding for commuters",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/design-placeholder-1.png",
    tags: ["UX Research", "Wireframing", "Figma"],
    figmaUrl: null,
    liveUrl: null,
    repoUrl: null,

    // Working example of the full case-study data shape.
    // Every field here is placeholder copy — swap in the real content.
    caseStudy: {
      years: "2024 - Current",
      heroImage: "/projects/design-placeholder-1.png",

      overview: {
        role: "Product & UX Designer",
        focus: "Wayfinding & journey planning for commuters",
        responsibilities: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
        platform: "Web",
        timeline: "Placeholder: add real project timeline",
        status: "In Progress",
        deliverables: ["User Flows", "Wireframes", "High-Fidelity Prototype", "Figma File"],
        body: "Placeholder: a 2-3 sentence overview of the Algoa Bus redesign case study — what it is, why it exists, and who it's for.",
      },

      highlights: [
        "/projects/design-placeholder-hifi.png",
        "/projects/design-placeholder-wireframes.png",
      ],

      challenge: {
        problemFraming: "Placeholder: what was broken or missing before the redesign.",
        pinpointingIssues: [
          { icon: "🧭", boldLabel: "Confusing routes.", text: "Placeholder: commuters struggled to find the right bus route." },
          { icon: "⏱️", boldLabel: "No live updates.", text: "Placeholder: no way to check real-time schedules or delays." },
          { icon: "📱", boldLabel: "Poor mobile experience.", text: "Placeholder: the old site wasn't usable on a phone." },
        ],
      },

      solution: {
        goalsBody: "Placeholder: the high-level goals driving the redesign.",
        highLevelGoals: [
          { icon: "🎯", text: "Placeholder: simplify route discovery." },
          { icon: "📶", text: "Placeholder: surface live schedule data." },
          { icon: "📲", text: "Placeholder: design mobile-first." },
        ],
      },

      research: {
        marketInsights: "Placeholder: summary of market and competitive research.",
        usabilityInterviews: [
          { icon: "🗣️", text: "Placeholder: insight from commuter interview #1." },
          { icon: "🗣️", text: "Placeholder: insight from commuter interview #2." },
        ],
      },

      designProcess: {
        tools: "Figma, FigJam",
        designReview: "Placeholder: how design reviews were run and with whom.",
        ideation: [
          { icon: "✏️", text: "Placeholder: sketching initial route-finder concepts." },
          { icon: "🗂️", text: "Placeholder: sorting and prioritizing ideas with the team." },
        ],
        wireframing: "Placeholder: description of the wireframing phase.",
        explorations: "Placeholder: description of visual design explorations.",
      },

      keyFeatures: [
        {
          heading: "Route Finder",
          image: "/projects/design-placeholder-wireframes.png",
          bullets: ["Placeholder: search by stop or destination", "Placeholder: saves recent routes"],
        },
        {
          heading: "Live Schedules",
          image: "/projects/design-placeholder-hifi.png",
          bullets: ["Placeholder: real-time arrival estimates", "Placeholder: service alerts"],
        },
      ],

      visualDesign: {
        designSystemImage: "/projects/design-placeholder-hifi.png",
        typography: "Placeholder: typography choices and rationale.",
        colorPalette: "Placeholder: color palette and rationale.",
        components: "Placeholder: reusable component patterns.",
        branding: "Placeholder: branding considerations.",
      },

      finalDesigns: {
        prototypeUrl: null,
        images: [
          "/projects/design-placeholder-hifi.png",
          "/projects/design-placeholder-wireframes.png",
        ],
      },

      developerHandoff: {
        body: "Placeholder: notes on developer handoff — specs, redlines, and assets delivered.",
      },

      reflections: {
        keyTakeaways: [
          { icon: "💡", boldLabel: "Research pays off.", text: "Placeholder: what talking to commuters revealed." },
          { icon: "🔄", boldLabel: "Iterate fast.", text: "Placeholder: how quick iteration helped refine the flow." },
        ],
        nextSteps: ["Placeholder: usability test the live prototype", "Placeholder: explore accessibility improvements"],
      },
    },
  },
  {
    slug: "tziki-souvlaki-uiux-case-study",
    title: "Tziki Souvlaki — Brand & Ordering Experience",
    category: "design",
    tagline: "Placeholder tagline — a fresh ordering flow for a local souvlaki spot",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/design-placeholder-2.png",
    tags: ["UX Research", "Branding", "Figma"],
    problem: "Placeholder: what was broken/missing before the redesign.",
    process: [
      { label: "Research", image: "/projects/design-placeholder-research-2.png" },
      { label: "Wireframes", image: "/projects/design-placeholder-wireframes-2.png" },
      { label: "High-fidelity", image: "/projects/design-placeholder-hifi-2.png" },
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
    tagline: "Placeholder tagline — helping users build consistent daily habits",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/design-placeholder-3.png",
    tags: ["UX Research", "UI Design", "Figma"],
    problem: "Placeholder: what was broken/missing before the redesign.",
    process: [
      { label: "Research", image: "/projects/design-placeholder-research-3.png" },
      { label: "Wireframes", image: "/projects/design-placeholder-wireframes-3.png" },
      { label: "High-fidelity", image: "/projects/design-placeholder-hifi-3.png" },
    ],
    outcome: "Placeholder: result / what you learned.",
    figmaUrl: null,
    liveUrl: null,
    repoUrl: null,
  },
];

export default projects;
