import { useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SPREADS } from "./dossier/data";
import { Stamp, Paperclip, Redacted } from "./dossier/Stamp";

gsap.registerPlugin(ScrollTrigger);

/* --------------------------- shared page pieces --------------------------- */

function PaperGrain() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.18  0 0 0 0 0.12  0 0 0 0 0.06  0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
      }}
    />
  );
}

function CornerCrease() {
  return (
    <>
      <div
        className="pointer-events-none absolute -top-px -left-px h-24 w-24 opacity-40"
        style={{
          background:
            "linear-gradient(135deg, transparent 45%, oklch(0.5 0.05 60 / 0.35) 50%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-px -right-px h-32 w-32 opacity-30"
        style={{
          background:
            "linear-gradient(315deg, transparent 42%, oklch(0.45 0.06 55 / 0.35) 48%, transparent 55%)",
        }}
      />
    </>
  );
}

type PageProps = { children: ReactNode; className?: string };
function Page({ children, className = "" }: PageProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden paper-texture-light ${className}`}
      style={{
        boxShadow:
          "inset 0 0 60px oklch(0.35 0.06 55 / 0.18), 0 20px 40px -20px rgba(0,0,0,0.6)",
      }}
    >
      <PaperGrain />
      <CornerCrease />
      {children}
    </div>
  );
}

/* ------------------------------ page contents ----------------------------- */

const TypedLine = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="flex gap-3 text-[15px] leading-relaxed">
    <span className="w-32 shrink-0 font-bold uppercase tracking-widest text-ink-soft">
      {label}
    </span>
    <span className="text-ink">{value}</span>
  </div>
);

/* Cover */
function CoverContent() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center px-10 text-ink">
      <div className="absolute left-8 top-8 rounded-sm bg-ink px-3 py-1 font-typewriter text-xs uppercase tracking-widest text-paper">
        Portfolio of Mayank Ojha
      </div>
      <div className="absolute right-8 top-8 rounded-sm border-2 border-ink/60 px-3 py-1 font-typewriter text-xs uppercase tracking-widest text-ink/80">
        Portfolio · 2026
      </div>

      <div className="mb-10">
        <Stamp rotate={-8} className="!border-[6px] !px-6 !py-3 !text-4xl md:!text-5xl">
          Portfolio
        </Stamp>
      </div>

      <div className="text-center font-typewriter">
        <div className="text-sm uppercase tracking-[0.4em] text-ink-soft">
          Mayank.DEV · Indore
        </div>
        <div className="mt-2 font-stencil text-3xl md:text-4xl tracking-[0.3em] text-ink">
          MAYANK.DEV · PORTFOLIO
        </div>
        <div className="mt-8 space-y-2 text-lg md:text-xl">
          <div>
            <span className="text-ink-soft">SUBJECT: </span>
            <span className="font-bold tracking-widest">MAYANK OJHA</span>
          </div>
          <div>
            <span className="text-ink-soft">FOCUS: </span>
            <span>AI/ML DEVELOPER — FULL-STACK — FREELANCE</span>
          </div>
          <div>
            <span className="text-ink-soft">STATUS: </span>
            <span className="text-stamp font-bold">ACTIVE</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-typewriter text-sm uppercase tracking-[0.3em] text-ink-soft blink-cursor">
        [ scroll to open file ]
      </div>

      <div className="coffee-stain h-32 w-32" style={{ top: "18%", right: "12%" }} />
      <Stamp rotate={12} className="!absolute !bottom-24 !right-16 !text-lg opacity-80">
        Personal Portfolio
      </Stamp>
    </div>
  );
}

/* Spread 1 - Profile */
function ProfileLeft() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 01 · Subject Profile
        </div>
        <Stamp rotate={-3} className="!text-xs">Verified</Stamp>
      </div>
      <h2 className="font-stencil text-3xl uppercase tracking-widest text-ink">
        Subject Dossier
      </h2>
      <div className="mt-2 mb-6 h-[2px] w-24 bg-ink/60" />

      <div className="space-y-3 font-typewriter text-[15px] leading-relaxed text-ink">
        <p>
          <span className="font-bold">MAYANK OJHA</span> is a B.Tech Computer
          Science Engineering graduate <span className="italic">(Artificial Intelligence – IBM)</span>{" "}
          from Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore. He
          graduated in <span className="font-bold">May 2026</span>.
        </p>
        <p>
          FILE INDICATES experience building <span className="font-bold">end-to-end AI applications</span>{" "}
          and Python-based pipelines with <span className="font-bold">PyTorch, TensorFlow, and Hugging Face</span>.
        </p>
        <p>
          CONFIRMED completion of the <span className="font-bold">IBM Generative AI PBEL internship</span>,
          with hands-on work in prompt engineering, multimodal systems, and cloud-based deployment.
        </p>
        <p>
          ALSO NOTED: strong adoption of <span className="font-bold">GitHub Copilot, Cursor, and other AI-assisted tooling</span>{" "}
          for rapid prototyping and production-ready development.
        </p>
        <p className="text-ink-soft italic">
          Cross-reference: <Redacted>hover to reveal — AI developer and freelance prototyping record</Redacted>{" "}
          on file.
        </p>
      </div>

      <div className="mt-auto flex items-end justify-between font-typewriter text-xs uppercase tracking-widest text-ink-soft">
        <span>Prepared: 2026 · Portfolio/AI-01</span>
        <span>Page 01 / 14</span>
      </div>
    </div>
  );
}

function ProfileRight() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          Photo / Vitals
        </div>
        <Stamp rotate={4} className="!text-xs">Indore, MP</Stamp>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Photo card */}
        <div className="relative">
          <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 text-ink/70">
            <Paperclip className="h-14 w-6" />
          </div>
          <div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-ink/20 bg-manila-dark/40"
            style={{
              transform: "rotate(-2deg)",
              boxShadow: "0 10px 25px -10px rgba(0,0,0,0.55)",
            }}
          >
            <img
              src="/images/profile/profile.svg"
              alt="Profile photograph"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 mix-blend-multiply opacity-30 bg-gradient-to-br from-transparent via-transparent to-black/50" />
          </div>
          <div className="mt-2 text-center font-typewriter text-[10px] uppercase tracking-widest text-ink-soft">
            Photograph — Front View
          </div>
        </div>

        {/* Vitals */}
        <div className="space-y-3">
          <div className="border-2 border-dashed border-ink/40 p-3">
            <div className="mb-2 font-stencil text-xs uppercase tracking-widest text-ink-soft">
              Vitals
            </div>
            <div className="space-y-1.5 font-typewriter text-[13px]">
              <TypedLine label="Name" value="Mayank Ojha" />
              <TypedLine label="Location" value="Indore, MP · IN" />
              <TypedLine label="Role" value="AI/ML · Generative AI" />
              <TypedLine label="Status" value="B.Tech graduate · Available for freelance work" />
            </div>
          </div>

          <div className="border-2 border-ink/30 p-3">
            <div className="mb-2 font-stencil text-xs uppercase tracking-widest text-ink-soft">
              Fingerprint
            </div>
            <svg viewBox="0 0 60 70" className="mx-auto h-16 w-14 text-ink/70">
              <g fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M30 8 C 12 8 6 24 6 40 C 6 52 12 62 20 66" />
                <path d="M30 14 C 16 14 12 26 12 40 C 12 50 16 58 22 62" />
                <path d="M30 20 C 20 20 18 28 18 40 C 18 48 22 56 26 60" />
                <path d="M30 26 C 25 26 24 32 24 40 C 24 46 27 52 30 56" />
                <path d="M30 32 C 29 32 30 36 30 40 C 30 44 30 48 32 52" />
                <path d="M54 40 C 54 22 44 12 34 10" />
                <path d="M48 40 C 48 26 40 18 34 16" />
              </g>
            </svg>
          </div>

          <div className="border-2 border-ink/30 p-3">
            <div className="mb-2 font-stencil text-xs uppercase tracking-widest text-ink-soft">
              Quick Facts
            </div>
            <div className="space-y-1 font-typewriter text-[13px]">
              <div>
                <span className="text-ink-soft">Languages: </span>Hindi · English
              </div>
              <div>
                <span className="text-ink-soft">Interests: </span>AI Systems · Ownership ·
                Innovation
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-6 font-marker text-[15px] text-marker/90 rotate-[-3deg] self-end">
        ✓ profile confirmed
      </div>
    </div>
  );
}

function BusinessPage() {
  return (
    <section aria-labelledby="business-heading" className="flex h-full flex-col p-8 text-ink md:p-12">
      <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
        Business Details · Indore, Madhya Pradesh
      </div>
      <h2 id="business-heading" className="mt-3 font-stencil text-3xl uppercase tracking-widest md:text-4xl">
        MAYANK.DEV
      </h2>
      <p className="mt-2 max-w-2xl font-typewriter text-base leading-relaxed md:text-lg">
        AI-Powered Products &amp; Growth Systems for Local Businesses
      </p>
      <div className="my-6 h-[2px] w-24 bg-ink/60" />
      <dl className="grid gap-x-10 gap-y-5 font-typewriter text-sm md:grid-cols-2 md:text-base">
        <div>
          <dt className="font-bold uppercase tracking-widest text-ink-soft">Legal business name</dt>
          <dd className="mt-1">MAYANK.DEV</dd>
        </div>
        <div>
          <dt className="font-bold uppercase tracking-widest text-ink-soft">Brand</dt>
          <dd className="mt-1">Mayank.DEV</dd>
        </div>
        <div className="md:col-span-2">
          <dt className="font-bold uppercase tracking-widest text-ink-soft">Registered address</dt>
          <dd className="mt-1">3rd floor, shiv shakti nagar, Indore, Madhya Pradesh, 452011</dd>
        </div>
        <div>
          <dt className="font-bold uppercase tracking-widest text-ink-soft">Phone</dt>
          <dd className="mt-1"><a className="underline decoration-dotted underline-offset-4 hover:text-stamp" href="tel:+918962972784">+91 89629 72784</a></dd>
        </div>
        <div>
          <dt className="font-bold uppercase tracking-widest text-ink-soft">Email</dt>
          <dd className="mt-1 break-all"><a className="underline decoration-dotted underline-offset-4 hover:text-stamp" href="mailto:mayankojha2228@gmail.com">mayankojha2228@gmail.com</a></dd>
        </div>
      </dl>
      <div className="mt-auto pt-6 font-marker text-marker text-base">Independent freelance business · Indore</div>
    </section>
  );
}

const SERVICES = [
  { title: "Web development", description: "Next.js websites for local businesses, built around their services and customer needs." },
  { title: "Social media marketing and content", description: "Social media content and marketing support for local business communication." },
  { title: "CRM and workflow automation", description: "CRM setup and workflow automation to help organize enquiries and routine tasks." },
  { title: "WhatsApp AI bots and lead capture", description: "WhatsApp AI bots and lead capture flows for local businesses." },
];

function ServicesPage() {
  return (
    <section aria-labelledby="services-heading" className="flex h-full flex-col p-8 text-ink md:p-12">
      <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
        Mayank.DEV · Services
      </div>
      <h2 id="services-heading" className="mt-3 font-stencil text-3xl uppercase tracking-widest md:text-4xl">
        Services
      </h2>
      <div className="mt-3 mb-6 h-[2px] w-24 bg-ink/60" />
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        {SERVICES.map((service, index) => (
          <article key={service.title} className="border border-ink/35 bg-manila-light/40 p-4 md:p-5">
            <div className="mb-2 font-stencil text-xs uppercase tracking-widest text-ink-soft">0{index + 1}</div>
            <h3 className="font-stencil text-lg uppercase tracking-wider">{service.title}</h3>
            <p className="mt-2 font-typewriter text-sm leading-relaxed">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* Spread 2 - Education */
function EducationLeft() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 02 · Academic Record
        </div>
        <Stamp rotate={-4} className="!text-xs">Academic Record</Stamp>
      </div>
      <h2 className="font-stencil text-3xl uppercase tracking-widest">Education</h2>
      <div className="mt-2 mb-6 h-[2px] w-24 bg-ink/60" />

      <div className="rounded-sm border-2 border-ink/40 bg-manila-light/40 p-5 font-typewriter">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <div className="text-lg font-bold">
              Shri Vaishnav Vidyapeeth Vishwavidyalaya
            </div>
            <div className="text-sm text-ink-soft">Indore, Madhya Pradesh · IN</div>
          </div>
          <Stamp rotate={6} className="!text-[10px]">Graduated</Stamp>
        </div>

        <div className="space-y-1.5 text-[14px]">
          <TypedLine label="Program" value="B.Tech · Computer Science Engineering" />
          <TypedLine label="Specialization" value="Artificial Intelligence – IBM" />
          <TypedLine label="Duration" value="Aug 2022 — May 2026" />
          <TypedLine label="Standing" value="B.Tech graduate · May 2026" />
        </div>

        <div className="mt-4 border-t border-dashed border-ink/40 pt-3 text-[13px] text-ink-soft">
          Coursework of note: Deep Learning, NLP, Data Structures, Cloud Systems,
          Software Engineering, and applied <span className="text-ink font-bold">Generative AI</span>.
        </div>
      </div>

      <div className="mt-auto font-marker text-marker text-lg rotate-[-2deg]">
        Education record · May 2026
      </div>
    </div>
  );
}

const CERTS = [
  { org: "MeitY / NASSCOM", name: "Digital Application Fundamentals (STEM)", tag: "Cert-A" },
  { org: "Anthropic", name: "AI Fluency Framework and Foundations", tag: "Cert-B" },
  { org: "IBM", name: "Data Analysis Using Python", tag: "Cert-C" },
  { org: "IBM", name: "Data Visualization Using Python", tag: "Cert-D" },
  { org: "IBM", name: "Introduction to Cloud Computing", tag: "Cert-E" },
];

function EducationRight() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          Attached · Certifications
        </div>
        <Stamp rotate={5} className="!text-xs">On File</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        Credentials Attached
      </h2>
      <div className="mt-2 mb-6 h-[2px] w-24 bg-ink/60" />

      <div className="relative flex-1">
        {CERTS.map((c, i) => (
          <div
            key={c.tag}
            className="absolute left-0 right-0 origin-top-left"
            style={{
              top: `${i * 62}px`,
              transform: `rotate(${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg)`,
              zIndex: 10 + i,
            }}
          >
            <div
              className="relative mx-6 rounded-sm border border-ink/25 bg-paper p-3 pl-6 font-typewriter"
              style={{ boxShadow: "0 6px 14px -8px rgba(0,0,0,0.5)" }}
            >
              <div className="absolute -top-3 left-3 text-ink/70">
                <Paperclip className="h-10 w-4" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-[13px] uppercase tracking-widest text-ink-soft">
                    {c.org}
                  </div>
                  <div className="text-base font-bold text-ink">{c.name}</div>
                </div>
                <div className="rounded-sm border border-ink/40 px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                  {c.tag}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Spread 3 - Experience */
function ExperienceLeft() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 03A · Field Op
        </div>
        <Stamp rotate={-6} className="!text-xs">Completed</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        IBM Generative AI · PBEL
      </h2>
      <div className="text-sm text-ink-soft font-typewriter mt-1">
        Jan 2026 — Apr 2026 · Program Intern
      </div>
      <div className="mt-3 mb-4 h-[2px] w-24 bg-ink/60" />

      <ul className="space-y-3 font-typewriter text-[14px] leading-relaxed text-ink">
        <li>
          <span className="text-ink-soft">▸</span> Selected for IBM’s <span className="font-bold">Project-Based Experiential Learning</span> program aligned with the <span className="font-bold">NASSCOM–MeitY</span> initiative.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Built end-to-end applications using <span className="font-bold">Python, PyTorch, TensorFlow, and Hugging Face</span> while leveraging <span className="font-bold">GitHub Copilot</span> for rapid prototyping.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Applied advanced <span className="font-bold">prompt engineering</span> techniques such as zero-shot, few-shot, and chain-of-thought for reliable LLM behavior.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Deployed multimodal LLM systems via cloud APIs and shipped demos through <span className="font-bold">Streamlit</span> and <span className="font-bold">Gradio</span>.
        </li>
      </ul>

      <div className="mt-auto font-marker text-marker text-lg rotate-[-2deg]">
        ✓ debrief filed
      </div>
    </div>
  );
}

function ExperienceRight() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 03B · Prior Op
        </div>
        <Stamp rotate={5} className="!text-xs">Completed</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        Logicbox IT Solutions
      </h2>
      <div className="text-sm text-ink-soft font-typewriter mt-1">
        Apr 2025 — Jun 2025 · AI & Data Science Intern
      </div>
      <div className="mt-3 mb-4 h-[2px] w-24 bg-ink/60" />

      <ul className="space-y-3 font-typewriter text-[14px] leading-relaxed text-ink">
        <li>
          <span className="text-ink-soft">▸</span> Developed and maintained <span className="font-bold">data processing workflows</span> using Python and Excel for cleaning, transformation, and validation across multiple sources.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Performed <span className="font-bold">QA</span> on imported datasets, identifying inconsistencies and strengthening data accuracy for analytics projects.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Used <span className="font-bold">GitHub Copilot</span> to accelerate development, generate boilerplate, and debug scripts efficiently.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Prepared <span className="font-bold">analytical reports</span> and insights to support project decisions and stakeholder communication.
        </li>
      </ul>

      <div className="mt-6 border-t border-dashed border-ink/40 pt-3 font-typewriter text-xs text-ink-soft">
        Reference: Data & Analytics Team · <Redacted>redacted per subject request</Redacted>
      </div>
    </div>
  );
}

/* Spread 4 - Projects */
function ExhibitTag({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative inline-flex items-center gap-2 border-2 border-ink bg-manila-light px-3 py-1.5 font-stencil text-xs uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
    >
      <span className="h-2 w-2 rounded-full border-2 border-current" />
      {label}
    </a>
  );
}

function ProjectsLeft() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          Exhibit A
        </div>
        <Stamp rotate={-5} className="!text-xs">Case Evidence</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">AI Baba</h2>
      <div className="text-sm text-ink-soft font-typewriter mt-1">
        Offline RAG-based spiritual & wellness AI companion
      </div>
      <div className="mt-3 mb-4 h-[2px] w-24 bg-ink/60" />

      <ul className="space-y-2 font-typewriter text-[13.5px] leading-relaxed">
        <li>
          <span className="text-ink-soft">▸</span>{" "}
          <span className="font-bold">ChromaDB + BAAI/bge-small-en-v1.5</span> embeddings with a custom semantic re-ranking approach.
        </li>
        <li>
          <span className="text-ink-soft">▸</span>{" "}
          <span className="font-bold">Qwen2.5-3B-Instruct</span> served locally via{" "}
          <span className="font-bold">llama.cpp</span> for fully offline inference.
        </li>
        <li>
          <span className="text-ink-soft">▸</span>{" "}
          <span className="font-bold">CrewAI</span> scraping agent restricted to verified spiritual domains to prevent hallucinated knowledge entries.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Added multi-language translation, <span className="font-bold">voice cloning</span>, and a mental-health module with crisis keyword detection.
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <ExhibitTag label="Exhibit A · Live Demo" href="https://huggingface.co/spaces/Mayankojhaa/ai-guru-wisdom" />
        <ExhibitTag label="Exhibit A · GitHub" href="https://github.com/mayankcsai2225" />
      </div>

      <div className="mt-auto pt-4 font-marker text-marker text-base rotate-[-3deg]">
        priority evidence
      </div>
    </div>
  );
}

function ProjectsRight() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          Exhibit B
        </div>
        <Stamp rotate={4} className="!text-xs">Case Evidence</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        Sentiment Analysis Web App
      </h2>
      <div className="text-sm text-ink-soft font-typewriter mt-1">
        Hugging Face NLP application for customer feedback analysis
      </div>
      <div className="mt-3 mb-4 h-[2px] w-24 bg-ink/60" />

      <ul className="space-y-2 font-typewriter text-[13.5px] leading-relaxed">
        <li>
          <span className="text-ink-soft">▸</span>{" "}
          <span className="font-bold">Built a full-stack web app</span> for collecting, processing, and analyzing customer feedback at scale.
        </li>
        <li>
          <span className="text-ink-soft">▸</span>{" "}
          <span className="font-bold">Used Hugging Face NLP models</span> and applied structured data cleaning to prepare raw user responses.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Generated summary reports and visualizations to surface sentiment trends for stakeholders.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Leveraged <span className="font-bold">GitHub Copilot</span> throughout the development lifecycle to accelerate coding and refactoring.
        </li>
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <ExhibitTag label="Exhibit B · Live Demo" href="https://huggingface.co/spaces/Mayankojhaa/sentiment-analysis-app" />
        <ExhibitTag label="Exhibit B · GitHub" href="https://github.com/mayankcsai2225" />
      </div>

      <div className="mt-6 rounded-sm border-2 border-dashed border-ink/50 p-3 font-typewriter text-[13px]">
        <span className="font-stencil text-xs uppercase tracking-widest text-ink-soft">
          Additional Exhibits on Record →{" "}
        </span>
        <a
          className="font-bold underline decoration-dotted underline-offset-2 hover:text-stamp"
          href="https://github.com/mayankcsai2225"
          target="_blank"
          rel="noreferrer"
        >
          github.com/mayankcsai2225
        </a>
      </div>
    </div>
  );
}

/* Spread 5 - Skills */
const CORE_SKILLS = [
  "Python",
  "SQL (basics)",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Generative AI",
  "Prompt Engineering",
  "Object-Oriented Programming",
  "Software Development Fundamentals",
];
const TOOLS = [
  "GitHub Copilot",
  "Cursor",
  "ChatGPT / Codex",
  "NotebookLM",
  "Ollama",
  "Git / GitHub",
  "Streamlit",
  "Gradio",
  "Google Colab / Jupyter",
  "Excel / Data Cleaning",
  "Containerized Workflows",
  "Rapid Prototyping",
];

function SkillsLeft() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 05A · Core Capability
        </div>
        <Stamp rotate={-4} className="!text-xs">Confirmed</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        Programming & AI/ML Stack
      </h2>
      <div className="mt-2 mb-6 h-[2px] w-24 bg-ink/60" />

      <ul className="space-y-2 font-typewriter text-[15px]">
        {CORE_SKILLS.map((s) => (
          <li key={s} className="flex items-center gap-3">
            <span className="font-marker text-marker text-xl leading-none">✓</span>
            <span>{s}</span>
            <span className="ml-auto text-[11px] uppercase tracking-widest text-ink-soft">
              Verified
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto font-typewriter text-xs text-ink-soft">
        Toolkit assessed against applied AI builds, data pipelines, and deployment workflows in field ops § 03.
      </div>
    </div>
  );
}

function SkillsRight() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 05B · Toolkit Inventory
        </div>
        <Stamp rotate={5} className="!text-xs">Cleared</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        Tools & Workflow
      </h2>
      <div className="mt-2 mb-6 h-[2px] w-24 bg-ink/60" />

      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-typewriter text-[14.5px]">
        {TOOLS.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center border-2 border-ink/70 text-marker font-marker text-sm">
              ✓
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-sm bg-ink/90 p-3 font-typewriter text-[12px] text-paper/90">
        <span className="opacity-60">// Field note: </span>
        Prefers reproducible, notebook-driven experimentation before hardening into deployable AI services.
      </div>
    </div>
  );
}

/* Spread 6 - Leadership */
function LeadershipLeft() {
  return (
    <div className="flex h-full flex-col p-10 text-ink">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 06 · Leadership
        </div>
        <Stamp rotate={-5} className="!text-xs">Community Op</Stamp>
      </div>
      <h2 className="font-stencil text-2xl uppercase tracking-widest">
        Mawale Welfare Foundation
      </h2>
      <div className="text-sm text-ink-soft font-typewriter mt-1">
        Volunteer & Team Lead · Apr 2023 — Present
      </div>
      <div className="mt-3 mb-4 h-[2px] w-24 bg-ink/60" />

      <ul className="space-y-3 font-typewriter text-[14px] leading-relaxed">
        <li>
          <span className="text-ink-soft">▸</span> Automated <span className="font-bold">donation tracking and reporting workflows</span> using Excel-based tools, improving operational efficiency by <span className="font-bold">60%</span>.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Led a team of volunteers, coordinating outreach campaigns and managing end-to-end operational execution.
        </li>
        <li>
          <span className="text-ink-soft">▸</span> Supported community initiatives through planning, delegation, and delivery oversight across multiple outreach efforts.
        </li>
      </ul>

      <div className="mt-auto font-marker text-marker text-lg rotate-[-2deg]">
        conduct: exemplary
      </div>
    </div>
  );
}

function LeadershipRight() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-10 text-ink">
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="font-stencil text-xs uppercase tracking-[0.3em] text-ink-soft">
          § 06B · Commendation
        </div>
        <Stamp rotate={4} className="!text-xs">Awarded</Stamp>
      </div>

      {/* Medal / ribbon */}
      <div className="relative my-4">
        <svg viewBox="0 0 200 260" className="h-72 w-56">
          {/* Ribbon */}
          <polygon points="60,10 140,10 130,110 100,140 70,110" fill="oklch(0.45 0.16 27)" />
          <polygon points="60,10 100,10 90,110 100,140" fill="oklch(0.55 0.19 27)" />
          <polygon points="140,10 100,10 110,110 100,140" fill="oklch(0.38 0.14 27)" />
          {/* Medal */}
          <circle cx="100" cy="180" r="60" fill="oklch(0.72 0.13 85)" stroke="oklch(0.35 0.08 60)" strokeWidth="3" />
          <circle cx="100" cy="180" r="48" fill="none" stroke="oklch(0.35 0.08 60)" strokeWidth="1.5" strokeDasharray="3 4" />
          <text x="100" y="170" textAnchor="middle" fontFamily="Stardos Stencil, serif" fontSize="14" fontWeight="700" fill="oklch(0.25 0.05 60)">
            EXCELLENCE
          </text>
          <text x="100" y="192" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="9" fill="oklch(0.3 0.05 60)">
            KAUSHAL 7.0
          </text>
          <text x="100" y="208" textAnchor="middle" fontFamily="Courier Prime, monospace" fontSize="8" fill="oklch(0.3 0.05 60)">
            SVVV · 2025
          </text>
        </svg>
      </div>

      <div className="text-center font-typewriter text-[14px] text-ink">
        <div className="font-bold uppercase tracking-widest">
          Certificate of Excellence
        </div>
        <div className="text-ink-soft">Kaushal 7.0 · SVVV · 2025</div>
      </div>
    </div>
  );
}

/* Contact page (single full spread) */
function ContactPage() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-y-auto p-5 text-ink md:p-8">
      <div className="w-full max-w-5xl">
        <div className="mb-6 flex justify-center">
          <Stamp rotate={-4} className="!text-2xl !px-5 !py-2">
            Available for Freelance Work
          </Stamp>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div
            className="rounded-sm border-2 border-ink/70 p-6 font-typewriter md:p-8"
            style={{ boxShadow: "inset 0 0 30px oklch(0.4 0.06 55 / 0.15)" }}
          >
          <div className="mb-6 flex items-center justify-between border-b-2 border-dashed border-ink/40 pb-3">
            <div className="font-stencil text-sm uppercase tracking-[0.3em]">
              Contact Details
            </div>
            <div className="text-xs uppercase tracking-widest text-ink-soft">
              Open for enquiries
            </div>
          </div>

          <div className="space-y-4">
            <ContactRow label="Email">
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-stamp"
                href="mailto:mayankojha2228@gmail.com"
              >
                mayankojha2228@gmail.com
              </a>
            </ContactRow>
            <ContactRow label="Phone">
              <a className="underline decoration-dotted underline-offset-4 hover:text-stamp" href="tel:+918962972784">
                +91 89629 72784
              </a>
            </ContactRow>
            <ContactRow label="LinkedIn">
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-stamp"
                href="https://www.linkedin.com/in/mayankojha2228"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mayankojha2228
              </a>
            </ContactRow>
            <ContactRow label="GitHub">
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-stamp"
                href="https://github.com/mayankcsai2225"
                target="_blank"
                rel="noreferrer"
              >
                github.com/mayankcsai2225
              </a>
            </ContactRow>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:mayankojha2228@gmail.com"
              className="stamp !text-xl !px-6 !py-3 transition-transform hover:scale-[1.03] hover:rotate-[-2deg]"
              style={{ transform: "rotate(-3deg)" }}
            >
              Initiate Contact →
            </a>
          </div>
          </div>

          <section aria-labelledby="business-contact-heading" className="border-2 border-dashed border-ink/50 p-6 font-typewriter md:p-8">
            <h2 id="business-contact-heading" className="mb-5 border-b border-dashed border-ink/40 pb-3 font-stencil text-lg uppercase tracking-widest">
              MAYANK.DEV · Business Contact
            </h2>
            <address className="space-y-4 text-sm not-italic leading-relaxed md:text-[15px]">
              <p><span className="block font-bold uppercase tracking-widest text-ink-soft">Business name</span>MAYANK.DEV</p>
              <p><span className="block font-bold uppercase tracking-widest text-ink-soft">Address</span>3rd floor, shiv shakti nagar, Indore, Madhya Pradesh, 452011</p>
              <p><span className="block font-bold uppercase tracking-widest text-ink-soft">Phone</span><a className="underline decoration-dotted underline-offset-4 hover:text-stamp" href="tel:+918962972784">+91 89629 72784</a></p>
              <p><span className="block font-bold uppercase tracking-widest text-ink-soft">Email</span><a className="break-all underline decoration-dotted underline-offset-4 hover:text-stamp" href="mailto:mayankojha2228@gmail.com">mayankojha2228@gmail.com</a></p>
              <p><span className="block font-bold uppercase tracking-widest text-ink-soft">LinkedIn</span><a className="break-all underline decoration-dotted underline-offset-4 hover:text-stamp" href="https://www.linkedin.com/in/mayankojha2228" target="_blank" rel="noreferrer">linkedin.com/in/mayankojha2228</a></p>
              <p><span className="block font-bold uppercase tracking-widest text-ink-soft">GitHub</span><a className="break-all underline decoration-dotted underline-offset-4 hover:text-stamp" href="https://github.com/mayankcsai2225" target="_blank" rel="noreferrer">github.com/mayankcsai2225</a></p>
            </address>
          </section>
        </div>

        <p className="mt-8 text-center font-typewriter text-sm italic text-ink-soft">
          Portfolio of Mayank Ojha · Available for freelance work.
        </p>
      </div>
    </div>
  );
}

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 border-b border-dotted border-ink/40 pb-2">
      <span className="w-28 shrink-0 font-bold uppercase tracking-widest text-ink-soft text-sm">
        {label}
      </span>
      <span className="text-[15px]">{children}</span>
    </div>
  );
}

/* ---------------------- spread rendering registry ------------------------ */

type SpreadRenderer =
  | { kind: "cover" }
  | { kind: "single"; render: () => ReactNode }
  | { kind: "double"; left: () => ReactNode; right: () => ReactNode };

const SPREAD_CONTENT: Record<string, SpreadRenderer> = {
  cover: { kind: "cover" },
  profile: { kind: "double", left: ProfileLeft, right: ProfileRight },
  business: { kind: "single", render: BusinessPage },
  services: { kind: "single", render: ServicesPage },
  education: { kind: "double", left: EducationLeft, right: EducationRight },
  experience: { kind: "double", left: ExperienceLeft, right: ExperienceRight },
  projects: { kind: "double", left: ProjectsLeft, right: ProjectsRight },
  skills: { kind: "double", left: SkillsLeft, right: SkillsRight },
  leadership: { kind: "double", left: LeadershipLeft, right: LeadershipRight },
  contact: { kind: "single", render: ContactPage },
};

/* --------------------------- Folder shell -------------------------------- */

function FolderTab({ text }: { text: string }) {
  return (
    <div
      className="absolute -top-8 left-16 z-20 rounded-t-md paper-texture px-6 py-2 font-stencil text-[11px] uppercase tracking-[0.3em] text-ink"
      style={{ boxShadow: "0 -4px 10px -6px rgba(0,0,0,0.5)" }}
    >
      {text}
    </div>
  );
}

/* --------------------------- Main component ------------------------------ */

function useIsMobileOrReduced() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const check = () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = window.innerWidth < 900;
      setFlag(reduce || small);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return flag;
}

export default function DossierPortfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const simple = useIsMobileOrReduced();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const spreads = useMemo(() => SPREADS, []);

  useLayoutEffect(() => {
    if (simple) return;
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      spreads.forEach((sp, i) => {
        const section = sectionRefs.current[i];
        if (!section) return;

        const isCover = sp.id === "cover";
        const leftFlap = section.querySelector<HTMLElement>("[data-flap='left']");
        const rightFlap = section.querySelector<HTMLElement>("[data-flap='right']");
        const leftPage = section.querySelector<HTMLElement>("[data-page='left']");
        const rightPage = section.querySelector<HTMLElement>("[data-page='right']");
        const singlePage = section.querySelector<HTMLElement>("[data-page='single']");
        const folder = section.querySelector<HTMLElement>("[data-folder]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (self.isActive) setActiveIdx(i);
            },
            onEnter: () => setActiveIdx(i),
            onEnterBack: () => setActiveIdx(i),
          },
        });

        if (isCover) {
          // Cover: flaps rotate open, folder lifts / fades
          gsap.set(leftFlap, { transformOrigin: "left center", transformPerspective: 1400 });
          gsap.set(rightFlap, { transformOrigin: "right center", transformPerspective: 1400 });
          tl.to(leftFlap, { rotateY: -165, ease: "power2.inOut", duration: 1 }, 0)
            .to(rightFlap, { rotateY: 165, ease: "power2.inOut", duration: 1 }, 0)
            .to(folder, { scale: 0.94, y: -20, ease: "power2.inOut", duration: 1 }, 0)
            .to(section, { opacity: 0, duration: 0.4 }, ">-0.2");
        } else if (leftPage && rightPage) {
          gsap.set([leftPage, rightPage], {
            clipPath: "inset(0 0 100% 0)",
            willChange: "clip-path, transform",
          });
          gsap.set(rightPage, { scale: 0.94, transformOrigin: "center center" });

          tl.fromTo(
            folder,
            { rotateY: -25, opacity: 0.7, transformPerspective: 1600 },
            { rotateY: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
            0,
          )
            .to(leftPage, { clipPath: "inset(0 0 0% 0)", ease: "none", duration: 1.2 }, 0.4)
            .to(rightPage, { scale: 1, ease: "power2.out", duration: 0.5 }, 1.4)
            .to(rightPage, { clipPath: "inset(0 0 0% 0)", ease: "none", duration: 1.2 }, 1.5)
            .to(folder, { rotateY: 45, opacity: 0, ease: "power2.in", duration: 0.6 }, ">+0.1");
        } else if (singlePage) {
          gsap.set(singlePage, {
            clipPath: "inset(0 0 100% 0)",
            willChange: "clip-path, transform",
          });
          tl.fromTo(
            folder,
            { rotateY: -25, opacity: 0.7, transformPerspective: 1600 },
            { rotateY: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
            0,
          ).to(singlePage, { clipPath: "inset(0 0 0% 0)", ease: "none", duration: 1.6 }, 0.5);
        }
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, [simple, spreads]);

  // Keyboard nav
  useEffect(() => {
    const goto = (i: number) => {
      const clamped = Math.max(0, Math.min(spreads.length - 1, i));
      const el = sectionRefs.current[clamped];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top + 1;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goto(activeIdx + 1);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goto(activeIdx - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, spreads.length]);

  const jump = (i: number) => {
    const el = sectionRefs.current[i];
    if (!el) return;
    window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top + 1, behavior: "smooth" });
  };

  return (
    <div ref={rootRef} className="relative bg-desk text-foreground">
      {/* SVG defs (filter for stamp roughness) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="stampRough">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
        </defs>
      </svg>

      {/* Side tab index */}
      <nav
        aria-label="Portfolio sections"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 md:flex"
      >
        {spreads.map((s, i) => {
          const active = i === activeIdx;
          return (
            <button
              key={s.id}
              onClick={() => jump(i)}
              className={`tab-index-btn rounded-l-md border border-manila-dark/60 px-3 py-1.5 text-right font-stencil text-[10px] uppercase tracking-[0.2em] transition ${
                active
                  ? "bg-stamp text-paper shadow-lg -translate-x-2"
                  : "bg-manila/80 text-ink/80 hover:bg-manila-light"
              }`}
              style={{ minWidth: 110 }}
            >
              {String(i).padStart(2, "0")} · {s.tab}
            </button>
          );
        })}
      </nav>

      {/* Top bar */}
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-4 font-typewriter text-[11px] uppercase tracking-[0.3em] text-manila/70">
        <span>Portfolio of Mayank Ojha · MAYANK.DEV</span>
        <span className="hidden md:inline">
          File 2026-AI-001 · {spreads[activeIdx]?.tab ?? "COVER"}
        </span>
      </header>

      {/* Simple stacked layout */}
      {simple ? (
        <div className="mx-auto max-w-2xl space-y-10 px-4 pb-20 pt-24">
          {spreads.map((sp) => {
            const spread = SPREAD_CONTENT[sp.id];
            return (
              <section
                key={sp.id}
                id={sp.id}
                className="animate-fade-in relative min-h-[80vh] overflow-hidden rounded-md paper-texture"
                style={{ boxShadow: "0 20px 50px -20px rgba(0,0,0,0.7)" }}
              >
                <PaperGrain />
                {spread.kind === "cover" && (
                  <div className="relative h-[70vh]">
                    <CoverContent />
                  </div>
                )}
                {spread.kind === "double" && (
                  <>
                    <div className="relative min-h-[60vh] border-b border-ink/20">
                      <Page>{spread.left()}</Page>
                    </div>
                    <div className="relative min-h-[60vh]">
                      <Page>{spread.right()}</Page>
                    </div>
                  </>
                )}
                {spread.kind === "single" && (
                  <div className="relative min-h-[70vh]">
                    <Page>{spread.render()}</Page>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      ) : (
        /* Scroll-jacked pinned layout */
        <div>
          {spreads.map((sp, i) => {
            const spread = SPREAD_CONTENT[sp.id];
            return (
              <section
                key={sp.id}
                ref={(el: HTMLElement | null) => {
                  sectionRefs.current[i] = el as HTMLDivElement | null;
                }}

                className="relative h-screen w-full overflow-hidden"
                style={{ perspective: 1800 }}
              >
                {/* Folder wrapper */}
                <div
                  data-folder
                  className="absolute inset-0 flex items-center justify-center px-6 py-16"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="relative"
                    style={{
                      width: "min(1200px, 92vw)",
                      height: "min(760px, 82vh)",
                    }}
                  >
                    <FolderTab text={sp.tab} />

                    {/* Folder back (manila) */}
                    <div
                      className="absolute inset-0 rounded-md paper-texture torn-bottom"
                      style={{
                        boxShadow:
                          "0 30px 60px -30px rgba(0,0,0,0.75), inset 0 0 80px oklch(0.35 0.08 55 / 0.25)",
                      }}
                    >
                      <PaperGrain />
                      <CornerCrease />
                    </div>

                    {/* Content */}
                    {spread.kind === "cover" && (
                      <>
                        {/* Cover content, sits above folder */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
                          <div className="relative h-full w-full rounded-md paper-texture">
                            <PaperGrain />
                            <CoverContent />
                          </div>
                        </div>
                        {/* Two flaps overlaid, open on scroll */}
                        <div
                          data-flap="left"
                          className="absolute inset-y-2 left-2 z-20 w-1/2 rounded-l-md paper-texture"
                          style={{
                            boxShadow: "8px 0 20px -8px rgba(0,0,0,0.5)",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <PaperGrain />
                          <div className="absolute right-0 top-0 h-full w-[2px] bg-ink/20" />
                        </div>
                        <div
                          data-flap="right"
                          className="absolute inset-y-2 right-2 z-20 w-1/2 rounded-r-md paper-texture"
                          style={{
                            boxShadow: "-8px 0 20px -8px rgba(0,0,0,0.5)",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <PaperGrain />
                        </div>
                      </>
                    )}

                    {spread.kind === "double" && (
                      <div className="absolute inset-0 z-10 grid grid-cols-2 gap-3 p-4">
                        <div data-page="left" className="relative">
                          <Page>{spread.left()}</Page>
                        </div>
                        <div data-page="right" className="relative">
                          <Page>{spread.right()}</Page>
                        </div>
                        {/* Binding shadow */}
                        <div
                          className="pointer-events-none absolute left-1/2 top-4 bottom-4 -translate-x-1/2"
                          style={{
                            width: 24,
                            background:
                              "linear-gradient(to right, transparent, rgba(0,0,0,0.35), transparent)",
                          }}
                        />
                      </div>
                    )}

                    {spread.kind === "single" && (
                      <div className="absolute inset-0 z-10 p-4">
                        <div data-page="single" className="relative h-full w-full">
                          <Page>{spread.render()}</Page>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-manila-dark/30 bg-desk-2 px-6 py-8 text-center font-typewriter text-xs uppercase tracking-[0.3em] text-manila/70">
        <p>© 2026 MAYANK.DEV · Indore, Madhya Pradesh</p>
        <a className="mt-3 inline-block underline decoration-dotted underline-offset-4 hover:text-paper" href="/privacy">Privacy Policy</a>
      </footer>
    </div>
  );
}
