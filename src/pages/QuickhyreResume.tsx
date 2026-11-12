import { useEffect, useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

const data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "+91 9706055724",
  location: "Bengaluru, India",
  github: "github.com/trdp30",
  linkedin: "linkedin.com/in/trideep-das-817962133",
};

// The browser uses document.title as the default filename when the page is
// printed to PDF, so set it to a role-specific filename for this position.
const PDF_FILE_NAME =
  "Senior Full-Stack Software Engineer | React, Node.js, TypeScript, GraphQL | 8 Years";

export const QuickhyreResume = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = PDF_FILE_NAME;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const handleDownloadPDF = async () => {
    setLoading(true);
    await window.print();
    setLoading(false);
  };

  return (
    <div className="relative">
      <DownloadButton handleDownloadPDF={handleDownloadPDF} loading={loading} />
      <div
        ref={contentRef}
        className="container mx-auto p-6 max-w-4xl print:p-0 print:max-w-none bg-white font-sans text-black"
      >
        {/* Header Section */}
        <header
          className="mb-2 pb-2 border-b-2 border-black"
          itemScope
          itemType="https://schema.org/Person"
        >
          <h1
            className="text-3xl font-bold mb-1 uppercase tracking-tight text-black opacity-[0.8] print:opacity-100"
            itemProp="name"
          >
            {data.name.toUpperCase()}
          </h1>
          <meta itemProp="email" content={data.email} />
          <meta itemProp="telephone" content={data.phone} />
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <meta itemProp="addressLocality" content="Bengaluru" />
            <meta itemProp="addressCountry" content="India" />
          </div>
          <p className="text-lg font-bold mb-2 text-black" itemProp="jobTitle">
            Senior Full-Stack Software Engineer | React · Node.js · TypeScript ·
            GraphQL | 8 Years
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-black">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-black">{data.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-black">{data.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-1.002-.014-1.845-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                className="text-black underline hover:no-underline"
                href="https://github.com/trdp30"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <a
                className="text-black underline hover:no-underline"
                href="https://linkedin.com/in/trideep-das-817962133"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-black">{data.location} · Remote</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-lg font-bold mb-1 text-black uppercase">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Senior full-stack software engineer</strong> with{" "}
            <strong>8 years</strong> building production applications{" "}
            <strong>end-to-end</strong> — <strong>React / TypeScript</strong>{" "}
            front ends and <strong>Node.js</strong> (Express, GraphQL, REST)
            back ends over <strong>PostgreSQL</strong>. Comfortable{" "}
            <strong>tracing a request across browsers, APIs, services,
            databases, and integrations</strong>, working effectively in{" "}
            <strong>unfamiliar codebases</strong>, and{" "}
            <strong>diagnosing issues</strong> that span application state, API
            contracts, authentication, persistence, networking, and deployment.
            Work across <strong>multiple languages</strong> (JavaScript/TypeScript,
            plus Kotlin for native modules) and have ported a full build from
            one stack to another. Most relevant here: I built an internal{" "}
            <strong>&ldquo;software factory&rdquo;</strong> — an AI-assisted
            development pipeline with guards and review loops — and routinely{" "}
            <strong>review AI-generated code for correctness, performance,
            security, and maintainability</strong>. Founder who solo-built an
            AI-native SaaS end-to-end (live on Google Play).
          </p>
        </section>

        {/* Technical Skills */}
        <section
          className="mb-2 pb-2 border-b border-black"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <h2 className="text-lg font-bold mb-1 text-black uppercase">
            Technical Skills
          </h2>
          <meta itemProp="name" content="Technical Skills" />
          <div className="text-sm text-black space-y-0.5">
            <p>
              <span className="font-semibold">Languages:</span> JavaScript
              (ES6+), TypeScript, SQL, Kotlin (native modules); comfortable
              reading &amp; evaluating code in other languages
            </p>
            <p>
              <span className="font-semibold">Frontend:</span> React, React
              Native, Redux, Micro Frontend (Module Federation, Nx), Responsive
              UI, HTML5/CSS3
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js (Express,
              Hono, Fastify), GraphQL (Hasura) &amp; REST APIs, Microservices,
              Prisma, Real-Time (graphql-ws)
            </p>
            <p>
              <span className="font-semibold">Systems &amp; Data:</span>{" "}
              PostgreSQL, Firebase, pgvector; application state, data modeling,
              API contracts, auth (JWT/RBAC), persistence, networking,
              deployment; software architecture; unfamiliar codebases
            </p>
            <p>
              <span className="font-semibold">AI &amp; Code Review:</span>{" "}
              Reviewing AI-generated code (correctness, performance, security,
              maintainability); AI-assisted dev pipeline (MCP, RAG, guards,
              review loops); Cursor, Claude Code
            </p>
            <p>
              <span className="font-semibold">Cloud, Testing &amp; Practices:</span>{" "}
              GCP, Docker, Git, GitHub Actions CI/CD, Sentry, OpenTelemetry;
              Jest, React Testing Library, Cypress, Vitest, Maestro; debugging,
              problem-solving, Agile/Scrum
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-lg font-bold mb-1.5 text-black uppercase">
            Professional Experience
          </h2>

          {/* LocalityAI / Veerluit */}
          <div
            className="mb-3"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h3
                className="text-base font-semibold text-black"
                itemProp="jobTitle"
              >
                Founder
              </h3>
              <span className="text-sm text-black font-medium">
                June 2026 - Present
              </span>
            </div>
            <p className="text-sm font-semibold text-black mb-1">
              LocalityAI (Veerluit Pvt Ltd)
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Founded and <strong>solo-built</strong> an AI-native SaaS{" "}
                <strong>end-to-end</strong> — a <strong>React Native</strong>{" "}
                app (on Google Play), a <strong>Module Federation</strong> web
                super-app, and <strong>Node.js / TypeScript</strong> services —
                owning the full stack across front end, back end, data, and
                infrastructure.
              </li>
              <li>
                Designed and <strong>traced data across the whole system</strong>
                : <strong>GraphQL (Hasura)</strong> and{" "}
                <strong>REST</strong> APIs over <strong>PostgreSQL</strong>{" "}
                (Prisma), 10+ microservices, auth (<strong>JWT/RBAC</strong>),
                payments, and real-time — diagnosing issues across state, API
                contracts, persistence, networking, and deployment.
              </li>
              <li>
                Built an internal{" "}
                <strong>&ldquo;software factory&rdquo;</strong> — an AI-assisted
                pipeline with guards and review loops — and{" "}
                <strong>review AI-generated code</strong> for correctness,
                performance, security, and maintainability (plus an MCP + RAG
                agentic layer).
              </li>
            </ul>
          </div>

          {/* Talview */}
          <div
            className="mb-1"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h3
                className="text-base font-semibold text-black"
                itemProp="jobTitle"
              >
                Staff Software Engineer
              </h3>
              <span className="text-sm text-black font-medium">
                June 2018 - May 2026
              </span>
            </div>
            <p className="text-sm font-semibold text-black mb-1">
              Talview — Bengaluru, India (Remote, distributed global teams)
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Built, modified, and <strong>debugged front-end and back-end
                components</strong> across multiple{" "}
                <strong>React / TypeScript</strong> SaaS products and{" "}
                <strong>Node.js</strong> REST/GraphQL APIs, regularly working in
                large, <strong>unfamiliar codebases</strong> (owned the flagship
                product&rsquo;s largest codebase).
              </li>
              <li>
                Led a legacy <strong>Ember.js → React</strong> micro-frontend
                migration — understanding an unfamiliar architecture and{" "}
                <strong>porting a full build from one stack to another</strong>{" "}
                (+35% velocity).
              </li>
              <li>
                Strong <strong>debugging and problem-solving</strong>: drove{" "}
                <strong>40% faster load times</strong>,{" "}
                <strong>85%+ test coverage</strong>, and{" "}
                <strong>70% fewer production bugs</strong>; set{" "}
                <strong>code-review standards</strong> adopted across 3 teams.
              </li>
              <li>
                Led and mentored a fully remote team of{" "}
                <strong>7–10 engineers</strong> for 4+ years, reviewing code and
                evaluating quality across the stack.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section
          className="mb-2 pb-2 border-b border-black"
          itemScope
          itemType="https://schema.org/EducationalOccupationalCredential"
        >
          <h2 className="text-lg font-bold mb-1 uppercase text-black">
            Education
          </h2>
          <div itemScope itemType="https://schema.org/EducationalOrganization">
            <p className="text-sm text-black">
              <strong itemProp="credentialCategory">
                Master of Computer Applications (MCA)
              </strong>
              {" — "}
              <span itemProp="name">
                Sikkim Manipal Institute of Technology (SMIT)
              </span>
              {" | 2015 - 2018"}
            </p>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="relative">
          <h2 className="text-lg font-bold mb-1 text-black uppercase">
            Key Achievements
          </h2>
          <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
            <li>
              Founded and <strong>solo-built</strong> an AI-native SaaS
              end-to-end (React Native + web + Node.js), live on the Google Play
              Store.
            </li>
            <li>
              Built an AI-assisted <strong>&ldquo;software factory&rdquo;</strong>{" "}
              that reviews AI-generated code for quality and collapses the
              developer/reviewer/tester loop.
            </li>
            <li>
              Multiple <strong>Engineering Champion</strong> awards — quarterly
              and annual.
            </li>
            <li>
              Delivered <strong>40% faster load times</strong>,{" "}
              <strong>85%+ test coverage</strong>, and{" "}
              <strong>70% fewer production bugs</strong> across React/Node.js
              products.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default QuickhyreResume;
