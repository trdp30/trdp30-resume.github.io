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
// printed to PDF, so set it to the exact filename requested for this role.
const PDF_FILE_NAME =
  "Sr. Full Stack Developer (React + Node.js + GraphQL) | 8+ Years | Any UST Location | Immediate Joiner | Job from UST";

export const SrFullStackResume = () => {
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
            className="text-3xl font-bold mb-1 uppercase tracking-tight text-black"
            itemProp="name"
          >
            {data.name}
          </h1>
          <p className="text-lg font-bold mb-2 text-black" itemProp="jobTitle">
            Senior Full Stack Developer | React.js · Node.js · GraphQL ·
            TypeScript | 8+ Years
          </p>

          {/* Plain-text contact line — ATS parses text, not icons */}
          <p className="text-sm text-black leading-relaxed">
            <span itemProp="telephone">{data.phone}</span>
            {" | "}
            <span itemProp="email">{data.email}</span>
            {" | "}
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Bengaluru, India</span>
            </span>
            {" | Open to Any UST Location | Immediate Joiner"}
          </p>
          <p className="text-sm text-black leading-relaxed">
            GitHub: {data.github}
            {" | "}
            LinkedIn: {data.linkedin}
          </p>
        </header>

        {/* Professional Summary */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-lg font-bold mb-1 text-black uppercase">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-black">
            Senior Full Stack Developer with <strong>8+ years</strong> of
            software development experience building responsive, reusable, and
            scalable applications across the stack with{" "}
            <strong>React.js</strong>, <strong>TypeScript</strong>,{" "}
            <strong>JavaScript (ES6+)</strong>, <strong>Redux</strong>,{" "}
            <strong>Node.js</strong>, <strong>Express.js/NestJS</strong>, and{" "}
            <strong>GraphQL</strong>. Hands-on experience designing{" "}
            <strong>GraphQL schemas</strong>, queries, mutations, and API
            integration, and developing and consuming <strong>REST APIs</strong>{" "}
            on a <strong>microservices architecture</strong> backed by{" "}
            <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and{" "}
            <strong>MongoDB</strong>. Proficient with <strong>Next.js</strong>,{" "}
            <strong>AWS</strong>, <strong>Docker</strong>,{" "}
            <strong>Kubernetes</strong>, <strong>Git</strong>,{" "}
            <strong>CI/CD pipelines</strong>, and{" "}
            <strong>Agile/Scrum</strong> delivery. Strong debugging, performance
            optimization, and problem-solving skills, with experience leading
            small teams, running code reviews, and building{" "}
            <strong>Micro Frontend</strong> and <strong>AI/GenAI</strong>
            -based applications.
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
              (ES6+), TypeScript, HTML5, CSS3, SQL
            </p>
            <p>
              <span className="font-semibold">Frontend:</span> React.js, Redux
              (Redux Toolkit, RTK Query, Redux-Saga), Next.js, React Native,
              Context API, Responsive &amp; Reusable UI Components, Micro
              Frontend Architecture, Module Federation, Tailwind CSS
            </p>
            <p>
              <span className="font-semibold">Backend:</span> Node.js,
              Express.js, NestJS, Fastify, Hono, GraphQL (Schema Design,
              Queries, Mutations, Subscriptions), REST APIs, Microservices
              Architecture, JSON-RPC
            </p>
            <p>
              <span className="font-semibold">Databases:</span> PostgreSQL,
              MySQL, MongoDB, Firebase, Prisma ORM, Hasura (GraphQL Engine),
              pgvector, PostGIS
            </p>
            <p>
              <span className="font-semibold">Cloud &amp; DevOps:</span> AWS (S3,
              Cloud), Azure (exposure), Google Cloud Run, Docker, Kubernetes
              (K8s), Git, GitHub Actions, CI/CD Pipelines, Nx Monorepo
            </p>
            <p>
              <span className="font-semibold">AI / GenAI:</span> LLM/Agentic
              Applications, Model Context Protocol (MCP), RAG, OpenAI
              Embeddings, Anthropic Claude
            </p>
            <p>
              <span className="font-semibold">Practices:</span> Agile/Scrum,
              Code Reviews, Team Leadership, Debugging, Performance
              Optimization, Unit &amp; Integration Testing (Jest, Vitest, React
              Testing Library)
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-lg font-bold mb-1.5 text-black uppercase">
            Professional Experience
          </h2>

          {/* Talview */}
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
                Staff Full Stack Engineer
              </h3>
              <span className="text-sm text-black font-medium">
                June 2018 - Present
              </span>
            </div>
            <p className="text-sm font-semibold text-black mb-1">
              Talview — Bengaluru, India (Remote, distributed global teams)
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Design and build <strong>scalable, reusable, responsive UI</strong>{" "}
                components across multiple{" "}
                <strong>React.js / TypeScript</strong> SaaS products serving
                thousands of concurrent users, using{" "}
                <strong>Redux Toolkit</strong>, <strong>RTK Query</strong>, and
                the Context API for predictable state management.
              </li>
              <li>
                Develop and consume <strong>REST APIs</strong> and{" "}
                <strong>GraphQL APIs</strong> on a{" "}
                <strong>Node.js / Express.js</strong> backend, owning{" "}
                <strong>GraphQL schema design</strong>, queries, mutations, and
                real-time subscriptions across a{" "}
                <strong>microservices architecture</strong>.
              </li>
              <li>
                Led migration from legacy <strong>Ember.js</strong> to a{" "}
                <strong>React/TypeScript Micro Frontend</strong> architecture
                with <strong>Module Federation</strong> and an{" "}
                <strong>Nx monorepo</strong>, improving development velocity by{" "}
                <strong>35%</strong> and reducing cross-team duplication.
              </li>
              <li>
                Drove a <strong>40% reduction in load time</strong> and{" "}
                <strong>60% lower server load</strong> through code splitting,
                lazy loading, caching strategies, query optimization, and
                strong <strong>debugging and performance tuning</strong>.
              </li>
              <li>
                Established testing and quality infrastructure with{" "}
                <strong>Jest</strong> and <strong>React Testing Library</strong>,
                reaching <strong>85%+ coverage</strong> and reducing production
                bugs by <strong>70%</strong> via automated{" "}
                <strong>CI/CD pipelines</strong> (GitHub Actions).
              </li>
              <li>
                <strong>Lead a team of 7-10 engineers</strong>, setting coding
                standards and running <strong>code reviews</strong>, driving a{" "}
                <strong>60% improvement in team productivity</strong> and{" "}
                <strong>5,590 GitHub contributions</strong> in 2024 (highest in
                the organization).
              </li>
              <li>
                Collaborate cross-functionally with product, backend, design,
                and QA to ship end-to-end features in an{" "}
                <strong>Agile/Scrum</strong> environment, and integrated{" "}
                <strong>AI/GenAI</strong> development tools to cut delivery time
                by <strong>40%</strong>.
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
              <h3
                className="text-base font-semibold text-black"
                itemProp="jobTitle"
              >
                Founder &amp; Full Stack Architect
              </h3>
              <span className="text-sm text-black font-medium">
                2023 - Present
              </span>
            </div>
            <p className="text-sm font-semibold text-black mb-1">
              LocalityAI (Veerluit) — Bengaluru, India
            </p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>
                Architected and built an <strong>AI-native, multi-tenant SaaS</strong>{" "}
                platform end-to-end — a <strong>React Native</strong> app (live
                on Google Play) and a <strong>Module Federation</strong> web
                super-app on the frontend, with{" "}
                <strong>Node.js (Express, Hono, Fastify)</strong> services on the
                backend.
              </li>
              <li>
                Designed a unified <strong>GraphQL</strong> supergraph
                (Hasura DDN, 387 models) over{" "}
                <strong>PostgreSQL</strong>, with{" "}
                <strong>Prisma</strong> data access, strict per-tenant row-level
                isolation, and <strong>REST</strong> plus GraphQL API
                integration for all clients.
              </li>
              <li>
                Operate <strong>10+ containerized microservices</strong>{" "}
                (auth, payments, commissions, feature flags) on{" "}
                <strong>Docker</strong> and Google Cloud Run with{" "}
                <strong>GitHub Actions CI/CD</strong>, Cloud Pub/Sub event flows,
                and observability via Sentry and OpenTelemetry.
              </li>
              <li>
                Built an <strong>AI/GenAI</strong> layer — a Model Context
                Protocol (MCP) tool ecosystem and an agentic LLM chat server
                doing multi-step tool use with streaming responses,{" "}
                <strong>RAG</strong> over pgvector, and per-user data isolation.
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
              Delivered <strong>40% faster load times</strong>,{" "}
              <strong>85%+ test coverage</strong>, and{" "}
              <strong>70% fewer production bugs</strong> across React/Node.js
              SaaS products.
            </li>
            <li>
              Built and operate a 387-model GraphQL supergraph and 10+
              microservices as a solo full-stack architect.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SrFullStackResume;
