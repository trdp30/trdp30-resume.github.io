import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

let data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const FullStackResume = () => {
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
          <p
            className="text-lg font-bold mb-2 text-black"
            itemProp="jobTitle"
          >
            Full-Stack Developer | Frontend Focused | 7.5+ Years Building Scalable Systems
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

        {/* Professional Summary - Full-Stack Style */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Full-Stack Developer</strong> with <strong>7.5+ years</strong> of experience building 
            <strong> end-to-end web applications</strong> across SaaS and enterprise platforms, with a strong focus on 
            <strong> frontend architecture</strong> and <strong>user experience</strong>. Currently serving as <strong>Staff Frontend Engineer</strong> at Talview, 
            leading a team of <strong>7-10 engineers</strong> and driving full-stack initiatives from design to production deployment. 
            Expert in <strong>React</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, <strong>GraphQL</strong>, <strong>PostgreSQL</strong>, 
            <strong> RESTful APIs</strong>, <strong>Express.js</strong>, and <strong>serverless architectures</strong>. Delivered measurable impact: 
            <strong> 40% performance improvement</strong>, <strong>30% user engagement boost</strong>, and <strong>85%+ test coverage</strong>. 
            Recognized for <strong>technical leadership</strong>, <strong>cross-functional collaboration</strong>, and <strong>mentorship excellence</strong>.
          </p>
        </section>

        {/* Technical Skills - Full-Stack Style */}
        <section
          className="mb-2 pb-2 border-b border-black"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <h2 className="text-xl font-bold mb-1 text-black">
            Technical Skills
          </h2>
          <meta itemProp="name" content="Technical Skills" />
          <div className="text-sm text-black space-y-0.5">
            <p>
              <span className="font-semibold">Frontend Languages & Frameworks:</span>{" "}
              <span itemProp="itemListElement">
                React, React Native, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Ember.js, Backbone.js
              </span>
            </p>
            <p>
              <span className="font-semibold">Backend & Server Technologies:</span>{" "}
              <span itemProp="itemListElement">
                Node.js, Express.js, GraphQL, REST API, Hasura, Hasura DDN, Serverless Functions, Lambda Connectors, Google Cloud Run
              </span>
            </p>
            <p>
              <span className="font-semibold">Databases & Data Management:</span>{" "}
              <span itemProp="itemListElement">
                PostgreSQL, Firebase, Prisma ORM, Database Triggers, Multi-tenant Data Isolation
              </span>
            </p>
            <p>
              <span className="font-semibold">State Management & Architecture:</span>{" "}
              <span itemProp="itemListElement">
                Redux, Redux-Saga, RTK Query, Context API, Micro-Frontend, Module Federation, Monorepo, Component-Based Architecture
              </span>
            </p>
            <p>
              <span className="font-semibold">Performance & Optimization:</span>{" "}
              <span itemProp="itemListElement">
                Code Splitting, Lazy Loading, Webpack, Bundle Optimization, Caching Strategies, Performance Profiling
              </span>
            </p>
            <p>
              <span className="font-semibold">Testing & Quality:</span>{" "}
              <span itemProp="itemListElement">
                Jest, React Testing Library, Cypress, Unit Testing, Integration Testing, E2E Testing
              </span>
            </p>
            <p>
              <span className="font-semibold">Real-time & Communication:</span>{" "}
              <span itemProp="itemListElement">
                WebSocket, WebRTC, Real-time Subscriptions, Apollo Client, Firebase Realtime
              </span>
            </p>
            <p>
              <span className="font-semibold">DevOps & Infrastructure:</span>{" "}
              <span itemProp="itemListElement">
                Docker, CI/CD, GitHub Actions, Git, Nx Monorepo, Microservices Architecture
              </span>
            </p>
            <p>
              <span className="font-semibold">Mobile & Native:</span>{" "}
              <span itemProp="itemListElement">
                React Native, Native Android (Kotlin), Geospatial Calculations, Background Processing
              </span>
            </p>
            <p>
              <span className="font-semibold">AI/LLM Development Tools:</span>{" "}
              <span itemProp="itemListElement">
                Cursor, Codex, Windsurf, Claude Code
              </span>
            </p>
          </div>
        </section>

        {/* Professional Experience - Full-Stack Style */}
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
              <p className="text-base font-semibold text-black mb-1" itemProp="name">
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
                Led <strong>full-stack architecture</strong> and development across multiple{" "}
                <strong>SaaS platforms</strong>, with primary focus on <strong>frontend systems</strong>, ensuring{" "}
                <strong>scalability</strong>, <strong>maintainability</strong>, and <strong>performance</strong> across the entire stack.
              </li>
              <li>
                Architected <strong>scalable frontend systems</strong> serving thousands of concurrent users,{" "}
                achieving <strong>40% reduction in load time</strong> and{" "}
                <strong>60% reduction in server load</strong> through <strong>code splitting</strong>,{" "}
                <strong>lazy loading</strong>, and <strong>caching strategies</strong>.
              </li>
              <li>
                Built <strong>GraphQL backends</strong> using <strong>Hasura DDN</strong> and <strong>Node.js Lambda connectors</strong> 
                for custom business logic, including booking validation, queue calculation, and <strong>multi-tenant data isolation</strong>, 
                with <strong>Express.js authentication services</strong> deployed on <strong>Google Cloud Run</strong>.
              </li>
              <li>
                Designed direct-to-cloud file handling with <strong>direct-to-S3 multipart uploads</strong>,{" "}
                <strong>robust error handling</strong>, and retry mechanisms, improving upload reliability to{" "}
                a <strong>98% success rate</strong> while significantly reducing infrastructure costs.
              </li>
              <li>
                Led migration from legacy <strong>Ember.js</strong> to <strong>React/TypeScript</strong>{" "}
                micro-frontend architecture, establishing <strong>monorepo</strong> and{" "}
                <strong>component-based architecture</strong> patterns that improved development velocity by{" "}
                <strong>35%</strong> and reduced duplication across teams.
              </li>
              <li>
                Established comprehensive <strong>testing infrastructure</strong> using{" "}
                <strong>Jest</strong>, <strong>React Testing Library</strong>, and <strong>Cypress</strong>,{" "}
                achieving <strong>85%+ test coverage</strong> and reducing production bugs by{" "}
                <strong>70%</strong> through automated <strong>CI/CD pipelines</strong>.
              </li>
              <li>
                Designed and implemented <strong>reusable component library</strong> with{" "}
                <strong>Storybook</strong> and <strong>monorepo</strong> architecture, reducing feature delivery{" "}
                time by <strong>30%</strong> and ensuring consistent UI across products.
              </li>
              <li>
                Implemented real-time <strong>proctoring and monitoring</strong> experiences using{" "}
                <strong>WebRTC</strong>, <strong>video.js</strong>, <strong>HLS streaming</strong>, and{" "}
                <strong>WebSocket</strong>, enabling invigilators to monitor thousands of concurrent sessions{" "}
                with low-latency video and activity streams.
              </li>
              <li>
                Built accessible, reusable <strong>rich text editing</strong> and{" "}
                <strong>UI component libraries</strong> with <strong>Blocknote</strong>,{" "}
                <strong>EditorJs</strong>, <strong>Shadcn/ui</strong>, and <strong>Radix UI</strong>, improving{" "}
                content creation workflows and ensuring compliance with <strong>WCAG 2.1+</strong> accessibility standards.
              </li>
              <li>
                Led team of <strong>7-10 engineers</strong>, establishing coding standards and conducting{" "}
                <strong>code reviews</strong>, resulting in <strong>60% improvement in team productivity</strong>{" "}
                and <strong>5,590 GitHub contributions</strong> in 2024 (highest in organization).
              </li>
              <li>
                Collaborated cross-functionally with <strong>product managers</strong>, <strong>backend engineers</strong>,{" "}
                <strong>UX/UI designers</strong>, and <strong>QA teams</strong> to deliver end-to-end features, ensuring{" "}
                alignment between technical implementation and business requirements while maintaining high code quality standards.
              </li>
              <li>
                Integrated <strong>AI/LLM development tools</strong> (<strong>Cursor</strong>, <strong>Codex</strong>) into development workflows, reducing development time by <strong>40%</strong> while maintaining full ownership of code quality through both <strong>manual code review</strong> and <strong>agentic review processes</strong> for AI-generated code, ensuring security, performance, and adherence to engineering standards.
              </li>
              <li>
                Recognized as <strong>Production Engineering Champion</strong>,{" "}
                <strong>Annual Champion</strong>, and <strong>Engineering Champion</strong>.
              </li>
            </ul>
          </div>
        </section>

        {/* Personal Projects - Full-Stack Style */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">
            Personal Projects
          </h2>
          
          {/* Jatayat Project */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Jatayat - Real-Time Transportation Tracking
              </h3>
              <span className="text-xs text-black italic">
                React Native, GraphQL, Firebase, PostgreSQL, Native Android (Kotlin)
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Built <strong>full-stack real-time vehicle tracking platform</strong> with <strong>React Native</strong> mobile apps 
                (iOS/Android), <strong>GraphQL</strong> backend, and <strong>PostgreSQL</strong> database, processing vehicle fleets with sub-second location 
                updates using <strong>native Android geospatial modules</strong> for high-performance calculations
              </li>
              <li>
                Architected <strong>native Android modules (Kotlin)</strong> for <strong>high-performance geospatial calculations </strong> 
                with <strong>parallel batch processing</strong> using thread pool executors, supporting large-scale concurrent 
                users with <strong>background location tracking</strong> and automatic permission management
              </li>
            </ul>
          </div>

          {/* Appointment Booking Project */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">
                Appointment Booking System - Multi-Tenant Clinic Management
              </h3>
              <span className="text-xs text-black italic">
                React, Module Federation, Hasura DDN, PostgreSQL, Node.js, Firebase
              </span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>
                Developed <strong>full-stack multi-tenant appointment booking system</strong> using <strong>Module Federation</strong> 
                (Rsbuild) and <strong>Hasura DDN</strong>, implementing <strong>real-time queue management</strong> with 
                <strong> PostgreSQL triggers</strong> for automatic position calculation and supporting high-volume concurrent bookings
              </li>
              <li>
                Built <strong>GraphQL backend</strong> with <strong>Hasura DDN</strong> and <strong>Node.js Lambda connectors </strong> 
                for custom business logic, including booking validation, queue calculation, and <strong>multi-tenant data isolation</strong>, 
                with <strong>Express.js authentication service</strong> deployed on <strong>Google Cloud Run</strong>
              </li>
            </ul>
          </div>
        </section>

        {/* Key Achievements - Full-Stack Style */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">
            Key Achievements & Recognition
          </h2>
          <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
            <li>
              <strong>5,590 GitHub contributions</strong> in 2024 (highest in organization), demonstrating 
              consistent high-impact technical contributions across frontend and backend systems
            </li>
            <li>
              Multiple Engineering Awards: <strong>Production Engineering Champion</strong>, <strong>Annual Champion</strong>, 
              and <strong>Engineering Champion</strong>
            </li>
            <li>
              Achieved <strong>40% reduction in load time</strong> and <strong>60% reduction in server load</strong> through 
              performance optimization and architecture improvements across full-stack systems
            </li>
            <li>
              Led successful migration of legacy codebase to modern React/TypeScript architecture, improving 
              development velocity by <strong>35%</strong>
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

export default FullStackResume;

