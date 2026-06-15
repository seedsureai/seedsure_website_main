import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Building2,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Mail,
  MapPin,
  ShieldCheck,
  Sprout,
  UsersRound
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With SeedSure AI | Agricultural Impact Partnerships",
  description:
    "Partner with SeedSure AI on farmer-centered research, field learning, pilot programs, and responsible agricultural decision support."
};

const partnerTypes = [
  {
    title: "Universities & Researchers",
    body: "Co-create field studies, datasets, model evaluation, agronomic research, and responsible validation methods.",
    icon: GraduationCap
  },
  {
    title: "NGOs & Development Organizations",
    body: "Shape pilots around real community needs, inclusion, extension support, and long-term farmer outcomes.",
    icon: HeartHandshake
  },
  {
    title: "Government & Public Agencies",
    body: "Explore how decision support can strengthen public extension, resilience planning, and food security work.",
    icon: Building2
  },
  {
    title: "Cooperatives & Farmer Networks",
    body: "Bring field trust, local knowledge, and farmer feedback directly into how SeedSure AI is built.",
    icon: UsersRound
  }
];

const collaborationTracks = [
  {
    title: "Field Learning",
    body: "Understand how seed, soil, and crop decisions are actually made before designing tools around them.",
    icon: MapPin
  },
  {
    title: "Research Validation",
    body: "Test assumptions with evidence, transparent limits, and review before expanding any recommendation system.",
    icon: FlaskConical
  },
  {
    title: "Pilot Programs",
    body: "Run small, accountable pilots with clear learning goals, farmer feedback, and measurable outcomes.",
    icon: Sprout
  },
  {
    title: "Knowledge Access",
    body: "Turn agricultural knowledge into formats that advisors, farmers, and institutions can use with confidence.",
    icon: BookOpen
  }
];

const process = [
  "Start with the field problem, not the technology.",
  "Define shared learning goals and responsibilities.",
  "Test carefully with farmers and local institutions.",
  "Publish what was learned and improve before scaling."
];

const principles = [
  "Farmers are partners in the learning process.",
  "Claims must be earned through evidence.",
  "Local context matters as much as technical performance.",
  "Impact should be accountable and shared."
];

const sdgGoals = [
  { label: "Zero Hunger", image: "/images/sdgs/goal-02.png" },
  { label: "Decent Work", image: "/images/sdgs/goal-08.jpeg" },
  { label: "Industry, Innovation and Infrastructure", image: "/images/sdgs/goal-09.png" },
  { label: "Climate Action", image: "/images/sdgs/goal-13.png" },
  { label: "Life on Land", image: "/images/sdgs/goal-15.png" },
  { label: "Partnerships for the Goals", image: "/images/sdgs/goal-17.png" }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#FAFFF3] text-[#1B2420]">
      <header className="sticky top-0 z-50 border-b border-[#244217]/10 bg-[rgba(250,255,243,0.94)] shadow-sm backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="SeedSure AI home">
            <Image
              src="/images/seedsure-logo-cropped.png"
              alt="SeedSure AI"
              width={170}
              height={128}
              priority
              className="h-11 w-auto object-contain"
            />
            <span className="hidden text-sm font-semibold sm:inline">SeedSure AI</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-[#244217]/15 bg-white px-4 py-2 text-sm font-semibold text-[#244217] shadow-sm transition hover:bg-[#244217] hover:text-white"
          >
            <ArrowLeft aria-hidden size={16} />
            Mission
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-[#132416] px-5 py-20 text-white sm:px-6 sm:py-28">
        <Image
          src="/images/real/crop-hands.jpg"
          alt="Hands working with crops in a field"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-38"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,36,22,0.94)_0%,rgba(19,36,22,0.78)_46%,rgba(19,36,22,0.48)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A4E54A]">
              Partner With SeedSure AI
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight sm:text-7xl">
              Real impact in agriculture is built with people, not around them.
            </h1>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-lg leading-8 text-white/82">
              We are looking for partners who can help us learn from the field, validate responsibly,
              and build tools that farmers, advisors, researchers, and institutions can trust.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@seedsure.ai?subject=SeedSure%20AI%20Partnership"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7CBB06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A4E54A] hover:text-[#1B2420]"
              >
                Start a Conversation
                <Mail aria-hidden size={17} />
              </a>
              <a
                href="#collaboration"
                className="inline-flex items-center justify-center rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1B2420]"
              >
                How We Collaborate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="section-kicker">Who This Is For</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Partners who bring trust, evidence, field access, or delivery capacity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#64705F]">
              We do not need symbolic logos. We need learning relationships that can make farmer
              decision support useful in real conditions.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partnerTypes.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-[#244217]/10 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#244217] text-white">
                  <Icon aria-hidden size={21} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64705F]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="collaboration" className="bg-white px-5 py-18 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="section-kicker">How We Collaborate</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
                Small, honest steps toward visible impact.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#64705F]">
              Partnership should create learning, not just visibility. Each collaboration starts with
              a practical question from the field and moves through evidence, feedback, and careful
              iteration.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {collaborationTracks.map(({ title, body, icon: Icon }) => (
              <article key={title} className="h-full rounded-lg border border-[#244217]/10 bg-[#FAFFF3] p-6 shadow-sm">
                <Icon className="h-7 w-7 text-[#7CBB06]" aria-hidden />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64705F]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8F7D7] px-5 py-18 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-kicker">Partnership Path</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              A clear way to move from intent to field learning.
            </h2>
          </div>
          <div className="space-y-4">
            {process.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#7CBB06] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-[#1B2420]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#132416] px-5 py-18 text-white sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A4E54A]">
              Partnership Principles
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              The way we build matters as much as what we build.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="flex gap-4 border-t border-white/14 pt-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#A4E54A]" aria-hidden />
                <p className="leading-7 text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-kicker">Mission Alignment</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Partnerships make the mission visible.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#64705F]">
              Our work connects to food security, livelihoods, innovation, climate resilience, land
              stewardship, and the collaboration needed to make these goals practical.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sdgGoals.map(({ label, image }) => (
              <div key={label} className="flex items-center gap-4 rounded-lg border border-[#244217]/10 bg-[#FAFFF3] p-4">
                <Image
                  src={image}
                  alt={`UN Sustainable Development Goal: ${label}`}
                  width={76}
                  height={76}
                  className="h-20 w-20 rounded-md object-cover"
                />
                <p className="font-semibold text-[#1B2420]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#244217] px-5 py-20 text-white sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <Handshake className="h-10 w-10 text-[#A4E54A]" aria-hidden />
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
              If your work touches farmers, food systems, or the future of land, let&apos;s build
              carefully together.
            </h2>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/10 p-6 backdrop-blur">
            <p className="text-lg leading-8 text-white/78">
              We are early, serious, and looking for partners who value evidence, humility, and field
              trust as much as technical ambition.
            </p>
            <a
              href="mailto:info@seedsure.ai?subject=SeedSure%20AI%20Partnership"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-[#A4E54A] px-6 py-3 text-sm font-semibold text-[#1B2420] transition hover:bg-white"
            >
              Contact SeedSure AI
              <Mail aria-hidden size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B140D] px-5 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Link href="/" className="inline-flex rounded-lg bg-[#FAFFF3] px-3 py-2">
            <Image
              src="/images/seedsure-logo.png"
              alt="SeedSure AI"
              width={220}
              height={88}
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-center text-xs text-white/42 sm:text-left">
            © {new Date().getFullYear()} SeedSure AI. Building with the people who feed the world.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="text-xs text-white/52 transition hover:text-white">
              Home
            </Link>
            <a href="mailto:info@seedsure.ai" className="text-xs text-white/52 transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
