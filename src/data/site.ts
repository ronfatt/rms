export type Work = {
  title: string;
  artist: string;
  role: string;
  genre: string;
  description: string;
  coverTone: string;
  image: string;
  goal: string;
  direction: string;
  output: string;
  tools: string[];
  privateReel: string;
  platforms: {
    spotify?: string;
    apple?: string;
    youtube?: string;
  };
};

export type Artist = {
  name: string;
  lane: string;
  latestRelease: string;
  tags: string[];
  accent: string;
  links: {
    instagram?: string;
    youtube?: string;
  };
};

export type Service = {
  title: string;
  for: string;
  description: string;
  receives: string;
  bestFor: string;
};

export type AiSignal = {
  label: string;
  value: string;
  description: string;
};

export type Expertise = {
  title: string;
  signal: string;
  description: string;
};

export const siteLinks = {
  email: "hello@ronmerakistudio.com",
  bookingEmail: "booking@ronmerakistudio.com",
  briefEmail: "ronfung1313@gmail.com",
  whatsappNumber: "601158917029",
  whatsapp: "https://wa.me/601158917029",
  instagram: "#TODO-instagram-link",
};

// TODO: Replace placeholder works with official R.ON Meraki Studio releases.
export const works: Work[] = [
  {
    title: "AI Music Video System",
    artist: "R.ON Creative Lab",
    role: "AI Director / Producer",
    genre: "Video",
    description:
      "AI visuals, edit rhythm and sound direction.",
    coverTone: "from-[#111111] via-[#3d2d51] to-[#c9a85c]",
    image: "/profile/ron-film-set.webp",
    goal: "Turn a music idea into a cinematic short-form world.",
    direction: "AI visual frames, director board, edit rhythm and sound mood.",
    output: "Private video reel, scene system and music direction.",
    tools: ["OpenAI", "AI Visuals", "CapCut", "Sound Design"],
    privateReel: "Private reel available on request",
    platforms: {
    },
  },
  {
    title: "Sound Identity Build",
    artist: "Artist / Brand Project",
    role: "Music Producer / Composer",
    genre: "Music",
    description:
      "Original sound direction for artists and brands.",
    coverTone: "from-[#0d1317] via-[#315e67] to-[#d8c48a]",
    image: "/profile/ron-vocal.webp",
    goal: "Create a sound that feels recognizable and premium.",
    direction: "Reference map, sonic palette, melody mood and arrangement path.",
    output: "Sound identity brief and release-ready music direction.",
    tools: ["OpenAI", "Logic Pro", "Suno", "Arrangement"],
    platforms: {
    },
    privateReel: "Private audio/video deck available on request",
  },
  {
    title: "Vibe Coding Prototype",
    artist: "AI Product Interface",
    role: "Creative Technologist",
    genre: "Code",
    description:
      "App-like prototypes built with AI-assisted flow.",
    coverTone: "from-[#070707] via-[#24314f] to-[#75a7ff]",
    image: "/profile/ron-ai-workflow.webp",
    goal: "Make a raw product idea feel real quickly.",
    direction: "Mobile-first interface, creative copy and fast frontend build.",
    output: "Clickable prototype, landing page or MVP interface.",
    tools: ["Cursor", "Next.js", "OpenAI", "Vercel"],
    platforms: {
    },
    privateReel: "Prototype walkthrough available on request",
  },
];

// TODO: Replace placeholder collaborators with approved artist profiles.
export const artists: Artist[] = [
  {
    name: "Ari Lane",
    lane: "Vocalist / Alt Pop",
    latestRelease: "Midnight Signal",
    tags: ["Alt Pop", "Cinematic", "English"],
    accent: "bg-[#d4af5f]",
    links: {
      instagram: "#",
      youtube: "#",
    },
  },
  {
    name: "Mei Sol",
    lane: "Singer-Songwriter",
    latestRelease: "Still Here",
    tags: ["Mandopop", "Acoustic", "Ballad"],
    accent: "bg-[#9fb7ff]",
    links: {
      instagram: "#",
    },
  },
  {
    name: "Noir Atlas",
    lane: "Brand / Visual Project",
    latestRelease: "Identity Suite",
    tags: ["Brand Music", "Jingle", "Sound Logo"],
    accent: "bg-[#c7c7c7]",
    links: {
      youtube: "#",
    },
  },
];

export const services: Service[] = [
  {
    title: "AI Music Video Package",
    for: "Artists, creators and brands that need cinematic content with sound.",
    description:
      "AI video direction with sound, scenes and edit rhythm.",
    receives:
      "Director board, prompt direction, shot flow and sound plan.",
    bestFor: "Music videos, launch content, visualizers, short-form campaigns.",
  },
  {
    title: "Creative Direction System",
    for: "Creators and businesses that need a stronger public identity.",
    description:
      "Positioning, visuals, sound and content direction in one system.",
    receives:
      "Strategy, references, campaign angles and roadmap.",
    bestFor: "Personal brands, artist identity, product launches, content systems.",
  },
  {
    title: "Vibe Coding MVP",
    for: "Founders and creators who need an idea to feel real fast.",
    description:
      "AI-assisted interface direction and frontend prototype build.",
    receives:
      "UI structure, clickable flow, frontend build and roadmap.",
    bestFor: "Landing pages, internal tools, creative apps, MVP demos.",
  },
];

export const trustBadges = [
  "AI + director workflow",
  "Video, music and code",
  "Premium creative taste",
  "Fast execution system",
];

export const studioMetrics = [
  { value: "AI", label: "Creative acceleration" },
  { value: "4x", label: "Video music code strategy" },
  { value: "01", label: "Director-led taste" },
];

export const aiSignals: AiSignal[] = [
  {
    label: "Director Brain",
    value: "Concept / Shot / Emotion",
    description: "Turn loose ideas into cinematic direction and visual language.",
  },
  {
    label: "AI Production Stack",
    value: "Video · Music · Code",
    description: "Use AI to move from idea to visuals, sound and prototype.",
  },
  {
    label: "Vibe Coding",
    value: "Idea to Interface",
    description: "Build app-like prototypes that make the concept feel real.",
  },
];

export const expertise: Expertise[] = [
  {
    title: "AI Video Creation",
    signal: "Director-level visuals",
    description:
      "Concept, prompt direction, scene rhythm and cinematic mood.",
  },
  {
    title: "Music Production",
    signal: "Sound with identity",
    description:
      "Sound, songwriting and sonic identity with a clear point of view.",
  },
  {
    title: "Vibe Coding",
    signal: "Ideas become usable",
    description:
      "App-like websites, prototypes and tools with AI-assisted development.",
  },
  {
    title: "Creative Direction",
    signal: "Taste across mediums",
    description:
      "Story, visuals, sound, interface and strategy in one system.",
  },
];

export const aiStack = [
  "OpenAI",
  "Runway",
  "Midjourney",
  "Suno",
  "CapCut",
  "Cursor",
  "Next.js",
  "Vercel",
];

export const videoHostingOptions = [
  "Self-hosted reels",
  "Cloudflare Stream",
  "Mux private",
  "Password-gated",
];
