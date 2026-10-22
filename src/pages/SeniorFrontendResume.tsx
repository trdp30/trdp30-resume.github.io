import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

let data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const SeniorFrontendResume = () => {
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
            Senior Frontend Developer | React, TypeScript & Next.js | 7+ Years Building Scalable Web Apps
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
              <span className="text-black">
                {data.location} · Open to US Remote Contract
              </span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Summary</h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Senior Frontend Developer</strong> with <strong>7+ years</strong> building
            <strong> responsive, accessible, high-performance web applications</strong> with
            <strong> React</strong>, <strong>TypeScript</strong>, <strong>JavaScript (ES6+)</strong>, and
            <strong> Next.js</strong>. Currently <strong>Staff Frontend Engineer</strong> at Talview,
            leading a team of <strong>7-10 engineers</strong> across multiple SaaS products. Deep
            experience in <strong>state management</strong> (<strong>Redux Toolkit</strong>,
            <strong> RTK Query</strong>, <strong>Context API</strong>), <strong>REST API</strong> and GraphQL
            integration, <strong>web performance optimization</strong>, <strong>WCAG accessibility</strong>,
            and <strong>unit &amp; integration testing</strong>. Fluent in <strong>Git</strong>,
            <strong> CI/CD</strong>, and <strong>frontend security best practices</strong>. Delivered
            measurable impact: <strong>40% faster load times</strong>, <strong>85%+ test coverage</strong>,
            and <strong>70% fewer production bugs</strong>. Comfortable working remotely across US time
            zones with distributed, cross-functional teams.
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
              <span className="font-semibold">Languages &amp; Core:</span>{" "}
              <span itemProp="itemListElement">
                TypeScript, JavaScript (ES6+), HTML5, CSS3, Responsive &amp; Mobile-First Design
              </span>
            </p>
            <p>
              <span className="font-semibold">Frameworks &amp; Libraries:</span>{" "}
              <span itemProp="itemListElement">
                React, Next.js, React Native, Tailwind CSS, Shadcn/ui, Radix UI, Ember.js (legacy)
              </span>
            </p>
            <p>
              <span className="font-semibold">State Management:</span>{" "}
              <span itemProp="itemListElement">
                Redux Toolkit, RTK Query, Redux-Saga, Context API, React Query, Apollo Client
              </span>
            </p>
            <p>
              <span className="font-semibold">APIs &amp; Data:</span>{" "}
              <span itemProp="itemListElement">
                REST API integration, GraphQL, WebSocket, WebRTC, Real-time Subscriptions
              </span>
            </p>
            <p>
              <span className="font-semibold">Performance &amp; Accessibility:</span>{" "}
              <span itemProp="itemListElement">
                Code Splitting, Lazy Loading, Bundle Optimization, Caching, Core Web Vitals, WCAG 2.1+ (a11y)
              </span>
            </p>
            <p>
              <span className="font-semibold">Testing &amp; Quality:</span>{" "}
              <span itemProp="itemListElement">
                Jest, React Testing Library, Cypress, Unit Testing, Integration Testing, E2E Testing
              </span>
            </p>
            <p>
              <span className="font-semibold">Build &amp; Tooling:</span>{" "}
              <span itemProp="itemListElement">
                Vite, Webpack, Rsbuild, Module Federation, Monorepo (Nx), Storybook, ESLint, Prettier
              </span>
            </p>
            <p>
              <span className="font-semibold">Git, CI/CD &amp; Security:</span>{" "}
              <span itemProp="itemListElement">
                Git, GitHub Actions, CI/CD Pipelines, Docker, Frontend Security (XSS/CSRF mitigation, CSP, secure auth flows)
              </span>
            </p>
            <p>
              <span className="font-semibold">Collaboration &amp; AI Tooling:</span>{" "}
              <span itemProp="itemListElement">
                Agile/Scrum, Cross-functional Delivery, Cursor, Codex, Claude Code
              </span>
            </p>
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
              </span>{" "}
              · Remote collaboration with distributed global teams
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Lead <strong>frontend architecture</strong> across multiple{" "}
                <strong>React/TypeScript SaaS products</strong> serving thousands of
                concurrent users, owning component design, state management, and
                performance from <strong>design through production</strong>.
              </li>
              <li>
                Architected <strong>scalable frontend systems</strong> achieving a{" "}
                <strong>40% reduction in load time</strong> through{" "}
                <strong>code splitting</strong>, <strong>lazy loading</strong>,
                bundle optimization, and <strong>caching strategies</strong>, improving
                Core Web Vitals across key flows.
              </li>
              <li>
                Standardized <strong>application state</strong> using{" "}
                <strong>Redux Toolkit</strong>, <strong>RTK Query</strong>, and the{" "}
                <strong>Context API</strong>, simplifying data flows and{" "}
                <strong>REST / GraphQL API integration</strong> while reducing boilerplate
                and re-render overhead.
              </li>
              <li>
                Led migration from legacy <strong>Ember.js</strong> to a{" "}
                <strong>React/TypeScript</strong> micro-frontend architecture with{" "}
                <strong>Module Federation</strong> and a <strong>monorepo</strong>,
                improving development velocity by <strong>35%</strong> and cutting
                cross-team duplication.
              </li>
              <li>
                Established comprehensive <strong>testing infrastructure</strong> with{" "}
                <strong>Jest</strong>, <strong>React Testing Library</strong>, and{" "}
                <strong>Cypress</strong>, reaching <strong>85%+ test coverage</strong> and
                reducing production bugs by <strong>70%</strong> via automated{" "}
                <strong>CI/CD pipelines</strong> (GitHub Actions).
              </li>
              <li>
                Built accessible, reusable <strong>component libraries</strong> with{" "}
                <strong>Storybook</strong>, <strong>Shadcn/ui</strong>, and{" "}
                <strong>Radix UI</strong>, ensuring <strong>WCAG 2.1+ accessibility</strong>{" "}
                and consistent UI, reducing feature delivery time by <strong>30%</strong>.
              </li>
              <li>
                Delivered real-time <strong>proctoring and monitoring</strong> experiences
                using <strong>WebRTC</strong>, <strong>video.js</strong>,{" "}
                <strong>HLS streaming</strong>, and <strong>WebSocket</strong>, enabling
                low-latency monitoring of thousands of concurrent sessions.
              </li>
              <li>
                Applied <strong>frontend security best practices</strong> — secure token
                handling, <strong>XSS/CSRF mitigation</strong>, Content Security Policy, and
                input sanitization — and designed reliable{" "}
                <strong>direct-to-S3 multipart uploads</strong> with retry logic reaching a{" "}
                <strong>98% success rate</strong>.
              </li>
              <li>
                Lead a team of <strong>7-10 engineers</strong>, setting coding standards and
                running <strong>code reviews</strong>, driving a{" "}
                <strong>60% improvement in team productivity</strong> and{" "}
                <strong>5,590 GitHub contributions</strong> in 2024 (highest in the
                organization).
              </li>
              <li>
                Collaborate cross-functionally with <strong>product managers</strong>,{" "}
                <strong>backend engineers</strong>, <strong>designers</strong>, and{" "}
                <strong>QA</strong> to ship end-to-end features in an{" "}
                <strong>Agile</strong> environment with remote, distributed teammates.
              </li>
              <li>
                Integrated <strong>AI/LLM development tools</strong> (Cursor, Codex, Claude
                Code) into workflows to cut development time by <strong>40%</strong>, while
                retaining full ownership of code quality through manual and agentic{" "}
                <strong>code review</strong>.
              </li>
              <li>
                Recognized as <strong>Production Engineering Champion</strong>,{" "}
                <strong>Annual Champion</strong>, and <strong>Engineering Champion</strong>.
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Selected Projects</h2>

          {/* Appointment Booking Project */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Multi-Tenant Appointment Booking Platform
              </h3>
              <span className="text-xs text-black italic">
                React, TypeScript, Module Federation, REST/GraphQL, Node.js
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Built a <strong>multi-tenant frontend</strong> with{" "}
                <strong>Module Federation</strong> (Rsbuild) and real-time{" "}
                <strong>queue management</strong>, integrating REST and GraphQL APIs with
                tenant-isolated data and high-volume concurrent bookings.
              </li>
              <li>
                Implemented responsive, accessible UI with optimistic updates and resilient
                API error handling for a smooth booking experience across devices.
              </li>
            </ul>
          </div>

          {/* Jatayat Project */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Jatayat — Real-Time Transportation Tracking
              </h3>
              <span className="text-xs text-black italic">
                React Native, TypeScript, GraphQL, Firebase
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Built <strong>cross-platform mobile apps</strong> (iOS/Android) with
                sub-second live location updates, real-time subscriptions, and background
                tracking for vehicle fleets.
              </li>
              <li>
                Delivered high-performance geospatial rendering and offline-tolerant data
                flows with careful state and cache management.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">
            Key Achievements &amp; Recognition
          </h2>
          <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
            <li>
              <strong>5,590 GitHub contributions</strong> in 2024 (highest in the
              organization), reflecting consistent high-impact frontend delivery.
            </li>
            <li>
              Multiple engineering awards:{" "}
              <strong>Production Engineering Champion</strong>,{" "}
              <strong>Annual Champion</strong>, and <strong>Engineering Champion</strong>.
            </li>
            <li>
              Drove a <strong>40% reduction in load time</strong> and{" "}
              <strong>70% fewer production bugs</strong> through performance work and a
              robust automated test suite.
            </li>
            <li>
              Led a legacy-to-modern React/TypeScript migration that improved development
              velocity by <strong>35%</strong>.
            </li>
          </ul>
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

export default SeniorFrontendResume;
