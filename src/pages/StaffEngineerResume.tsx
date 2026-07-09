import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

const data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const StaffEngineerResume = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

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
        className="container mx-auto p-6 max-w-4xl print:p-0 print:max-w-none bg-white"
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
          <meta itemProp="telephone" content={`+91-${data.phone}`} />
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <meta itemProp="addressLocality" content="Bengaluru" />
            <meta itemProp="addressCountry" content="India" />
          </div>
          <p className="text-lg font-bold mb-2 text-black" itemProp="jobTitle">
            Staff / Founding Engineer | AI-Native Full-Stack & Platform Architect | 7.5+ Years
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
              <span className="text-black">+91 {data.phone}</span>
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
              <span className="text-black">{data.location}</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Summary</h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Staff-level engineer</strong> with <strong>7.5+ years</strong> architecting and shipping{" "}
            <strong>end-to-end systems</strong> — from <strong>React/TypeScript</strong> frontends and{" "}
            <strong>React Native</strong> apps to <strong>GraphQL/microservice backends</strong> and{" "}
            <strong>AI/LLM platforms</strong>. Currently <strong>Staff Frontend Engineer at Talview</strong>, leading a{" "}
            <strong>7-10 engineer</strong> team, while independently designing and building{" "}
            <strong>LocalityAI</strong>, an AI-native multi-tenant SaaS platform spanning an{" "}
            <strong>MCP tool ecosystem</strong>, an <strong>agentic Claude chat server</strong> with{" "}
            <strong>RAG</strong>, a <strong>Hasura DDN supergraph</strong> (387 models), <strong>10+ containerized services</strong>, and a{" "}
            <strong>React Native</strong> app — all deployed on <strong>Google Cloud Run</strong> over{" "}
            <strong>Neon PostgreSQL</strong>. Deep expertise in{" "}
            <strong>Model Context Protocol (MCP)</strong>, <strong>agentic LLM systems</strong>,{" "}
            <strong>micro-frontends (Module Federation)</strong>, <strong>multi-tenant architecture</strong>, and{" "}
            <strong>geospatial systems</strong>. Owns the full lifecycle: system design, implementation,
            deployment, and observability.
          </p>
        </section>

        {/* Technical Skills */}
        <section
          className="mb-2 pb-2 border-b border-black"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <h2 className="text-xl font-bold mb-1 text-black">Technical Skills</h2>
          <meta itemProp="name" content="Technical Skills" />
          <div className="text-sm text-black space-y-0.5">
            <p>
              <span className="font-semibold">AI / LLM Engineering:</span>{" "}
              <span itemProp="itemListElement">
                Model Context Protocol (MCP), @modelcontextprotocol/sdk, Anthropic Claude (Opus 4.x), agentic tool-use, streaming SSE,
                RAG, OpenAI embeddings + pgvector, semantic caching, episodic memory, prompt versioning, PII guardrails, HITL telemetry
              </span>
            </p>
            <p>
              <span className="font-semibold">Frontend:</span>{" "}
              <span itemProp="itemListElement">
                React 19, React Native (bare RN CLI), TypeScript, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, Redux-Saga, RxJS,
                Apollo Client, React Navigation, Reanimated, Ember.js
              </span>
            </p>
            <p>
              <span className="font-semibold">Backend & APIs:</span>{" "}
              <span itemProp="itemListElement">
                Node.js, Express.js, Fastify, Hono, GraphQL, Hasura DDN, REST API, JSON-RPC, graphql-ws (subscriptions), Prisma ORM
              </span>
            </p>
            <p>
              <span className="font-semibold">Architecture:</span>{" "}
              <span itemProp="itemListElement">
                Micro-Frontend (Module Federation), Nx Monorepo, Microservices, Multi-Tenant Data Isolation, Event-Driven (Pub/Sub),
                System Design, Component-Based Architecture
              </span>
            </p>
            <p>
              <span className="font-semibold">Databases & Data:</span>{" "}
              <span itemProp="itemListElement">
                PostgreSQL (Neon), PostGIS (geospatial), pgvector, Firebase, Database Triggers, Prisma, Zod schema validation
              </span>
            </p>
            <p>
              <span className="font-semibold">Geospatial:</span>{" "}
              <span itemProp="itemListElement">
                PostGIS distance/bounding-box/radius search, progressive-radius expansion, multi-provider geocoding (Nominatim / Google
                Maps / Mapbox) with fallback, react-native-maps, native Android (Kotlin) modules
              </span>
            </p>
            <p>
              <span className="font-semibold">Cloud, DevOps & Observability:</span>{" "}
              <span itemProp="itemListElement">
                Google Cloud Run, Docker, Google Cloud Pub/Sub, CI/CD, GitHub Actions, Nx Cloud, Sentry, OpenTelemetry, Rspack, Rsbuild,
                Vite, Webpack
              </span>
            </p>
            <p>
              <span className="font-semibold">Auth, Payments & Security:</span>{" "}
              <span itemProp="itemListElement">
                Firebase Auth, JWT / Hasura claims, Razorpay, Helmet, rate limiting, HPP, input sanitization, RBAC
              </span>
            </p>
            <p>
              <span className="font-semibold">Testing & Quality:</span>{" "}
              <span itemProp="itemListElement">
                Jest, Vitest, React Testing Library, Cypress, Playwright, Unit / Integration / E2E Testing
              </span>
            </p>
            <p>
              <span className="font-semibold">AI-Assisted Development:</span>{" "}
              <span itemProp="itemListElement">
                Claude Code, Cursor, Codex, Windsurf, agentic code review, spec-based development, Architecture Decision Records (ADR)
              </span>
            </p>
          </div>
        </section>

        {/* Flagship Product */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">
            Flagship Product — LocalityAI (Founder & Architect)
          </h2>
          <p className="text-sm text-black mb-1.5">
            <span className="italic">
              AI-native multi-tenant SaaS platform for local service discovery, booking, and commerce — architected and built
              end-to-end (Nx monorepo, 10+ services, MCP + LLM layer, web + mobile).
            </span>
          </p>

          {/* MCP + LLM */}
          <div className="mb-1.5">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                AI / MCP Layer — Agentic Chat, MCP Tool Ecosystem & LLM Server
              </h3>
              <span className="text-xs text-black italic">
                MCP SDK, Anthropic Claude, RAG, pgvector, Hono, TypeScript
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Designed and built a <strong>Model Context Protocol (MCP) tool ecosystem</strong> — reusable, Zod-validated tool
                libraries (<strong>tenant</strong>: 16 tools inc. 8 geospatial; <strong>clinic</strong>: 13 tools; ecommerce) exposed to
                LLM clients (Claude, ChatGPT, Gemini) with a shared <strong>Prisma</strong> data layer and 240+ tests per library.
              </li>
              <li>
                Built an <strong>MCP host-aggregator server</strong> (<strong>Express</strong> + <strong>StreamableHTTPServerTransport</strong>,
                JSON-RPC 2.0 over HTTP/SSE) that dynamically composes clinic, tenant, and interactive booking-wizard tools into a single
                endpoint — the same server powering the <strong>LocalityAI</strong> tools in Claude.
              </li>
              <li>
                Engineered an <strong>agentic Claude chat server</strong> (<strong>Hono</strong>) with a <strong>47-tool</strong> healthcare
                catalog, multi-step tool-use and <strong>streaming SSE</strong> responses, per-user data isolation via{" "}
                <strong>Firebase JWT</strong> → Hasura GraphQL.
              </li>
              <li>
                Implemented a production LLM stack: <strong>RAG</strong> with <strong>OpenAI embeddings</strong> over{" "}
                <strong>pgvector</strong>, <strong>semantic caching</strong>, <strong>episodic memory</strong>,{" "}
                <strong>prompt versioning</strong>, <strong>PII guardrails</strong>, budget/cost control, and{" "}
                <strong>human-in-the-loop (HITL)</strong> telemetry.
              </li>
            </ul>
          </div>

          {/* Backend platform */}
          <div className="mb-1.5">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Backend Platform — Hasura DDN Supergraph & Microservices
              </h3>
              <span className="text-xs text-black italic">
                Hasura DDN, Neon PostgreSQL, PostGIS, Express, Fastify, Firebase, Cloud Run
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Architected a unified <strong>Hasura DDN supergraph</strong> (<strong>387 metadata models</strong>) over{" "}
                <strong>Neon PostgreSQL</strong> spanning clinic/booking, multi-tenant, ecommerce, commission, and AI-chat domains, with{" "}
                <strong>OpenTelemetry</strong> tracing and a native scheduling connector.
              </li>
              <li>
                Built a <strong>universal multi-tenant model</strong> with a <strong>46-type taxonomy</strong> (9 roots + 37 subtypes:
                clinics, ecommerce, car care, rentals, parlors, dairy) and strict per-tenant data isolation.
              </li>
              <li>
                Designed a <strong>geospatial discovery engine</strong> — <strong>PostGIS</strong> radius / bounding-box /
                progressive-radius (5→7→10→20 km) search with multi-provider <strong>geocoding fallback</strong> (Nominatim / Google /
                Mapbox) and rate limiting.
              </li>
              <li>
                Shipped <strong>10+ containerized microservices</strong> on <strong>Google Cloud Run</strong>: a{" "}
                <strong>Firebase auth service</strong> + Hasura auth webhook, a <strong>Razorpay payment service</strong> (Fastify), a{" "}
                <strong>commission/payout engine</strong> (tiered calc, tax deductions, approval workflow), and a{" "}
                <strong>feature-flag/quota service</strong> (Pub/Sub eventing, Hasura pre-insert validation).
              </li>
            </ul>
          </div>

          {/* Clients */}
          <div>
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Clients — React Native App & Module Federation Web Super-App
              </h3>
              <span className="text-xs text-black italic">
                React Native 0.84, React 19, Module Federation, Rsbuild, Apollo, Firebase
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Built the <strong>LocalityAI React Native app</strong> (bare RN CLI, React 19) for clinic discovery, booking, and{" "}
                <strong>embedded AI chat</strong> — <strong>real-time GraphQL subscriptions</strong> (graphql-ws),{" "}
                <strong>native maps/geolocation</strong>, Firebase + Google auth, Reanimated animations, and data-viz charts.
              </li>
              <li>
                Architected a <strong>micro-frontend web super-app</strong> — a host shell federating domain remotes (ecommerce, car
                care, payment, rental hub) via <strong>Module Federation</strong> on <strong>Rsbuild</strong>, matching the platform's
                multi-vertical tenant taxonomy.
              </li>
              <li>
                Managed the entire platform in an <strong>Nx monorepo</strong> (Nx Cloud remote caching, pnpm workspaces) with shared
                libraries for Apollo, auth, database, Firebase, and MCP tooling across web, mobile, and backend.
              </li>
            </ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1.5 text-black">
            Professional Experience
          </h2>

          <div
            className="mb-2"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h3
                className="text-lg font-semibold text-black"
                itemProp="jobTitle"
              >
                Staff Frontend Engineer
              </h3>
              <span className="text-sm text-black font-medium">
                June 2018 - Present
              </span>
            </div>
            <div
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <p
                className="text-base font-semibold text-black mb-1"
                itemProp="name"
              >
                Talview
              </p>
              <meta itemProp="name" content="Talview" />
            </div>
            <p className="text-sm italic mb-1.5 text-black">
              <span
                itemProp="jobLocation"
                itemScope
                itemType="https://schema.org/Place"
              >
                <span
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="addressLocality">Bengaluru</span>,{" "}
                  <span itemProp="addressCountry">India</span>
                </span>
              </span>
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Led <strong>full-stack architecture</strong> across multiple <strong>SaaS platforms</strong> with a primary focus on{" "}
                <strong>frontend systems</strong>, owning <strong>scalability</strong>, <strong>maintainability</strong>, and{" "}
                <strong>performance</strong> end-to-end.
              </li>
              <li>
                Architected <strong>scalable frontend systems</strong> serving thousands of concurrent users, achieving a{" "}
                <strong>40% reduction in load time</strong> and <strong>60% reduction in server load</strong> via{" "}
                <strong>code splitting</strong>, <strong>lazy loading</strong>, and <strong>caching strategies</strong>.
              </li>
              <li>
                Led migration from legacy <strong>Ember.js</strong> to a <strong>React/TypeScript micro-frontend</strong> architecture,
                establishing <strong>monorepo</strong> and <strong>component-based</strong> patterns that improved development velocity by{" "}
                <strong>35%</strong>.
              </li>
              <li>
                Implemented real-time <strong>proctoring and monitoring</strong> using <strong>WebRTC</strong>, <strong>HLS streaming</strong>,
                and <strong>WebSocket</strong>, enabling invigilators to monitor thousands of concurrent low-latency sessions.
              </li>
              <li>
                Designed direct-to-cloud file handling with <strong>direct-to-S3 multipart uploads</strong> and retry mechanisms,
                improving upload reliability to a <strong>98% success rate</strong> while reducing infrastructure costs.
              </li>
              <li>
                Established <strong>testing infrastructure</strong> (<strong>Jest</strong>, <strong>React Testing Library</strong>,{" "}
                <strong>Cypress</strong>) reaching <strong>85%+ coverage</strong> and reducing production bugs by <strong>70%</strong> via
                automated <strong>CI/CD pipelines</strong>.
              </li>
              <li>
                Integrated <strong>AI/LLM development tools</strong> (<strong>Cursor</strong>, <strong>Codex</strong>,{" "}
                <strong>Claude Code</strong>) into team workflows, cutting development time by <strong>40%</strong> while maintaining code
                quality through both <strong>manual</strong> and <strong>agentic code review</strong>.
              </li>
              <li>
                Led a team of <strong>7-10 engineers</strong>, establishing coding standards and conducting <strong>code reviews</strong>;
                logged <strong>5,590 GitHub contributions</strong> in 2024 (highest in the organization).
              </li>
              <li>
                Recognized as <strong>Production Engineering Champion</strong>, <strong>Annual Champion</strong>, and{" "}
                <strong>Engineering Champion</strong>.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">
            Key Achievements & Recognition
          </h2>
          <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
            <li>
              Independently architected and shipped <strong>LocalityAI</strong> — an AI-native, multi-tenant platform with an{" "}
              <strong>MCP tool ecosystem</strong>, <strong>agentic LLM server</strong>, <strong>Hasura DDN supergraph</strong> (387
              models), and <strong>10+ microservices</strong> — solo, end-to-end.
            </li>
            <li>
              <strong>5,590 GitHub contributions</strong> in 2024 (highest in organization), demonstrating consistent high-impact
              contributions across frontend, backend, and AI systems.
            </li>
            <li>
              Multiple engineering awards: <strong>Production Engineering Champion</strong>, <strong>Annual Champion</strong>, and{" "}
              <strong>Engineering Champion</strong>.
            </li>
            <li>
              Delivered a <strong>40% reduction in load time</strong> and <strong>60% reduction in server load</strong> through
              performance and architecture improvements across full-stack systems.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section
          className="relative"
          itemScope
          itemType="https://schema.org/EducationalOccupationalCredential"
        >
          <h2 className="text-xl font-bold mb-1 uppercase text-black">
            Education
          </h2>
          <div itemScope itemType="https://schema.org/EducationalOrganization">
            <p className="text-sm text-black">
              <strong itemProp="credentialCategory">
                Master of Computer Applications (MCA)
              </strong>
              <br />
              <span itemProp="name">
                Sikkim Manipal Institute of Technology (SMIT)
              </span>{" "}
              |{" "}
              <span itemProp="dateCreated" content="2015">
                2015
              </span>{" "}
              -{" "}
              <span itemProp="dateModified" content="2018">
                2018
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StaffEngineerResume;
