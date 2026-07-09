import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

const data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const StaffEngineerResumeLite = () => {
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
        <header
          className="mb-6"
          itemScope
          itemType="https://schema.org/Person"
        >
          <h1
            className="text-4xl font-light tracking-tight mb-1"
            itemProp="name"
          >
            {data.name}
          </h1>
          <meta itemProp="email" content={data.email} />
          <meta itemProp="telephone" content={`+91-${data.phone}`} />
          <p className="text-base text-gray-600 mb-3" itemProp="jobTitle">
            Staff / Founding Engineer — AI-Native Full-Stack &amp; Platform
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
            building complete systems — frontend, mobile, backend, and AI. Staff
            Frontend Engineer at Talview, leading a team of 7-10 for the past 3-4
            years and partnering across product, design, and business teams. Also
            the solo architect of{" "}
            <strong className="text-gray-900">LocalityAI</strong>, an AI-native
            multi-tenant platform I designed and built end to end.
          </p>
        </section>

        {/* What I do best */}
        <section className="mb-7">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Core Skills
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-gray-700">
            <span>React · React Native · TypeScript</span>
            <span>AI &amp; LLM systems (MCP, agents, RAG)</span>
            <span>Node · GraphQL · Hasura · PostgreSQL</span>
            <span>Micro-frontends &amp; microservices</span>
            <span>Multi-tenant &amp; geospatial platforms</span>
            <span>Cloud Run · Docker · CI/CD</span>
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
            commerce — architected and built end to end.
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
                Native app and a micro-frontend web app.
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
            Grew from associate engineer to staff over ~8 years — leading a team of 7-10
            for the past 3-4 years, owning full-stack architecture across SaaS
            products.
          </p>
          <ul className="space-y-2 text-[15px] leading-snug text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Led the Ember → React micro-frontend migration and set the
                architecture patterns the frontend teams still build on.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Cut load time <strong className="text-gray-900">40%</strong> and
                server load <strong className="text-gray-900">60%</strong> through
                code-splitting, caching, and bundle work.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Built real-time proctoring (WebRTC, WebSocket) monitoring
                thousands of concurrent sessions with low-latency video.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Built a shared component library and testing setup —{" "}
                <strong className="text-gray-900">85%+</strong> coverage,{" "}
                <strong className="text-gray-900">30%</strong> faster feature
                delivery, <strong className="text-gray-900">70%</strong> fewer
                production bugs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Brought AI tools into the team's workflow (
                <strong className="text-gray-900">40%</strong> faster delivery)
                and mentor engineers through standards and reviews.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                Partner across design, product, sales, customer success, and
                backend to turn requirements into shipped features.
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

export default StaffEngineerResumeLite;
