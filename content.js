// ─────────────────────────────────────────────────────────────────────────────
// DIVYA'S WEBSITE CONTENT
// Edit anything between the quotes. Don't change the variable names or structure.
// Save the file and refresh your browser to see changes.
// ─────────────────────────────────────────────────────────────────────────────

const CONTENT = {

  // ── NAVIGATION ──────────────────────────────────────────────────────────────
  nav: {
    name: "DG",
    links: ["Work", "How I Work", "Next", "Personal"],
    linkIds: ["work", "how-i-work", "next", "personal"],
    cta: "Let's talk",
    ctaEmail: "divya.galagali@gmail.com"
  },

  // ── PAGE HEADER ─────────────────────────────────────────────────────────────
  header: {
    name: "Divya Galagali",
    subheading: "Product operator with a decade of experience building products and teams in consumer-tech",
    location: "Bangalore, India"
  },

  // ── ABOUT (flows directly under the header) ──────────────────────────────────
  about: {
    body: [
      `I joined Paytm Insider as a founding team member in 2015 - when it was still small enough that everyone did everything. Over the next 10 years I built the client and customer success functions and the playbooks to scale them, ran partner integrations, owned the product roadmap, and shipped things both on the business and consumer side that touched millions of people during some of the biggest live events in India.`,
      `Then I took a break. I travelled, made a lot of art and pursued my love for making pictures. Hosted an exhibition in my living room. Yea, more on that later.`,
      `These days I'm consulting with early-stage startups - helping founders think through what to build, how to talk about it, and what needs to exist before they can grow. It's the kind of work I find genuinely interesting, and I'm good at it.`
    ]
  },

  // ── WORK ────────────────────────────────────────────────────────────────────
  work: {
    sectionLabel: "Work",
    heading: "What I do",
    items: [
      {
        title: "Early-Stage Consulting",
        description: "Onboarding flows, website copy, analytics foundations, brand voice, launch strategy. The full stack of things that need to exist before you can grow."
      },
      {
        title: "Product Strategy & Roadmapping",
        description: "Translating ambiguous goals into a clear path - what to build, in what order, and why. I've done this for consumer products at scale and for startups figuring out their first real bets."
      },
      {
        title: "Growth & GTM",
        description: "From acquisition through retention. I've run A/B tests, shaped launch strategies, built partner playbooks, and found the levers that actually move the number."
      },
      {
        title: "People & Culture",
        description: "I built teams from zero. That means hiring, playbooks, performance frameworks, and the unglamorous work of making a team feel like one."
      }
    ],
    featuredLabel: "Experience",
    featured: [
      {
        company: "Plynth",
        role: "Consultant",
        period: "2026 - Present",
        bullets: [
          "Built the onboarding experience and website copy.",
          "Wrote the brand and voice document that shapes everything from creator briefs to blog articles.",
          "Set up analytics foundation - from tools to what metrics to track.",
          "Shaped the roadmap for launch across channels and worked closely with the founder on core product flows."
        ]
      },
      {
        company: "District by Zomato",
        role: "Senior Product Manager",
        period: "Sept 2024 - Jan 2025",
        bullets: [
          "Led post-acquisition product integration for live entertainment under the new District brand.",
          "Improved search conversions from 5% to 7% via AI-driven metadata enrichment.",
          "Built recommendation logic (popularity, refresh windows, user signals) that doubled event discovery."
        ]
      },
      {
        company: "Paytm Insider",
        role: "Head of Client & Customer Success / Product Owner / Senior PM",
        period: "Jan 2015 - Jul 2024",
        bullets: [
          "Built a DIY self-publishing platform from inception to SaaS maturity, enabling ops teams to focus on strategy and revenue instead of execution.",
          "Scaled digital products (video-on-demand, online events) from 1,000 to 12,000 events in a year by means of a robust B2B marketing engine - product demos, organiser community and training content.",
          "Owned quality and outcomes across partner integrations including marketing and operational flows for large cultural properties - IPL, YouTube FanFest, NH7 Weekender."
        ]
      }
    ],
    contactLine: "Want to work with me or discuss a cool project that you are working on? Reach out at",
    contactEmail: "divya.galagali@gmail.com"
  },

  // ── HOW I WORK ──────────────────────────────────────────────────────────────
  howIWork: {
    sectionLabel: "How I Work",
    heading: "How I work",
    items: [
      {
        title: "I'm comfortable in the ambiguous bit",
        description: "Early-stage work is unclear by design. I don't need all the information to start moving - I make reasonable calls, hold them loosely, and course-correct when I learn more."
      },
      {
        title: "I care about the whole thing",
        description: "Product, design, marketing, ops - I've worked closely with all of them. I know enough about each to be useful, and I know when to get out of the way."
      },
      {
        title: "I take the work seriously, not myself",
        description: "I believe in feedback, empathy for the user, in being wrong gracefully, in laughing at the absurdity of startup life when needed. Good culture is also just... good energy. That one is a non-negotiable for me."
      }
    ]
  },

  // ── WHERE NEXT ──────────────────────────────────────────────────────────────
  next: {
    sectionLabel: "Next",
    heading: "Where I want to go",
    intro: "I'm looking for startups and brands who want a generalist with real operator experience - someone who can help shape direction, build the early team, and move without breaking everything.",
    industriesLabel: "Industries I'm drawn to",
    industries: [
      "Femtech",
      "Entertainment",
      "SaaS",
      "Behavioural Tech",
      "Physical-first brands"
    ],
    closing: "If you're building something in that space, let's talk.",
    ctaLabel: "Get in touch",
    ctaEmail: "divya.galagali@gmail.com"
  },

  // ── PERSONAL ────────────────────────────────────────────────────────────────
  personal: {
    sectionLabel: "Personal",
    heading: "Beyond the work",
    body: [
      `Picking up from where we left off, I hosted a Living Room Biennale. Not much - just covered every inch of my living room with art and pictures I've made. I'm a mixed media artist, printmaker and photographer. I make things with my hands when I'm not making things on a screen.`,
      `The pandemic is where it started really and then the sabbatical gave me permission to take that part seriously - not as a hobby, but as a practice. It changed how I see, which changed how I think.`
    ],
    photo: "living-room-biennale.jpg",
    photoAlt: "Divya at the Living Room Biennale, surrounded by her photographs and art",
    instagramHandle: "@geeedivya",
    instagramUrl: "https://www.instagram.com/geeedivya",
    creativeWebsiteLabel: "Creative portfolio - coming soon",
    creativeWebsiteUrl: ""
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    email: "divya.galagali@gmail.com",
    instagram: "https://www.instagram.com/geeedivya",
    copyright: "2026 Divya Galagali"
  }

};
