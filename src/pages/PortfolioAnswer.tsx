import { useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";

const data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

const Label = ({ children }: { children: string }) => (
  <dt className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 sm:text-right">
    {children}
  </dt>
);

export const PortfolioAnswer = () => {
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
            Software Engineer — Hands-On Full-Stack &amp; AI-Based Application
            Development
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
            <a
              className="hover:text-gray-900 underline-offset-2 hover:underline"
              href="https://play.google.com/store/apps/details?id=com.localityai"
              target="_blank"
              rel="noopener noreferrer"
            >
              LocalityAI on Google Play
            </a>
          </div>
        </header>

        <div className="h-px bg-gray-200 mb-6" />

        {/* The short answer */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Something I built
          </h2>
          <div className="border-l-2 border-gray-900 pl-4">
            <p className="text-[15px] leading-relaxed text-gray-700">
              I built the{" "}
              <strong className="text-gray-900">
                conversational booking interface
              </strong>{" "}
              for LocalityAI — you ask for "a dermatologist near Indiranagar
              free Saturday morning" and the surface runs a multi-step agent
              over live clinic data, then renders a calendar you can actually
              click instead of a paragraph describing one.{" "}
              <strong className="text-gray-900">I decided</strong> to stream
              every intermediate tool call to the UI over SSE rather than hide a
              multi-second chain behind a spinner, and to enforce tenant and
              per-user isolation in the data layer rather than in the prompt — a
              prompt instruction is a suggestion, a row-level constraint is a
              guarantee.{" "}
              <strong className="text-gray-900">I turned down</strong> a bespoke
              per-vendor function-calling integration in favour of MCP, so one
              tool layer drives Claude, ChatGPT, Gemini and our own app instead
              of three parallel integrations.{" "}
              <strong className="text-gray-900">Today I'd</strong> design the
              tool taxonomy before writing any tools — at 47 tools the model
              started confidently picking plausible-but-wrong ones, and no
              amount of interface polish saves a wrong action.
            </p>
          </div>
        </section>

        {/* Build 1 */}
        <section className="mb-8">
          <div className="flex items-baseline justify-between mb-0.5">
            <h2 className="text-lg font-semibold text-gray-900">
              LocalityAI — agentic booking &amp; discovery surface
            </h2>
            <span className="text-sm text-gray-500">
              Founder &amp; Architect · solo
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            AI-native multi-tenant platform for local discovery, booking, and
            commerce. React Native client on Google Play, Module Federation web
            app, 10+ Cloud Run services, 387-model Hasura DDN supergraph over
            Neon Postgres.
          </p>
          <dl className="grid gap-x-6 gap-y-3 text-[15px] leading-snug text-gray-700 sm:grid-cols-[8.5rem_1fr]">
            <Label>Decided</Label>
            <dd>
              Stream every tool step to the UI over SSE, so a 47-tool chain
              reads as visible progress rather than a hung spinner — a UX call
              that had to be architectural, not retrofitted. Validate with Zod
              at every tool boundary, so a hallucinated field becomes a typed
              rejection the model can recover from instead of a bad query
              hitting Postgres. Expand search radius progressively (5→7→10→20
              km) with Nominatim → Google → Mapbox geocoding fallback, because
              an empty result set is the worst agent outcome: the model
              apologises instead of helping.
            </dd>

            <Label>Turned down</Label>
            <dd>
              A proprietary per-vendor function-calling integration — MCP made
              the tool layer the product and the chat client a detail. A
              monolithic tool server, in favour of domain-scoped tool libraries
              (tenant: 16 tools, 8 geospatial; clinic: 13; ecommerce) composed
              at the host layer, so a booking-wizard host and a general-search
              host expose different slices of the same verified tools. And
              prompt-based guardrails: I'd written a commit gate the model
              satisfied by emitting the approval phrase without doing the
              review, which taught me that anything checking for the appearance
              of compliance isn't a guardrail.
            </dd>

            <Label>Would change today</Label>
            <dd>
              Design the tool taxonomy and boundaries up front instead of
              discovering the overlap problem at 47 tools. Model selection
              accuracy degrades well before you run out of tools, and the fix
              was tightening each tool to one unambiguous job — work that would
              have been nearly free at the start and expensive once a catalogue
              existed.
            </dd>
          </dl>
        </section>

        {/* Build 2 */}
        <section className="mb-8">
          <div className="flex items-baseline justify-between mb-0.5">
            <h2 className="text-lg font-semibold text-gray-900">
              Talview — Ember.js → React micro-frontend platform
            </h2>
            <span className="text-sm text-gray-500">
              Technical lead · team of 7–10
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            A legacy Ember app that had become the bottleneck on both delivery
            speed and hiring, migrated while the product kept shipping.
          </p>
          <dl className="grid gap-x-6 gap-y-3 text-[15px] leading-snug text-gray-700 sm:grid-cols-[8.5rem_1fr]">
            <Label>Decided</Label>
            <dd>
              An incremental strangler migration onto Module Federation (Rspack)
              in an Nx monorepo, so Ember and React ran side by side and
              surfaces moved over one at a time. Nothing off the shelf handled
              that coexistence, so I hand-rolled the routing,
              shared-dependency, and state-boundary patterns — still the
              patterns teams build on.
            </dd>

            <Label>Turned down</Label>
            <dd>
              A big-bang rewrite: the product had to keep shipping, and a
              rewrite trades a known bottleneck for an unbounded one. Also
              turned down sharing state between the two frameworks through
              globals — the boundaries became explicit contracts instead, which
              is why the coexistence period stayed debuggable.
            </dd>

            <Label>Would change today</Label>
            <dd>
              Lock the shared-dependency contract into one versioned package
              before the first remote shipped, rather than resolving version
              conflicts remote by remote as they surfaced. The migration
              strategy held up; the dependency graph is where the avoidable pain
              was.
            </dd>
          </dl>
        </section>

        {/* Also built */}
        <section className="mb-7">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Also built
          </h2>
          <ul className="space-y-2 text-[15px] leading-snug text-gray-700">
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                <strong className="text-gray-900">
                  MCP host-aggregator server
                </strong>{" "}
                — Express over JSON-RPC 2.0 / SSE, composing clinic, tenant, and
                booking-wizard tool libraries into one endpoint any MCP client
                connects to, with 240+ tests per library.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                <strong className="text-gray-900">
                  Generative UI MCP server
                </strong>{" "}
                on Google's A2UI protocol (in progress) — so an agent returns a
                live, interactive booking calendar rather than text describing
                one.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                <strong className="text-gray-900">Livy</strong> at Talview — a
                RAG application on the Anthropic SDK exposing retrieval and
                actions as MCP tools, so Claude answers grounded questions over
                live product data.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                <strong className="text-gray-900">
                  Real-time proctoring pipeline
                </strong>{" "}
                — WebRTC, HLS / video.js, and WebSocket streams monitoring
                thousands of concurrent sessions at low latency.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300 select-none">—</span>
              <span>
                <strong className="text-gray-900">
                  Content creator &amp; component library
                </strong>{" "}
                — block-based rich text on BlockNote / ProseMirror / EditorJS
                with a JSON block format that survived the Ember → React
                rewrite; Radix and Shadcn/ui primitives in Storybook, ~30%
                faster feature delivery.
              </span>
            </li>
          </ul>
        </section>

        {/* Numbers */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Numbers
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            8 years shipping production code · team of 7–10 led for 3–4 years ·
            5,590 GitHub contributions in 2024, highest in the org · 40% faster
            load and 60% lower server load · 85%+ test coverage and ~70% fewer
            production bugs
          </p>
        </section>
      </div>
    </div>
  );
};

export default PortfolioAnswer;
