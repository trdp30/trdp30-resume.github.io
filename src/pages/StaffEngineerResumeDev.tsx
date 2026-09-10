import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

const data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const StaffEngineerResumeDev = () => {
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
        className="container mx-auto px-8 py-10 max-w-3xl print:p-0 print:max-w-none bg-white text-gray-900"
      >
        {/* Header */}
        <header className="mb-6" itemScope itemType="https://schema.org/Person">
          <h1
            className="text-4xl font-light tracking-tight mb-1"
            itemProp="name"
          >
            {data.name}
          </h1>
          <meta itemProp="email" content={data.email} />
          <meta itemProp="telephone" content={`+91-${data.phone}`} />
          <p className="text-base text-gray-600 mb-3" itemProp="jobTitle">
            Software Engineer — Hands-On Full-Stack &amp; AI-Based Application Development
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-gray-500">
            <span>{data.location}</span>
            <span aria-hidden>·</span>
            <a
              className="hover:text-gray-900 underline-offset-2 hover:underline"
              href={`mailto:${data.email}`}
            >
              {data.email}
            </a>
            <span aria-hidden>·</span>
            <a
              className="hover:text-gray-900 underline-offset-2 hover:underline"
              href={`tel:+91${data.phone}`}
            >
              +91 {data.phone}
            </a>
            <span aria-hidden>·</span>
            <a
              className="hover:text-gray-900 underline-offset-2 hover:underline"
              href="https://github.com/trdp30"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a
              className="hover:text-gray-900 underline-offset-2 hover:underline"
              href="https://linkedin.com/in/trideep-das-817962133"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <span>MCA · SMIT '18</span>
          </div>
        </header>

        <div className="h-px bg-gray-200 mb-6" />

        {/* Summary */}
        <section className="mb-7">
          <p className="text-[15px] leading-relaxed text-gray-700">
            Engineer with <strong className="text-gray-900">8 years</strong>{" "}
            shipping complete systems end to end — frontend, mobile, backend, and
            AI. Staff Frontend Engineer at Talview and founder &amp; architect of{" "}
            <strong className="text-gray-900">LocalityAI</strong> (Veerluit),
            hands-on across the stack from React UIs and React Native to MCP
            servers, agentic LLM backends, and GraphQL platforms.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mb-7">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Core Skills
          </h2>
          <div className="text-sm text-gray-700 space-y-1.5">
            <p>
              <span className="text-gray-400">Frontend</span>&nbsp;&nbsp;React ·
              React Native · TypeScript · Redux Toolkit · Redux-Saga · RxDB ·
              Apollo Client · Tailwind
            </p>
            <p>
              <span className="text-gray-400">Backend</span>&nbsp;&nbsp;Node ·
              Express · Fastify · Hono · GraphQL · Hasura · Prisma · PostgreSQL ·
              Firebase
            </p>
            <p>
              <span className="text-gray-400">AI / LLM</span>&nbsp;&nbsp;MCP
              (Model Context Protocol) · agentic tool-use · RAG · pgvector ·
              streaming SSE · guardrails
            </p>
            <p>
              <span className="text-gray-400">Platform</span>
              &nbsp;&nbsp;Micro-frontends (Module Federation) · Nx monorepo ·
              microservices · multi-tenant · geospatial · Cloud Run · Docker
            </p>
            <p>
              <span className="text-gray-400">Testing</span>&nbsp;&nbsp;Jest ·
              React Testing Library · Cypress · Vitest
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-7">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Experience
          </h2>

          {/* LocalityAI */}
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-lg font-semibold text-gray-900">
              <a
                className="underline-offset-2 hover:underline"
                href="https://play.google.com/store/apps/details?id=com.localityai"
                target="_blank"
                rel="noopener noreferrer"
              >
                LocalityAI
              </a>{" "}
              <span className="font-normal">· Veerluit</span>
              <a
                className="ml-2 text-xs font-normal text-gray-500 underline-offset-2 hover:text-gray-900 hover:underline"
                href="https://play.google.com/store/apps/details?id=com.localityai"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Google Play
              </a>
            </h3>
            <span className="text-sm text-gray-500">Founder &amp; Architect</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">
            AI-native multi-tenant platform for local discovery, booking, and
            commerce — built solo.
          </p>
          <ul className="space-y-2 text-[15px] leading-snug text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Built an{" "}
                <strong className="text-gray-900">MCP server</strong> that works
                with any MCP client — Claude Desktop/Web, ChatGPT, Gemini — plus
                an agentic chat server with RAG, so an LLM can search, book, and
                answer questions over live data.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Currently building a{" "}
                <strong className="text-gray-900">Generative UI MCP server</strong>{" "}
                on Google's A2UI protocol, so agents can render live, interactive
                UI instead of plain text or static UI components.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Designed a{" "}
                <strong className="text-gray-900">Hasura GraphQL platform</strong>{" "}
                on PostgreSQL with multi-tenant isolation and PostGIS location
                search across clinics, commerce, and rentals.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Shipped{" "}
                <strong className="text-gray-900">10+ services</strong> on Cloud
                Run — auth, payments, commissions, feature flags — plus a React
                Native app and a Module Federation web app.
              </span>
            </li>
          </ul>

          {/* Talview */}
          <div
            className="mt-5 flex items-baseline justify-between mb-0.5"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Staff Frontend Engineer ·{" "}
              <span className="font-normal">Talview</span>
            </h3>
            <span className="text-sm text-gray-500">2018 – Present</span>
          </div>
          <p className="text-sm text-gray-500 mb-3">
            Grew from associate engineer to staff over ~8 years — leading a team
            of 7-10 for the past 3-4 years, owning full-stack architecture across
            SaaS products.
          </p>
          <ul className="space-y-2 text-[15px] leading-snug text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Build product UIs in React + TypeScript, modeling complex async
                flows with Redux Toolkit, Redux-Saga, and RxDB, and wiring data
                through GraphQL and REST APIs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Led the Ember.js → React micro-frontend migration on Module
                Federation (Rspack) in an Nx monorepo — hand-rolling the routing,
                shared-dependency, and state-boundary patterns teams still build
                on.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Engineered real-time proctoring with WebRTC, HLS / video.js, and
                WebSocket streams, monitoring thousands of concurrent sessions at
                low latency.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Built <strong className="text-gray-900">Livy</strong>, a RAG
                application on @anthropic-ai/sdk — exposing retrieval and actions
                as MCP tools so Claude answers grounded, in-context questions over
                live data.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Built accessible, reusable component and rich-text libraries with
                Radix UI, Shadcn/ui, BlockNote, and EditorJS in Storybook,
                speeding feature delivery{" "}
                <strong className="text-gray-900">30%</strong> across products.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Profiled and tuned performance — code-splitting, lazy loading,
                memoization, and bundle analysis — cutting load time{" "}
                <strong className="text-gray-900">40%</strong> and server load{" "}
                <strong className="text-gray-900">60%</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Own testing across the stack with Jest, React Testing Library,
                and Cypress —{" "}
                <strong className="text-gray-900">85%+</strong> coverage and{" "}
                <strong className="text-gray-900">70%</strong> fewer production
                bugs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Wired AI dev tools (Cursor, Claude Code, Codex) into the workflow with
                agentic + manual code review —{" "}
                <strong className="text-gray-900">40%</strong> faster delivery
                with quality held.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Mentor engineers through standards and reviews, and partner across
                design, product, sales, customer success, and backend.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                <strong className="text-gray-900">5,590</strong> GitHub
                contributions in 2024 (highest in the org) · multiple quarterly
                and annual Engineering Champion awards.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StaffEngineerResumeDev;
