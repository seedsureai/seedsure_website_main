import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  FlaskConical,
  Github,
  Globe2,
  GraduationCap,
  Handshake,
  Leaf,
  Linkedin,
  Mail,
  Microscope,
  Mountain,
  Pickaxe,
  ScanSearch,
  Sprout,
  Target,
  Twitter,
  UsersRound
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Vision", href: "#vision" },
  { label: "Solutions", href: "#solutions" },
  { label: "Research", href: "#research" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export const problems = [
  {
    title: "Seed Selection",
    body: "Farmers often struggle to identify quality seeds suitable for local conditions.",
    icon: ScanSearch
  },
  {
    title: "Soil Intelligence",
    body: "Limited access to soil-based recommendations affects productivity.",
    icon: Pickaxe
  },
  {
    title: "Yield Uncertainty",
    body: "Environmental variability makes planning difficult.",
    icon: BarChart3
  },
  {
    title: "Information Gap",
    body: "Actionable agricultural knowledge is often inaccessible.",
    icon: BookOpen
  }
];

export const solutions = [
  {
    title: "AI Seed Verification",
    body: "Evaluating seed quality and authenticity.",
    icon: ScanSearch
  },
  {
    title: "Soil Intelligence",
    body: "Supporting decisions through soil analysis.",
    icon: Pickaxe
  },
  {
    title: "Crop Recommendation Engine",
    body: "Suggesting crops based on environmental conditions.",
    icon: Sprout
  },
  {
    title: "Farm Decision Support",
    body: "Providing actionable agricultural insights.",
    icon: BrainCircuit
  },
  {
    title: "Agricultural Knowledge Platform",
    body: "Making expertise accessible.",
    icon: BookOpen
  },
  {
    title: "Future Prediction Models",
    body: "Helping anticipate agricultural outcomes.",
    icon: BarChart3
  }
];

export const missionItems = [
  { title: "Democratize agricultural intelligence", icon: Globe2 },
  { title: "Improve farming decisions through AI", icon: BrainCircuit },
  { title: "Increase productivity", icon: Target },
  { title: "Promote sustainability", icon: Leaf },
  { title: "Empower smallholder farmers", icon: UsersRound }
];

export const visionStory = [
  {
    step: "01",
    eyebrow: "The reality",
    title: "Farming still begins with uncertainty.",
    body: "A farmer may know the land deeply, but seed quality, soil condition, weather pressure, and market timing can still turn every season into a difficult guess.",
    icon: Sprout
  },
  {
    step: "02",
    eyebrow: "The shift",
    title: "SeedSure AI turns field signals into guidance.",
    body: "We are building intelligence that can connect seed analysis, soil data, crop context, and research into recommendations that are easier to understand and act on.",
    icon: BrainCircuit
  },
  {
    step: "03",
    eyebrow: "The future",
    title: "Every farmer deserves decision support.",
    body: "Our vision is a future where intelligent tools help improve productivity, reduce uncertainty, and support sustainable agricultural growth for smallholder farmers and institutions.",
    icon: Target
  }
];

export const impactMetrics = [
  { value: "100M+", label: "Potential Farmers Reached" },
  { value: "AI-Powered", label: "Decision Support" },
  { value: "Sustainable", label: "Agriculture" },
  { value: "Data-Driven", label: "Farming" }
];

export const researchAreas = [
  "Seed Quality Analysis",
  "Soil Intelligence Models",
  "Crop Recommendation Systems",
  "Agricultural Data Collection",
  "Explainable AI",
  "Farmer-Centered Design"
];

export const timeline = [
  { year: "2024", title: "SeedSure AI Founded" },
  { year: "2025", title: "Research and Prototype Development" },
  { year: "2026", title: "Selected Among Top 6 Teams at UNDP Nepal Innovation Pitch" },
  { year: "Future", title: "Pilot Programs and Strategic Partnerships" }
];

export const teamMembers = [
  {
    name: "Sakshyam Banjade",
    role: "Founder",
    bio: "Leading SeedSure AI's research-driven vision to make agricultural intelligence accessible to farmers and partners.",
    photo: "/images/team-sakshyam.svg",
    socials: {
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      x: "https://x.com/"
    }
  }
];

export const partners = [
  { name: "Universities", icon: GraduationCap },
  { name: "NGOs", icon: Handshake },
  { name: "Research Institutions", icon: Microscope },
  { name: "Development Organizations", icon: Mountain }
];

export const posts = [
  {
    category: "Agriculture",
    title: "Why seed quality intelligence matters",
    excerpt: "How better seed decisions can reduce uncertainty before planting begins."
  },
  {
    category: "Artificial Intelligence",
    title: "Designing AI farmers can trust",
    excerpt: "A practical look at transparent recommendations in agricultural systems."
  },
  {
    category: "Research",
    title: "Building datasets for local conditions",
    excerpt: "Why field context matters when creating useful agritech models."
  },
  {
    category: "Product Development",
    title: "From research prototype to pilot readiness",
    excerpt: "The path toward field-tested decision support tools."
  }
];

export const transparency = [
  {
    title: "Current",
    body: "Research and development activities underway.",
    icon: FlaskConical
  },
  {
    title: "In Development",
    body: "Models and systems currently being built.",
    icon: CheckCircle2
  },
  {
    title: "Future",
    body: "Long-term product vision and deployment plans.",
    icon: Target
  }
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "X", href: "https://x.com/", icon: Twitter },
  { label: "Email", href: "mailto:info@seedsure.ai", icon: Mail }
];
