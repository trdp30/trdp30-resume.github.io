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
  "Frontend Engineering Lead | React, TypeScript | 8 Years | Interos.ai";

export const InterosFrontendResume = () => {
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
            Frontend Engineering Lead | React · TypeScript · Frontend
            Architecture &amp; Team Leadership | 8 Years
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
              <span className="text-black">{data.location}</span>
            </div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-lg font-bold mb-1 text-black uppercase">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Frontend engineering lead</strong> with{" "}
            <strong>8 years</strong> building and architecting production web
            applications in <strong>React</strong> and{" "}
            <strong>TypeScript</strong>, including the last{" "}
            <strong>3-4 years leading a team of 7-10 engineers</strong>. Owns
            frontend <strong>technical vision and architecture</strong> —{" "}
            <strong>component design</strong>, <strong>state management</strong>,
            and <strong>application performance</strong> — keeping React /
            TypeScript codebases scalable across a complex product surface. Sets{" "}
            <strong>engineering standards</strong>,{" "}
            <strong>code review practices</strong>, and{" "}
            <strong>testing strategy</strong> (Jest, React Testing Library,
            Cypress), and champions <strong>accessibility</strong> and{" "}
            <strong>responsive design</strong>. Builds and scales{" "}
            <strong>SaaS products</strong> end-to-end, monitors performance and
            reliability with observability tooling (Sentry, OpenTelemetry) and{" "}
            <strong>CI/CD</strong>, and partners with <strong>Product</strong>,{" "}
            <strong>Design</strong>, and <strong>Backend Engineering</strong> to
            turn roadmap priorities into predictable delivery — building a
            culture of <strong>ownership and mentorship</strong>.
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
              <span className="font-semibold">Frontend &amp; Architecture:</span>{" "}
              React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Redux, Frontend
              Architecture, Component Design, State Management, Micro Frontend,
              Module Federation, Design Systems, Reusable Components
            </p>
            <p>
              <span className="font-semibold">Performance &amp; Quality:</span>{" "}
              Application Performance, Core Web Vitals, Responsive Design,
              Cross-Browser Compatibility, Accessibility (WCAG)
            </p>
            <p>
              <span className="font-semibold">Standards &amp; Testing:</span>{" "}
              Engineering Standards, Code Review Practices, Testing Strategy
              (Jest, React Testing Library, Cypress), CI/CD
            </p>
            <p>
              <span className="font-semibold">
                Observability &amp; Platform:
              </span>{" "}
              Sentry, OpenTelemetry, Google Cloud Platform (GCP), Docker, Git,
              GitHub Actions
            </p>
            <p>
              <span className="font-semibold">APIs &amp; Backend:</span> REST
              &amp; GraphQL APIs, Node.js, Microservices
            </p>
            <p>
              <span className="font-semibold">Leadership:</span> Technical
              Leadership, Team Leadership (7-10 engineers), Mentorship, Agile
              (Sprint Planning, Retrospectives), Cross-Functional Collaboration
              (Product, Design, Backend)
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
                2026 - Present
              </span>
            </div>
            <p className="text-sm font-semibold text-black mb-1">
              LocalityAI (Veerluit Pvt Ltd) — Bengaluru, India
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Own the <strong>technical vision and architecture</strong> of an
                AI-native, multi-tenant SaaS end-to-end — a{" "}
                <strong>React Native</strong> app and a{" "}
                <strong>Module Federation</strong> web super-app over a{" "}
                <strong>Node.js</strong> backend — keeping the React /
                TypeScript codebase scalable as the product grows.
              </li>
              <li>
                Drive architectural decisions on <strong>component design</strong>
                , <strong>state management</strong>, and{" "}
                <strong>application performance</strong>.
              </li>
              <li>
                Establish <strong>engineering standards</strong>,{" "}
                <strong>code review practices</strong>, and automated{" "}
                <strong>testing</strong>; monitor reliability with observability
                (Sentry, OpenTelemetry) and <strong>CI/CD</strong>.
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
                Staff Engineer – Front-End (Team Lead)
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
                Owned frontend <strong>technical direction and architecture</strong>{" "}
                across multiple <strong>React / TypeScript</strong> SaaS
                products, keeping a complex product surface scalable; led the{" "}
                <strong>Ember.js → React Micro Frontend</strong> migration
                (Module Federation, Nx monorepo), <strong>+35% velocity</strong>.
              </li>
              <li>
                <strong>Led and developed a team of 7-10 frontend engineers</strong>{" "}
                over 3-4 years — setting the bar for code quality, running{" "}
                <strong>code reviews</strong>, and mentoring — driving a{" "}
                <strong>60% improvement in team productivity</strong>.
              </li>
              <li>
                Established <strong>engineering standards</strong> and{" "}
                <strong>testing strategy</strong> (Jest, React Testing Library,
                Cypress), reaching <strong>85%+ coverage</strong> and{" "}
                <strong>70% fewer production bugs</strong> via{" "}
                <strong>CI/CD</strong>.
              </li>
              <li>
                Championed <strong>accessibility (WCAG)</strong> and{" "}
                <strong>responsive design</strong>, and improved{" "}
                <strong>application performance</strong> — a{" "}
                <strong>40% reduction in load time</strong> (Core Web Vitals).
              </li>
              <li>
                Partnered with <strong>Product</strong>, <strong>Design</strong>,
                and <strong>Backend Engineering</strong> to translate roadmap
                priorities into predictable delivery in an{" "}
                <strong>Agile</strong> environment.
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
              <strong>5,590 GitHub contributions</strong> in 2024 — highest in
              the organization.
            </li>
            <li>
              Multiple engineering awards: Production Engineering Champion,
              Annual Champion, and Engineering Champion.
            </li>
            <li>
              Led and developed a team of <strong>7-10 engineers</strong>,
              driving a <strong>60% improvement in team productivity</strong>.
            </li>
            <li>
              Delivered <strong>40% faster load times</strong>,{" "}
              <strong>85%+ test coverage</strong>, and{" "}
              <strong>70% fewer production bugs</strong> through architecture,
              standards, and testing.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default InterosFrontendResume;
