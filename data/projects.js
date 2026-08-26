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
    figmaUrl:
      "https://www.figma.com/design/MMOSFW6HE6jHX6TfjnKClM/Algoa-Bus-Redesign?node-id=27-269&t=VNGi1IopnjAKWTdu-1",
    liveUrl: null,
    repoUrl: null,

    caseStudy: {
      years: "2025",
      heroImage: "/projects/trip-2.png",

      overview: {
        role: "Self-directed UX/UI redesign + frontend development",
        type: "Speculative case study",
        responsibilities: [
          "User Research",
          "Wireframing",
          "UI design",
          "Development",
        ],
        timeline: "5 months",
        tools: "Figma, Next.js",
        outcome:
          "Live journey-planner prototype focused on search, routes, times & fares",
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
        stats: {
          sampleSize: "N = 6",
          sampleLabel: "Commuters interviewed in Gqeberha",
          items: [
            {
              value: "100%",
              label: "relied on offline or word-of-mouth info to plan a trip",
            },
            {
              value: "66%",
              label: "avoided new routes for fear of getting stranded",
            },
            {
              value: "0%",
              label: "found working timetables on algoabus.co.za",
            },
          ],
        },
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
            body: "I conducted 1-on-1 interviews with 3 daily commuters in Gqeberha to learn how they plan journeys and why many avoid using Algoa Bus for unfamiliar destinations.",
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
            personas: [
              {
                name: "Thando",
                image: "/projects/Thando.png",
                designOutcome:
                  "Thando's biggest frustration was not knowing when her bus would arrive, calling it ‘gambling with my time.’ To close that gap, the redesign surfaces route, time, and fare together on one results screen — giving her a clear answer before she leaves home instead of relying on guesswork.",
              },
              {
                name: "Zola",
                image: "/projects/Zola.png",
                designOutcome:
                  "Zola needs flexible, reliable transport across several destinations — home, campus, and fieldwork sites — not just one familiar trip. The search-based journey planner and stop-by-stop timeline let him confidently plan any route on demand, rather than defaulting to the one route he already knows.",
              },
            ],
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

        explorations:
          "Before settling on the final homepage, I explored four different directions with fellow UI/UX designers to see which one actually got a commuter to their route fastest. Some leaned into brand storytelling and the bus-hire service, others led with the smart card and payment flow, and one buried route planning a click behind a 'Plan your route' card. The direction that won puts a working From/To search bar directly in the hero — no extra navigation required — because it was the only version that matched what research showed commuters actually needed first: a way to search their trip immediately, not browse the brand.",
        explorationsImages: [
          "/projects/explore-1.png",
          "/projects/explore-2.png",
          "/projects/explore-3.png",
          "/projects/explore-4.png",
        ],

        annotatedScreens: [
          {
            title: "Search-first, not browse-first",
            text: "Research showed commuters had no way to search a specific trip — they relied on word-of-mouth or a call to the depot instead. The final home screen leads with a working From/To search bar rather than a list of routes to browse, because search matches how a commuter actually thinks about a trip: 'I need to get from A to B,' not 'which route number is that.'",
            image: "/projects/decision1.png",
          },
          {
            title: "A stop-by-stop timeline, not a static list",
            text: "Once a route is selected, results show a dotted timeline connecting each stop to its scheduled time, instead of a plain list. This lets a rider — especially a first-time one — see at a glance how far into the trip they are and what's still ahead, giving them the same mental map of the route that a daily commuter already has for the one route they trust.",
            image: "/projects/decision2.png",
          },
          {
            title: "Browsing stays a fallback, not the front door",
            text: "Browsing by suburb is still available for commuters who don't yet know exactly where they're going, but it sits beneath the search results rather than replacing them. Making search the default and browsing the fallback — instead of the other way around, like the original site — means commuters no longer have to already know the system to use it.",
            image: "/projects/decision3.png",
          },
        ],

        edgeCases: [
          {
            icon: "📶",
            boldLabel: "Low Data & Poor Signal.",
            text: "Optimized lightweight mobile layouts with offline caching for stop timetables on low-tier data plans.",
          },
          {
            icon: "🔔",
            boldLabel: "Route Disruptions & Delays.",
            text: "Clear status alerts embedded directly into trip result cards for delays or altered holiday schedules.",
          },
          {
            icon: "♿",
            boldLabel: "Accessible Inputs.",
            text: "High-contrast touch targets for search fields and accessible table layouts for screen readers navigating stop sequences.",
          },
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
    title:
      "Making \"What's for dinner?\" the easiest question of the day.",
    category: "design",
    tagline:
      "Placeholder tagline — replace with a one-line description of ChefGPT.",
    description: "Placeholder 1-2 sentence card summary.",
    image: "/projects/chef.png",
    tags: ["UX Research", "Branding", "Figma"],
    tool: "Figma",
    year: "2025",
    figmaUrl: "https://figma.com/file/PLACEHOLDER",
    liveUrl: null,
    repoUrl: null,

    // Scaffold only — same shape as the Algoa Bus case study.
    // Every field here is placeholder copy; swap in the real content section by section.
    caseStudy: {
      years: "2025",
      heroImage: "/projects/chef.png",

      overview: {
        role: "Placeholder — e.g. UX/UI Designer",
        type: "Speculative case study",
        responsibilities: ["UX Research", "Branding", "Prototyping"],
        timeline: "Placeholder — e.g. 4 weeks",
        body: "Placeholder overview. Replace with a short paragraph on what ChefGPT is, who it's for, and the core problem the redesign solves.",
      },

      challenge: {
        eyebrow: "The Problem",
        headline: "Placeholder headline — the core problem in one line.",
        pinpointingIssues: [
          {
            icon: "🍳",
            boldLabel: "Placeholder issue one.",
            text: "Replace with a real pain point uncovered in research.",
          },
          {
            icon: "📱",
            boldLabel: "Placeholder issue two.",
            text: "Replace with a real pain point uncovered in research.",
          },
        ],
      },

      solution: {
        eyebrow: "The Solution",
        headline: "Placeholder headline — the core solution in one line.",
        highlights: [
          {
            title: "Placeholder feature one.",
            text: "Replace with a real solution highlight.",
          },
          {
            title: "Placeholder feature two.",
            text: "Replace with a real solution highlight.",
          },
        ],
      },

      research: {
        intro:
          "Placeholder — describe the research methods used (interviews, competitor analysis, etc.).",
        methods: [],
      },

      designProcess: {
        tools: "Figma",
        designReview:
          "Placeholder — how designs were reviewed and iterated on.",
      },

      finalDesigns: {},

      developerHandoff: {
        body: "Placeholder — add if this project shipped to code.",
      },

      reflections: {
        keyTakeaways: [],
        nextSteps: [],
      },
    },
  },
];

export default projects;
