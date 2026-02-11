import { ReactElement, useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

let data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const LightResume = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  // Helper function to bold technology names
  const boldTechnologies = (text: string, technologies: string[]) => {
    if (!text) return text;

    const allTerms = [...(technologies || [])];

    if (allTerms.length === 0) return text;

    const sortedTerms = [...allTerms].sort((a, b) => b.length - a.length);

    const pattern = new RegExp(
      `\\b(${sortedTerms
        .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})\\b`,
      "gi"
    );

    const parts: (string | ReactElement)[] = [];
    let lastIndex = 0;
    let match;

    pattern.lastIndex = 0;
    const matches: Array<{ index: number; length: number; text: string }> = [];

    while ((match = pattern.exec(text)) !== null) {
      matches.push({
        index: match.index,
        length: match[0].length,
        text: match[0],
      });
    }

    matches.forEach((match, idx) => {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(<strong key={`term-${idx}`}>{match.text}</strong>);
      lastIndex = match.index + match.length;
    });

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

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
          className="mb-1.5 pb-1 border-b border-black"
          itemScope
          itemType="https://schema.org/Person"
        >
          <h1
            className="text-3xl font-bold mb-0.5 uppercase tracking-tight text-black opacity-[0.8] print:opacity-100"
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
            className="text-lg font-bold mb-1.5 text-black"
            itemProp="jobTitle"
          >
            Staff Frontend Engineer | React & TypeScript Expert | 7.5+ Years Experience
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

        {/* Professional Summary - Lighter Version */}
        <section className="mb-1.5 pb-1.5 border-b relative">
          <h2 className="text-xl font-bold mb-1 text-black">
            Professional Summary
          </h2>
          <p className="text-sm leading-tight text-black">
            <strong>Staff Frontend Engineer</strong> with <strong>7.5+ years</strong> of experience 
            architecting and building <strong>scalable web applications</strong> using <strong>React</strong>, 
            <strong>TypeScript</strong>, and modern frontend technologies. Expert in <strong>system design</strong>, 
            <strong>performance optimization</strong>, and leading engineering teams. Proven track record of 
            delivering high-quality solutions and driving technical excellence.
          </p>
        </section>

        {/* Core Competencies - Lighter Version */}
        <section
          className="mb-1.5 pb-1.5 relative border-b"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          <h2 className="text-xl font-bold mb-1 text-black">
            Core Competencies
          </h2>
          <meta itemProp="name" content="Core Competencies" />
          <ul className="text-sm space-y-0.5 text-black">
            <li className="flex items-start">
              <div>
                <span className="font-semibold">Frontend Technologies:</span>
                <span className="mx-2">|</span>
                <span itemProp="itemListElement">
                  React, React Native, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <span className="font-semibold">State Management & Architecture:</span>
                <span className="mx-2">|</span>
                <span itemProp="itemListElement">
                  Redux, RTK Query, Context API, Micro-Frontend, Module Federation, Monorepo
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <span className="font-semibold">Backend & APIs:</span>
                <span className="mx-2">|</span>
                <span itemProp="itemListElement">
                  GraphQL, REST API, Hasura, Hasura DDN, Node.js, PostgreSQL, Firebase
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <span className="font-semibold">Build Tools & DevOps:</span>
                <span className="mx-2">|</span>
                <span itemProp="itemListElement">
                  Webpack, Docker, CI/CD, GitHub Actions, Git
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <span className="font-semibold">Testing & Quality:</span>
                <span className="mx-2">|</span>
                <span itemProp="itemListElement">
                  Jest, React Testing Library, Cypress
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <span className="font-semibold">Mobile Development:</span>
                <span className="mx-2">|</span>
                <span itemProp="itemListElement">
                  React Native, Native Android (Kotlin)
                </span>
              </div>
            </li>
          </ul>
        </section>

        {/* Professional Experience - Streamlined */}
        <section className="mb-1.5 pb-1.5 border-b">
          <h2 className="text-xl font-bold mb-1 text-black">
            Professional Experience
          </h2>

          <div
            className="mb-1.5"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <h3
              className="text-lg font-semibold text-black"
              itemProp="jobTitle"
            >
              Staff Frontend Engineer
            </h3>
            <div
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <meta itemProp="name" content="Talview" />
            </div>
            <p className="text-sm italic mb-1 text-black">
              <span itemProp="worksFor">Talview</span> |{" "}
              <span itemProp="startDate" content="2018-06">
                June 2018
              </span>{" "}
              - <span itemProp="endDate">Present</span> |
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
                  <span itemProp="addressLocality">Bengaluru</span>,
                  <span itemProp="addressCountry">India</span>
                </span>
              </span>
            </p>

            <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
              <li>
                Led <strong>frontend architecture</strong> and development across multiple{" "}
                <strong>SaaS platforms</strong>, ensuring <strong>scalability</strong>,{" "}
                <strong>maintainability</strong>, and <strong>performance</strong>.
              </li>
              <li>
                Architected <strong>scalable frontend systems</strong> serving thousands of concurrent users,{" "}
                achieving <strong>40% reduction in load time</strong> and{" "}
                <strong>60% reduction in server load</strong> through <strong>code splitting</strong>,{" "}
                <strong>lazy loading</strong>, and <strong>caching strategies</strong>.
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
                and <strong>5,590 GitHub contributions</strong> in 2023 (highest in organization).
              </li>
              <li>
                Recognized as <strong>Production Engineering Champion</strong>,{" "}
                <strong>Annual Champion</strong>, and <strong>Engineering Champion</strong> for sustained{" "}
                technical impact and leadership.
              </li>
            </ul>
          </div>
        </section>

        {/* Personal Projects */}
        <section className="mb-1.5 pb-1.5 border-b">
          <h2 className="text-xl font-bold mb-1 text-black">
            Personal Projects
          </h2>

          {/* Jatayat Project */}
          <div className="mb-1.5">
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
                Built <strong>real-time vehicle tracking platform</strong> with <strong>React Native</strong> 
                mobile apps (iOS/Android) and <strong>GraphQL</strong> backend, processing vehicle fleets 
                with sub-second location updates using <strong>native Android geospatial modules</strong> for 
                high-performance calculations.
              </li>
              <li>
                Architected <strong>native Android modules (Kotlin)</strong> for 
                <strong>high-performance geospatial calculations</strong> with 
                <strong>parallel batch processing</strong> using thread pool executors, supporting 
                large-scale concurrent users with <strong>background location tracking</strong> and 
                automatic permission management.
              </li>
            </ul>
          </div>

          {/* Appointment Booking Project */}
          <div className="mb-1.5">
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
                Developed <strong>multi-tenant appointment booking system</strong> using 
                <strong>Module Federation</strong> (Rsbuild) and <strong>Hasura DDN</strong>, implementing 
                <strong>real-time queue management</strong> with <strong>PostgreSQL triggers</strong> for 
                automatic position calculation and supporting high-volume concurrent bookings.
              </li>
              <li>
                Built <strong>GraphQL backend</strong> with <strong>Hasura DDN</strong> and 
                <strong>Node.js Lambda connectors</strong> for custom business logic, including booking 
                validation, queue calculation, and <strong>multi-tenant data isolation</strong>, with 
                <strong>Express.js authentication service</strong> deployed on <strong>Google Cloud Run</strong>.
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

export default LightResume;

