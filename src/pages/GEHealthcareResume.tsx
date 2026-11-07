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
          {/* Plain-text contact line for reliable ATS parsing */}
          <p className="text-sm text-black">
            Email: {data.email} · Phone: +91 {data.phone} · Location:{" "}
            {data.location} · GitHub:{" "}
            <a
              className="text-black underline hover:no-underline"
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/trdp30
            </a>{" "}
            · LinkedIn:{" "}
            <a
              className="text-black underline hover:no-underline"
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/trideep-das
            </a>
          </p>
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
