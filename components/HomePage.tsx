"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  Check,
  ChevronRight,
  FlaskConical,
  Handshake,
  Mail,
  Mountain,
  Sprout,
  UsersRound
} from "lucide-react";

const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Problem", href: "#problem" },
  { label: "Origin", href: "#origin" },
  { label: "Partners", href: "/partners/" }
];

const stats = [
  { value: "500M+", label: "smallholder farmers worldwide" },
  { value: "733M", label: "people facing hunger globally" },
  { value: "33%", label: "of food comes from small farms" },
  { value: "40%", label: "of jobs are tied to agriculture in many developing economies" }
];

const problemBeats = [
  {
    label: "Before the seed is planted",
    title: "Quality is hard to verify",
    body: "Farmers often make seed decisions without enough evidence about quality, authenticity, or fit for local conditions."
  },
  {
    label: "Before advice reaches the field",
    title: "Soil insight stays out of reach",
    body: "Soil data and recommendations are rarely available in a form that is timely, practical, and easy to act on."
  },
  {
    label: "Before the season ends",
    title: "Climate changes the rules",
    body: "Experience still matters, but weather volatility can make old patterns less reliable every year."
  }
];

const trustSteps = [
  {
    title: "Listen before building",
    body: "Field realities, farmer experience, and local institutions shape the product direction.",
    icon: UsersRound
  },
  {
    title: "Test with evidence",
    body: "Every recommendation must be grounded in data, research, and transparent limits.",
    icon: FlaskConical
  },
  {
    title: "Serve the decision",
    body: "Technology should reduce confusion at the moment a farmer, advisor, or partner needs clarity.",
    icon: BrainCircuit
  }
];

const buildAreas = [
  {
    title: "Seed Intelligence",
    body: "Researching seed quality and suitability signals before planting decisions are made.",
    status: "In development",
    icon: Sprout
  },
  {
    title: "Soil Understanding",
    body: "Exploring how soil indicators can become accessible, local recommendations.",
    status: "Research track",
    icon: Mountain
  },
  {
    title: "Crop Guidance",
    body: "Connecting field context, data, and agronomic knowledge into practical decision support.",
    status: "Prototype logic",
    icon: BarChart3
  }
];

const partnerTypes = [
  "Universities",
  "NGOs",
  "Government agencies",
  "Farmer networks",
  "Research institutions",
  "Development partners"
];

const sdgGoals = [
  {
    label: "Zero Hunger",
    image: "/images/sdgs/goal-02.png",
    note: "Food security and better agricultural decisions"
  },
  {
    label: "Decent Work",
    image: "/images/sdgs/goal-08.jpeg",
    note: "Stronger rural livelihoods and farmer dignity"
  },
  {
    label: "Industry, Innovation and Infrastructure",
    image: "/images/sdgs/goal-09.png",
    note: "Responsible innovation for underserved systems"
  },
  {
    label: "Climate Action",
    image: "/images/sdgs/goal-13.png",
    note: "Climate-aware decisions for uncertain seasons"
  },
  {
    label: "Life on Land",
    image: "/images/sdgs/goal-15.png",
    note: "Soil, land, and sustainable farming practices"
  },
  {
    label: "Partnerships for the Goals",
    image: "/images/sdgs/goal-17.png",
    note: "Collaboration with research, public, and field partners"
  }
];

function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="SeedSure AI home">
      <Image
        src="/images/seedsure-logo-cropped.png"
        alt="SeedSure AI"
        width={170}
        height={128}
        priority
        className="h-11 w-auto object-contain"
      />
      <span className="hidden text-sm font-semibold text-[#1B2420] sm:inline">SeedSure AI</span>
    </Link>
  );
}

function Section({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-6 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export default function HomePage() {
  const [emailState, setEmailState] = useState<"idle" | "joined">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setEmailState("joined");
    form.reset();
  }

  return (
    <main className="min-h-screen bg-[#FAFFF3] text-[#1B2420]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#244217]/10 bg-[rgba(250,255,243,0.92)] shadow-sm backdrop-blur-2xl">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#64705F] transition hover:bg-white hover:text-[#244217]"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-md bg-[#7CBB06] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#244217]"
          >
            Join the Mission
            <ArrowRight aria-hidden="true" size={16} />
          </a>
        </nav>
      </header>

      <section className="relative min-h-screen overflow-hidden bg-[#132416] px-5 pb-16 pt-24 text-white sm:px-6">
        <Image
          src="/images/real/nepal-terraces.jpg"
          alt="Real terraced rice fields in Nepal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,33,50,0.82)_0%,rgba(16,33,50,0.58)_42%,rgba(22,61,42,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#132416] to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-between">
          <Reveal className="max-w-5xl pt-12 sm:pt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#A4E54A]">
              Built from field reality
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal sm:text-7xl lg:text-8xl">
              Food runs on farmers. Better decisions should reach them too.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
              SeedSure AI is building farmer-centered tools for seed quality, soil understanding,
              crop guidance, and climate uncertainty.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#mission"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7CBB06] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A4E54A] hover:text-[#1B2420]"
              >
                Read the Mission
                <ChevronRight aria-hidden="true" size={18} />
              </a>
              <Link
                href="/partners/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/24 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#1B2420]"
              >
                Partner With Us
                <Handshake aria-hidden="true" size={18} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="mt-14 grid gap-3 md:grid-cols-3">
            {[
              ["Research-first", "Building with evidence, transparency, and field context."],
              ["Nepal-rooted", "Starting where agricultural uncertainty is visible every day."],
              ["Partner-led", "Designed for collaboration with institutions and communities."]
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg border border-white/12 bg-[#FAFFF3]/10 p-5 backdrop-blur-xl">
                <p className="text-sm font-semibold text-[#A4E54A]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/76">{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Section id="mission" className="bg-[#E8F7D7] text-[#1B2420]">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7CBB06]">
            The mission is access
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            We are not here to make farming look futuristic. We are here to make decisions fairer.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#536056]">
            Farmers already make hard decisions. The work is to make the evidence behind those
            decisions easier to reach, easier to trust, and easier to use.
          </p>
        </Reveal>
      </Section>

      <Section id="impact" className="bg-[#132416] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A4E54A]">
              The scale of the challenge
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              The numbers are staggering. The lives behind them are real.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/72">
              Every statistic hides a person, a family, and a field where decisions are made with
              imperfect information.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="rounded-lg border border-white/10 bg-[#FAFFF3]/[0.06] p-6 shadow-sm">
                  <p className="text-4xl font-semibold text-[#A4E54A]">{stat.value}</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="problem" className="bg-[#FAFFF3]">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="section-kicker">The invisible problem</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              We obsess over the future. We ignore the soil.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#64705F]">
              Before the dashboard, before the forecast, before the market price, there is a basic
              question: what is really happening in this field?
            </p>
          </Reveal>
          <div className="space-y-4">
            {problemBeats.map((beat, index) => (
              <Reveal key={beat.title} delay={index * 0.08}>
                <article className="rounded-lg border border-[#244217]/10 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CBB06]">
                    {beat.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{beat.title}</h3>
                  <p className="mt-3 leading-7 text-[#64705F]">{beat.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[#244217] text-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A4E54A]">
              A farmer&apos;s reality
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              You cannot build trust from a distance.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/76">
              SeedSure AI has to be shaped with farmers, field workers, researchers, and communities
              who understand what is at stake.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-lg shadow-soft">
              <Image
                src="/images/real/farmer-field.jpg"
                alt="A real farmer working in an agricultural field"
                width={1600}
                height={1174}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-md border border-white/12 bg-[#132416]/58 p-4 text-sm leading-6 text-white/86 backdrop-blur">
                The best technology begins by respecting the person who will live with its
                consequences.
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="origin" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <Reveal>
            <p className="section-kicker">Our local beginning</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              We started in Nepal. Hunger has no borders.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#64705F]">
              SeedSure AI is not a finished product. It is a global project that began in Nepal
              because the problem is visible here: farmers, institutions, and communities making
              decisions with too little certainty.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Now", "Research and early prototype development."],
                ["Next", "Partner pilots with farmer-centered feedback."],
                ["Future", "Decision intelligence for underserved agricultural systems."],
                ["Always", "Evidence before claims, dignity before scale."]
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-[#244217]/10 bg-[#FAFFF3] p-4">
                  <p className="font-semibold text-[#7CBB06]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#64705F]">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Image
              src="/images/real/nepal-village.jpg"
              alt="Real rural village and crops on terraced hillsides in Nepal"
              width={1800}
              height={1200}
              className="aspect-[4/5] w-full h-auto rounded-lg object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[#132416] text-white">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A4E54A]">
            Mission alignment
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Our work connects to the Sustainable Development Goals.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/72">
            SeedSure AI is focused on food security, rural livelihoods, responsible innovation,
            climate resilience, land stewardship, and partnerships that make field-level impact
            possible.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sdgGoals.map((goal, index) => (
            <Reveal key={goal.label} delay={index * 0.05}>
              <div className="grid h-full grid-cols-[88px_1fr] gap-4 rounded-lg border border-white/10 bg-[#FAFFF3]/[0.06] p-4 shadow-sm">
                <div className="overflow-hidden rounded-md bg-white">
                  <Image
                    src={goal.image}
                    alt={`UN Sustainable Development Goal: ${goal.label}`}
                    width={180}
                    height={180}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-6 text-white">{goal.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{goal.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[#FAFFF3]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">What we are building</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Tools that earn trust one decision at a time.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#64705F]">
            We are building technology for technical scale, but it must remain understandable,
            inspectable, and useful at field level.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {buildAreas.map(({ title, body, status, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-[#244217]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#244217] text-white">
                    <Icon aria-hidden="true" size={21} />
                  </div>
                  <span className="rounded-md bg-[#E8F7D7] px-3 py-1 text-xs font-semibold text-[#7CBB06]">
                    {status}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#64705F]">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <Image
              src="/images/real/crop-hands.jpg"
              alt="Real hands working with crops in a field"
              width={1600}
              height={888}
              className="aspect-[16/10] w-full h-auto rounded-lg object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-kicker">Our approach</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Humble enough to serve real farms. Rigorous enough to be trusted.
            </h2>
            <div className="mt-8 space-y-4">
              {trustSteps.map(({ title, body, icon: Icon }) => (
                <div key={title} className="flex gap-4 rounded-lg bg-[#FAFFF3] p-5">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-[#7CBB06]" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#64705F]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="partners" className="bg-[#244217] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A4E54A]">
              This is your moment
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Be the reason a farming family does not go hungry.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/76">
              We need partners who can help us learn responsibly, test honestly, and reach the people
              who are too often left out of agricultural innovation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {partnerTypes.map((type) => (
                <div key={type} className="rounded-lg border border-white/12 bg-white/10 p-5">
                  <BadgeCheck className="h-5 w-5 text-[#A4E54A]" aria-hidden="true" />
                  <p className="mt-4 font-semibold">{type}</p>
                </div>
              ))}
            </div>
            <Link
              href="/partners/"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#FAFFF3] px-5 py-3 text-sm font-semibold text-[#244217] transition hover:bg-[#A4E54A] hover:text-[#1B2420]"
            >
              See Partnership Paths
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section id="join" className="bg-[#132416] text-white">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A4E54A]">
            Join the mission
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            Help shape agricultural intelligence before it reaches the field.
          </h2>
          <form
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded-lg border border-white/12 bg-white/10 p-3 backdrop-blur sm:flex-row"
            onSubmit={handleSubmit}
          >
            <label htmlFor="mission-email" className="sr-only">
              Email address
            </label>
            <input
              id="mission-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="min-h-12 flex-1 rounded-md border border-white/12 bg-white px-4 text-base text-[#1B2420] placeholder:text-[#64705F]"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#7CBB06] px-5 text-sm font-semibold text-white transition hover:bg-[#A4E54A] hover:text-[#1B2420]"
            >
              Join SeedSure AI
              <Mail aria-hidden="true" size={18} />
            </button>
          </form>
          {emailState === "joined" ? (
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/82">
              <Check aria-hidden="true" size={17} />
              Thank you. You are part of the early SeedSure AI mission circle.
            </p>
          ) : null}
        </Reveal>
      </Section>

      <footer className="bg-[#0B140D] px-5 py-12 text-white sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-[#FAFFF3] px-3 py-2">
                <Image
                  src="/images/seedsure-logo.png"
                  alt="SeedSure AI"
                  width={240}
                  height={96}
                  className="h-20 w-auto object-contain"
                />
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Farmer-centered decision intelligence for a fairer agricultural future.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-white/64 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="text-sm text-white/56 md:text-right">
            <p>Kathmandu, Nepal</p>
            <a className="mt-2 inline-block transition hover:text-white" href="mailto:info@seedsure.ai">
              info@seedsure.ai
            </a>
            <p className="mt-6">© SeedSure AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
