import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

const data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
  github: "https://github.com/trdp30",
  linkedin: "https://linkedin.com/in/trideep-das-817962133",
};

export const GEHealthcareResume = () => {
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
        {/* Header */}
        <header
          className="mb-2 pb-2 border-b-2 border-black"
          itemScope
          itemType="https://schema.org/Person"
        >
          <h1
            className="text-3xl font-bold mb-1 uppercase tracking-tight text-black"
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
          <p className="text-base font-bold mb-1 text-black" itemProp="jobTitle">
            Senior Frontend Developer — React, TypeScript, JavaScript, HTML5 &amp;
            CSS | 8+ Years Building Responsive, Secure, High-Performance Web
            Applications
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
                href={data.github}
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
                href={data.linkedin}
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
          <h2 className="text-xl font-bold mb-1 text-black">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Senior Frontend Developer with 8+ years</strong> developing{" "}
            <strong>responsive, secure, and high-performance web applications</strong>{" "}
            for desktop, tablet, and mobile users. Expert in building{" "}
            <strong>reusable UI components</strong> with <strong>React</strong>,{" "}
            <strong>TypeScript</strong>, <strong>JavaScript (ES6+)</strong>,{" "}
            <strong>HTML5</strong>, and <strong>CSS3</strong>, and in integrating
            applications with <strong>REST APIs</strong>,{" "}
            <strong>WebSocket services</strong>, and{" "}
            <strong>authentication mechanisms</strong>. Strong in{" "}
            <strong>automated testing</strong>, <strong>browser debugging</strong>,{" "}
            <strong>performance analysis</strong>, and problem-solving. Experienced
            across <strong>Git</strong>, <strong>CI/CD</strong>, and{" "}
            <strong>Agile</strong> practices, with a focus on{" "}
            <strong>application security, accessibility, and performance</strong>.
            Currently Staff Frontend Engineer at Talview and founder/architect of a{" "}
            <strong>multi-tenant clinic booking platform</strong>, giving
            hands-on exposure to <strong>secure handling of patient data</strong>{" "}
            and real-time clinical-style workflows. Delivered{" "}
            <strong>40% faster load times</strong>,{" "}
            <strong>85%+ test coverage</strong>, and{" "}
            <strong>70% fewer production bugs</strong>.
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
              <span className="font-semibold">Languages &amp; Markup:</span>{" "}
              TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, Responsive &amp;
              Mobile-First Design
            </p>
            <p>
              <span className="font-semibold">Frameworks &amp; UI:</span> React,
              Next.js, React Native, Redux Toolkit, RTK Query, Redux-Saga, Context
              API, Tailwind CSS, Shadcn/ui, Radix UI, Storybook, Reusable Component
              Libraries (framework-agnostic; comfortable adopting Angular)
            </p>
            <p>
              <span className="font-semibold">APIs, Real-Time &amp; Auth:</span>{" "}
              REST API integration, GraphQL (Apollo Client, Hasura), WebSocket
              services, Real-time Subscriptions, WebRTC, HLS Streaming,
              Authentication &amp; Authorization (OAuth2 / JWT, secure token
              handling)
            </p>
            <p>
              <span className="font-semibold">
                Performance &amp; Accessibility:
              </span>{" "}
              Code Splitting, Lazy Loading, Bundle Optimization, Caching,
              Memoization, Core Web Vitals, WCAG 2.1 Accessibility (a11y)
            </p>
            <p>
              <span className="font-semibold">Testing &amp; Debugging:</span> Jest,
              React Testing Library, Cypress, Vitest; Unit, Component, Integration,
              E2E &amp; Automated UI Testing; Chrome DevTools, Browser / Network /
              Performance Debugging
            </p>
            <p>
              <span className="font-semibold">Build &amp; Tooling:</span> Vite,
              Webpack, Rspack / Rsbuild, Module Federation (Micro-Frontends), Nx
              Monorepo, ESLint, Prettier
            </p>
            <p>
              <span className="font-semibold">
                Git, CI/CD &amp; Cloud-Native:
              </span>{" "}
              Git, GitHub Actions, CI/CD Pipelines, Docker / Containers,
              Cloud-Native Microservices (Cloud Run), Infrastructure as Code,
              DevSecOps, Sentry Observability
            </p>
            <p>
              <span className="font-semibold">
                Security &amp; Secure Engineering:
              </span>{" "}
              XSS / CSRF Mitigation, Content Security Policy, Input Sanitization,
              Identity &amp; Access Management, Secrets Management, Secure Auth
              Flows
            </p>
            <p>
              <span className="font-semibold">
                Healthcare &amp; Domain:
              </span>{" "}
              SDLC, Patient-Data Privacy &amp; PII Protection, Secure Handling of
              Clinical Information, Multi-Tenant Clinic / Booking Platforms;
              awareness of healthcare interoperability standards (DICOM, HL7, FHIR)
            </p>
            <p>
              <span className="font-semibold">
                Additional &amp; Working Exposure:
              </span>{" "}
              WebAssembly (Wasm), Qt / C++ and C# native component interop in web
              applications, Cross-Platform / Mobile Development, AI-assisted
              development (Cursor, Claude Code, Codex)
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1.5 text-black">
            Professional Experience
          </h2>

          {/* Talview */}
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
              <p className="text-base font-semibold text-black mb-1" itemProp="name">
                Talview · Bengaluru, India (Remote, distributed global teams)
              </p>
            </div>
            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Develop <strong>reusable UI components</strong> and application
                features in <strong>React</strong> and{" "}
                <strong>TypeScript</strong> across multiple{" "}
                <strong>SaaS products</strong> serving thousands of concurrent
                users, owning component design through production.
              </li>
              <li>
                Implement <strong>responsive, high-performance user experiences</strong>{" "}
                with <strong>TypeScript</strong>,{" "}
                <strong>JavaScript</strong>, <strong>HTML5</strong>, and{" "}
                <strong>CSS3</strong> for desktop, tablet, and mobile.
              </li>
              <li>
                Integrate applications with <strong>REST APIs</strong>,{" "}
                <strong>WebSocket services</strong> (Hasura subscriptions,
                real-time streams), and <strong>authentication mechanisms</strong>{" "}
                (OAuth2 / JWT, secure token handling).
              </li>
              <li>
                Write <strong>unit, component, and automated UI tests</strong> with{" "}
                <strong>Jest</strong>, <strong>React Testing Library</strong>, and{" "}
                <strong>Cypress</strong>, reaching{" "}
                <strong>85%+ test coverage</strong> and cutting production bugs by{" "}
                <strong>70%</strong> through automated{" "}
                <strong>CI/CD pipelines</strong> (GitHub Actions).
              </li>
              <li>
                <strong>Debug browser, UI, network, and performance issues</strong>{" "}
                using Chrome DevTools profiling, reducing load time by{" "}
                <strong>40%</strong> via <strong>code splitting</strong>,{" "}
                <strong>lazy loading</strong>, bundle optimization, caching, and
                memoization, improving Core Web Vitals.
              </li>
              <li>
                Participate in <strong>design discussions, code reviews, and
                continuous integration</strong>; set coding standards for a team of{" "}
                <strong>7-10 engineers</strong>, driving a{" "}
                <strong>60% improvement in team productivity</strong>.
              </li>
              <li>
                Contribute to <strong>application security, accessibility, and
                performance</strong> — <strong>XSS/CSRF mitigation</strong>,
                Content Security Policy, input sanitization, and{" "}
                <strong>WCAG 2.1 accessibility</strong> across reusable component
                libraries (Storybook, Shadcn/ui, Radix UI).
              </li>
              <li>
                Delivered <strong>real-time</strong> proctoring and monitoring
                experiences with <strong>WebRTC</strong>,{" "}
                <strong>HLS streaming</strong> (video.js), and{" "}
                <strong>WebSocket</strong>, enabling low-latency monitoring of
                thousands of concurrent sessions.
              </li>
              <li>
                Led migration from legacy <strong>Ember.js</strong> to a{" "}
                <strong>React/TypeScript micro-frontend</strong> architecture using{" "}
                <strong>Module Federation</strong> and an{" "}
                <strong>Nx monorepo</strong>, improving development velocity by{" "}
                <strong>35%</strong>.
              </li>
              <li>
                Recognized as <strong>Production Engineering Champion</strong>,{" "}
                <strong>Annual Champion</strong>, and{" "}
                <strong>Engineering Champion</strong>;{" "}
                <strong>5,590 GitHub contributions</strong> in 2024 (highest in the
                organization).
              </li>
            </ul>
          </div>

          {/* LocalityAI / Veerluit */}
          <div
            className="mb-1"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <div className="flex justify-between items-start mb-0.5">
              <h3 className="text-lg font-semibold text-black" itemProp="jobTitle">
                Founder &amp; Architect
              </h3>
              <span className="text-sm text-black font-medium">
                2023 - Present
              </span>
            </div>
            <p className="text-base font-semibold text-black mb-1">
              LocalityAI (Veerluit) · AI-Native Multi-Tenant Platform
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Architected and built a{" "}
                <strong>secure, multi-tenant clinic booking and discovery
                platform</strong> end to end — a{" "}
                <strong>React Native app</strong> and a{" "}
                <strong>React / Module Federation web app</strong> — with{" "}
                <strong>secure handling of patient and clinical data</strong> and
                tenant isolation.
              </li>
              <li>
                Built <strong>10+ cloud-native microservices</strong> (Docker /
                Cloud Run) for <strong>authentication</strong>, payments, and
                commissions, a <strong>Hasura GraphQL</strong> platform on
                PostgreSQL with <strong>PostGIS</strong> geospatial search, and an
                agentic LLM backend with <strong>RAG and PII guardrails</strong>.
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Selected Projects</h2>

          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Proview Live Proctor — Real-Time Monitoring Platform
              </h3>
              <span className="text-xs text-black italic">
                React, TypeScript, WebRTC, WebSocket, HLS / video.js
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Built a <strong>real-time monitoring dashboard</strong> with{" "}
                <strong>WebRTC</strong>, <strong>WebSocket</strong>, and{" "}
                <strong>HLS live streaming</strong>, delivering
                visualization-rich, low-latency views of many concurrent sessions —
                directly transferable to{" "}
                <strong>real-time clinical / patient-monitoring</strong> UIs.
              </li>
            </ul>
          </div>

          <div className="mb-1">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Candidate Workflow Platform — Real-Time, Multi-Tenant
              </h3>
              <span className="text-xs text-black italic">
                React, TypeScript, GraphQL, Hasura Subscriptions (WebSocket), Nx
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Delivered <strong>real-time subscriptions</strong> over{" "}
                <strong>WebSocket</strong>, reusable rich-text components, and
                optimized <strong>code-split</strong> bundles with resilient{" "}
                <strong>REST / GraphQL</strong> integration and Sentry
                observability.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section
          className="relative"
          itemScope
          itemType="https://schema.org/EducationalOccupationalCredential"
        >
          <h2 className="text-xl font-bold mb-1 uppercase text-black">Education</h2>
          <div itemScope itemType="https://schema.org/EducationalOrganization">
            <p className="text-sm text-black">
              <strong itemProp="credentialCategory">
                Master of Computer Applications (MCA) — STEM
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

export default GEHealthcareResume;
