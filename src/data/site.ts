export type Work = {
  title: string;
  artist: string;
  role: string;
  genre: string;
  description: string;
  coverTone: string;
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
};

export type AiSignal = {
  label: string;
  value: string;
  description: string;
};

export const siteLinks = {
  email: "hello@ronmerakistudio.com",
  bookingEmail: "booking@ronmerakistudio.com",
  whatsapp: "#TODO-whatsapp-link",
  instagram: "#TODO-instagram-link",
};

// TODO: Replace placeholder works with official R.ON Meraki Studio releases.
export const works: Work[] = [
  {
    title: "Midnight Signal",
    artist: "Ari Lane",
    role: "Producer / Arranger",
    genre: "Alt Pop",
    description:
      "A polished late-night pop record shaped around intimate vocals, wide synths and release-ready impact.",
    coverTone: "from-[#111111] via-[#3d2d51] to-[#c9a85c]",
    platforms: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
  {
    title: "Golden Static",
    artist: "R.ON Circle",
    role: "Songwriter / Producer",
    genre: "R&B",
    description:
      "Warm harmony stacks, minimalist drums and a signature hook built for repeat listening.",
    coverTone: "from-[#0d1317] via-[#315e67] to-[#d8c48a]",
    platforms: {
      spotify: "#",
      apple: "#",
      youtube: "#",
    },
  },
  {
    title: "Frame 24",
    artist: "Short Film Score",
    role: "Composer",
    genre: "Cinematic",
    description:
      "A restrained score with piano motifs, soft pulses and emotional lift for visual storytelling.",
    coverTone: "from-[#070707] via-[#24314f] to-[#b6c2d6]",
    platforms: {
      youtube: "#",
    },
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
    title: "Full Song Production",
    for: "Artists building a complete release.",
    description: "From raw idea to final arrangement, vocal direction and mix-ready production.",
    receives: "Production direction, arrangement, session files and release roadmap.",
  },
  {
    title: "Songwriting",
    for: "Artists who need a stronger story and hook.",
    description: "Melody, lyric and topline development shaped around your voice and audience.",
    receives: "Song draft, lyric direction, melodic options and refinement notes.",
  },
  {
    title: "Arrangement",
    for: "Demos that need emotional lift.",
    description: "Structure, instrumentation and dynamics designed to make the song feel finished.",
    receives: "Arrangement plan, instrument palette and production-ready sections.",
  },
  {
    title: "Vocal Production",
    for: "Singers who want a premium vocal sound.",
    description: "Performance coaching, comping direction and vocal layer design.",
    receives: "Vocal map, harmony plan and polished vocal production notes.",
  },
  {
    title: "Artist Direction",
    for: "Artists defining a signature sound.",
    description: "Creative direction across references, tone, song choices and release identity.",
    receives: "Sound identity brief, reference map and next-step strategy.",
  },
  {
    title: "Brand Music / Jingle",
    for: "Brands that need instant recall.",
    description: "Short-form music identities for campaigns, launches and digital content.",
    receives: "Music options, usage-ready edits and sonic identity guidance.",
  },
  {
    title: "Film & Short Video Scoring",
    for: "Directors and creators with a story to land.",
    description: "Cinematic music cues that support emotion without overpowering the picture.",
    receives: "Cue sketches, final score stems and timing-aware revisions.",
  },
  {
    title: "Release-Ready Demo Production",
    for: "Artists preparing pitches or first releases.",
    description: "A focused production package that turns a simple demo into a serious presentation.",
    receives: "Release-ready demo, feedback pass and platform preparation notes.",
  },
];

export const trustBadges = [
  "Release-ready workflow",
  "Artist-first direction",
  "Premium sound identity",
  "Bilingual creative range",
];

export const studioMetrics = [
  { value: "01", label: "Sound identity first" },
  { value: "48h", label: "Brief response target" },
  { value: "4", label: "Creative lanes" },
];

export const aiSignals: AiSignal[] = [
  {
    label: "Mood DNA",
    value: "Cinematic / Intimate / Premium",
    description: "Translate references into a sharper emotional direction.",
  },
  {
    label: "Release Fit",
    value: "Artist · Brand · Film",
    description: "Shape the production path around where the sound must live.",
  },
  {
    label: "Vocal Focus",
    value: "Tone / Range / Hook",
    description: "Identify where the performance needs clarity or lift.",
  },
];
