# Candidate Screening Questionnaire — Answer Draft

> Trideep Kumar Das · Staff Frontend Engineer, Talview · Founder & Architect, LocalityAI (Veerluit) · Bengaluru
>
> **⚠️ Fill in before the call:** Q9, Q10, Q11, Q12, Q15 (personal/commercial — placeholders marked `[FILL]`), and Q16 (needs 10 min of research on Inception).

---

## General Screening Questions

### 1. Tell me about your current role and day-to-day responsibilities.

I'm a **Staff Frontend Engineer at Talview**, where I've been for ~8 years — I joined as an associate engineer in June 2018 and grew into the staff role. For the last 3–4 years I've been leading a team of 7–10 engineers and owning full-stack architecture across our SaaS products.

Day to day it's roughly: architecture and design decisions in the morning — how a feature should be modeled, where state lives, what the API contract looks like — then hands-on implementation, then code review and mentoring. I write production code every day; I'm not a manager who reviews from a distance. Concretely that means building product UIs in React + TypeScript with Redux Toolkit / Redux-Saga / RxDB, wiring them through GraphQL and REST, owning the micro-frontend platform on Module Federation, and setting the testing and performance standards the team works to.

The other half of my week is cross-functional — working with design, product, backend, sales, and customer success to turn a requirement into something buildable, and unblocking the team on the hard technical calls.

Outside Talview I'm the **founder and architect of LocalityAI** (under Veerluit), an AI-native multi-tenant platform I've built end-to-end solo — that's where most of my recent backend and LLM/agent work lives.

---

### 2. What technologies and domains are you currently working in?

**Domains:** HR-tech / assessment & proctoring SaaS at Talview (real-time video, high-concurrency, multi-tenant enterprise). At LocalityAI: local commerce marketplace — healthcare/clinics, ecommerce, rentals, car care — with heavy geospatial and AI/agent work.

**Technologies, by layer:**

| Layer | Stack |
|---|---|
| Frontend | React 19, React Native (bare CLI), TypeScript, Redux Toolkit, Redux-Saga, RxDB, RxJS, Apollo Client, Tailwind, Reanimated |
| Platform | Micro-frontends via Module Federation (Rspack / Rsbuild), Nx monorepo, pnpm workspaces, Nx Cloud |
| Backend | Node, Express, Fastify, Hono, GraphQL, Hasura DDN, Prisma, JSON-RPC, graphql-ws subscriptions |
| Data | PostgreSQL (Neon), PostGIS, pgvector, Firebase, Zod validation |
| AI / LLM | Model Context Protocol (MCP), `@modelcontextprotocol/sdk`, Anthropic Claude, agentic tool-use, RAG with OpenAI embeddings, streaming SSE, semantic caching, PII guardrails |
| Infra | Google Cloud Run, Docker, Cloud Pub/Sub, GitHub Actions, Sentry, OpenTelemetry |
| Testing | Jest, Vitest, React Testing Library, Cypress, Playwright |
| Real-time | WebRTC, HLS / video.js, WebSockets |

The through-line for the last ~2 years has been **AI-native application development** — not calling an LLM API from a button, but designing the tool layer, retrieval, and guardrails that let an agent operate safely over live production data.

---

### 3. Can you walk me through your 2–3 most recent projects?

**A. LocalityAI — AI / MCP layer (most recent, ongoing).**
An MCP tool ecosystem plus an agentic chat server that lets an LLM search, book, and answer questions over live platform data. Reusable, Zod-validated tool libraries — 16 tools for tenant (8 of them geospatial), 13 for clinic, plus ecommerce — over a shared Prisma data layer, with 240+ tests per library. On top of that, an MCP host-aggregator server (Express + `StreamableHTTPServerTransport`, JSON-RPC 2.0 over HTTP/SSE) that composes those libraries into one endpoint, and a Hono-based agentic Claude chat server with a 47-tool healthcare catalog doing multi-step tool use with streaming SSE and per-user data isolation. Currently building a **Generative UI MCP server** on Google's A2UI protocol so agents can render live interactive UI rather than plain text.

**B. LocalityAI — Hasura DDN platform + geospatial discovery.**
A unified Hasura DDN supergraph (387 metadata models) over Neon PostgreSQL, with a universal multi-tenant model — a 46-type taxonomy (9 roots, 37 subtypes) covering clinics, ecommerce, car care, rentals, parlors, dairy — and strict per-tenant isolation. The discovery engine is PostGIS radius / bounding-box / progressive-radius search (5→7→10→20 km expansion) with multi-provider geocoding fallback across Nominatim, Google Maps, and Mapbox. 10+ containerized microservices on Cloud Run behind it — auth, payments, commissions, feature flags. Clients are a bare-RN-CLI React Native app (on Google Play) and a Module Federation web super-app.

**C. Talview — Ember.js → React micro-frontend migration + Livy.**
Led the migration of a legacy Ember.js application to a React/TypeScript micro-frontend architecture on Module Federation (Rspack) inside an Nx monorepo. There was no off-the-shelf answer for the hard parts, so I hand-rolled the routing, shared-dependency, and state-boundary patterns — those are still the patterns teams build on today. Alongside that I built **Livy**, a RAG application on the Anthropic SDK that exposes retrieval and actions as MCP tools so Claude can answer grounded questions over live product data.

---

### 4. What was your personal contribution to each project?

- **LocalityAI (A and B):** Everything. It's a solo build — I did product definition, data modeling, the multi-tenant taxonomy, the MCP tool design, the RAG pipeline, all 10+ services, the React Native app, the micro-frontend web app, CI/CD, and deployment. There's no one else to hand the hard part to.
- **Talview micro-frontend migration:** I led it — I made the architecture call (Module Federation on Rspack in an Nx monorepo), designed the routing/shared-dependency/state-boundary patterns myself, wrote the foundational code, and then brought the team onto it through standards, reviews, and pairing. My personal ownership was the platform layer; the team built features on top of it.
- **Livy:** Built it end to end — the retrieval layer, the MCP tool surface, and the Claude integration.
- **Proctoring / real-time:** Engineered the WebRTC + HLS/video.js + WebSocket streaming path for monitoring thousands of concurrent sessions at low latency.
- **Cross-cutting at Talview:** I own the component and rich-text libraries (Radix, Shadcn/ui, BlockNote, EditorJS in Storybook — ~30% faster feature delivery), the performance work (code-splitting, lazy loading, memoization, bundle analysis — 40% faster load, 60% less server load), and the testing standard (85%+ coverage, ~70% fewer production bugs).

---

### 5. How technically hands-on are you in your current role?

Fully hands-on — I write and ship production code every day, and I'd want that to stay true in any role I move to. The staff title at Talview means my leverage comes from architecture and from the code the team builds on, not from stepping back into coordination.

Two data points: I had **5,590 GitHub contributions in 2024, the highest in the organization**, and I've won multiple quarterly and annual Engineering Champion awards. And LocalityAI is a complete production platform — MCP servers, 10+ backend services, a published React Native app, a federated web app — that I built alone, outside of work. That isn't something you can do from an architecture-diagram altitude.

I also drove AI tooling adoption into the team's workflow (Claude Code, Cursor, Codex) with combined agentic + manual review — about 40% faster delivery with quality held. Part of that was building Claude Code **skills and hooks** that scaffold components into our exact conventions and gate commits against a review checklist, so structural nitpicks stop showing up in review at all.

---

### 6. What is your current team size and reporting structure?

I lead a team of **7–10 engineers** and have for the past 3–4 years, as an individual contributor at staff level — technical leadership rather than people management, so I don't own headcount or performance reviews. I report into engineering leadership and work directly with product, design, and backend counterparts. Mentoring, code standards, and review are mine; HR-line management isn't.

---

### 7. What production or deployment exposure do you have?

Substantial, on both sides.

At **Talview**, my frontend work runs in production for enterprise customers with thousands of concurrent users — that means owning CI/CD pipelines, release and rollback, performance regressions, and production incidents on real-time proctoring where latency failures are visible immediately.

At **LocalityAI**, I own the full production surface myself: 10+ containerized microservices on **Google Cloud Run**, Docker builds, GitHub Actions CI/CD, Nx Cloud remote caching, Cloud Pub/Sub for event-driven flows, Neon PostgreSQL, and observability through **Sentry and OpenTelemetry**. Security and hardening are also mine — Firebase Auth, JWT with Hasura claims, RBAC, Razorpay payments, Helmet, rate limiting, HPP, and input sanitization. Plus a React Native app shipped to the Google Play Store, which brings its own release-track and native-build discipline (including custom Kotlin modules).

So: I'm not someone who hands a build to a platform team. I've been on the pager for my own systems.

---

### 8. Why are you considering a change?

I've spent eight years at Talview and grown from associate to staff there — I have no complaints about it, and I'm not running from anything. The reason I'm looking is scope alignment.

Where my energy has gone for the last two years is AI-native product engineering: MCP tool design, agentic backends, RAG, and now generative UI. I've been doing that largely on my own time through LocalityAI, and in narrower slices at work through Livy and the AI dev-tooling work. I want that to be the main job rather than the side project — a role where building agentic, LLM-backed systems end to end is the core of the work, in a team that's pushing on it seriously.

The second reason is that after eight years in one codebase, I want to test my architecture instincts against a different problem domain and a different set of engineers.

---

### 9. What is your current compensation (CTC)?

`[FILL: ₹__ LPA fixed + ₹__ variable = ₹__ LPA total]`

Suggested framing: *"My current CTC is ₹X LPA. Happy to share the breakup — it's roughly ₹A fixed and ₹B variable."*

---

### 10. What is your expected compensation?

`[FILL: ₹__ LPA]`

Suggested framing: *"I'm looking at ₹X LPA. I'd want to understand the full scope and the level first, and I'm open to structuring it sensibly — but that's the range that makes a move make sense given where I am."*

If you'd rather not anchor first: *"I'd prefer to hear the band budgeted for this role — I'm flexible for the right scope, and my current CTC is ₹X so you can calibrate from there."*

---

### 11. What is the split between fixed and variable pay?

`[FILL: Current — ₹__ fixed / ₹__ variable (__%). Expected — prefer __% fixed.]`

Suggested framing: *"Currently it's roughly X% fixed and Y% variable. On the expected side I'd prefer a higher fixed component — I'm comfortable with variable tied to things I can actually influence, but I don't want the majority of comp riding on it."*

---

### 12. What is your notice period and earliest joining date?

`[FILL: notice period — 60 / 90 days? Any buyout option?]`

Suggested framing: *"My notice period is X days, so my earliest joining date would be around [date]. There's a buyout option — if timing matters on your side, I can look at shortening it to roughly [N] days."* (Drop the buyout sentence if it doesn't apply.)

---

### 13. What is your current location?

**Bengaluru, India.**

---

### 14. Are you comfortable with remote/hybrid work if required?

Yes — and remote-first specifically suits how I already work. I'm in Bengaluru with a proper home-office setup and reliable connectivity, so the practical side is covered.

More to the point, I've led a distributed team of 7–10 for the last 3–4 years, which means architecture decisions, code review, and mentoring already happen asynchronously and in writing. I default to writing things down — ADRs, documented patterns, standards in the repo — because that's what lets people move without waiting on me.

On the **UAE overlap**: IST is only 1.5 hours ahead of Gulf Standard Time, so it's one of the easiest overlaps there is — effectively a full shared working day. I'd have no problem anchoring my day to UAE hours, and I'm fine with occasional travel.

---

### 15. Do you have any ongoing interview processes or offers?

`[FILL]`

- If yes: *"Yes — I'm in process with a couple of companies, one at final stage. Nothing signed. I wanted to flag it so we can align on timelines."* (Honest, and creates useful urgency.)
- If no: *"I've just started looking, so nothing active right now. Inception is one of the first conversations I'm having."*

Either way, don't invent an offer you don't have — it collapses badly if they ask for specifics.

---

### 16. What interests you about Inception and this role?

> ⚠️ **One thing to verify yourself before the call (5 min on their site / LinkedIn):** my understanding is that Inception is an Abu Dhabi–based applied-AI company in the G42 group, known for work on Arabic-language LLMs. The answer below leans on that. **Confirm it first** — if it's wrong, swap the second paragraph for whatever their actual flagship work is. Getting a company's own identity wrong is worse than being generic.

**The answer:**

Three things, and the first one is the real reason.

The JD describes a **frontend engineering role sitting inside AI and digital transformation programs** — building the actual product surface on top of GenAI and cloud work. That's the exact intersection I've been building toward, and it's unusual to find posted as a frontend role. Most frontend jobs are frontend for a conventional product; most AI jobs want you in the model layer. I've spent the last two years doing both ends of this — I'm a Staff Frontend Engineer by trade, and separately I've built MCP servers, an agentic chat backend with a 47-tool catalog, and a RAG pipeline for LocalityAI. I know what it takes to put a usable, trustworthy interface on top of a non-deterministic system: streaming responses so a multi-second tool chain shows progress instead of a spinner, designing for the case where the model is confidently wrong, and building UI that an agent can drive. I'm currently building a Generative UI MCP server on Google's A2UI protocol so agents can render live interactive UI rather than text — that's a frontend problem that only exists because of the AI layer, and it's the kind of problem I want more of.

Second, **the specific work**. `[Verify, then name one concrete thing — e.g.:]` The applied-AI-at-national-scale angle interests me, and the Arabic-LLM work in particular — building product interfaces over a language with RTL layout, different typography metrics, and different text-shaping behaviour is a genuinely hard frontend problem that most teams never touch. Internationalization and accessibility are things I already care about — I built our component libraries on Radix precisely because accessibility is structural there rather than bolted on — and I'd rather work on those problems where they're actually load-bearing.

Third, **the shape of the role**. It's remote-first, hands-on, cross-functional, and explicitly asks for people who participate in architecture decisions rather than just consume them — that's how I already work, and it's the part of my current job I want more of, not less. After eight years in one codebase I also want exposure to enterprise and regulated-industry constraints and to a globally distributed team, which this role has and my current one doesn't.

---

**If they push — "why not just stay and do AI work at Talview?"**
Fair question. I have done some — I built Livy there, a RAG application on the Anthropic SDK with MCP tools. But it's a feature inside an HR-tech product, not the direction of the company. Here it's the core of what the organization is doing, which changes how deep you can go.

**If they push — "this is a frontend role, are you going to be bored?"**
No — the opposite. Frontend is where my depth is; it's the title I hold and where I have eight years. The AI work makes me better at this role, not less interested in it. What I'd want is that the ownership is real — architecture input, component library and platform decisions, not just implementing handed-down designs — and the JD reads like that's the intent.

---

## Technical Project Discussion — LocalityAI MCP + Agentic Layer

> Chosen because it's the most recent, the most differentiated, and 100% mine — every follow-up question has a real answer. *(Alternate below if they want something team-based or enterprise-scale.)*

### Business or technical problem

LocalityAI is a multi-tenant platform for discovering, booking, and transacting with local businesses — clinics, ecommerce, rentals, car care, and more. Discovery through a conventional UI means a user filters, scrolls, compares, and then books, which is a lot of steps for what's really one intent: *"find me a dermatologist near Indiranagar who's free Saturday morning, and book it."*

The technical problem was: **let an LLM do that end to end, over live production data, without letting it see data it shouldn't or take actions it shouldn't.** That's harder than it sounds — it's not a chatbot over docs. The model needs to run real queries, cross tenant-scoped data, and execute state-changing operations like a booking. The failure modes are data leakage between tenants and confidently wrong actions.

Secondary requirement: it shouldn't be locked to one chat product. It should work from Claude, ChatGPT, Gemini, or our own app.

### My role

Founder and architect — solo. I designed and built the whole thing: the tool taxonomy, the MCP servers, the agentic chat server, the RAG layer, the guardrails, the tests, and the deployment.

### Architecture or approach

Four layers:

1. **Reusable MCP tool libraries.** Rather than one monolithic tool server, I built domain-scoped libraries — *tenant* (16 tools, 8 of them geospatial), *clinic* (13 tools), *ecommerce* — each with Zod-validated inputs/outputs over a shared **Prisma** data layer, and 240+ tests per library. Libraries, not services, so the same tool definitions can be composed differently by different hosts.
2. **MCP host-aggregator server.** An Express server speaking **JSON-RPC 2.0 over HTTP/SSE** via `StreamableHTTPServerTransport`, dynamically composing clinic, tenant, and interactive booking-wizard tools into a single endpoint. Because it's standard MCP, any MCP client connects — Claude Desktop/Web, ChatGPT, Gemini — with no per-client integration work. This is the same server backing the LocalityAI tools inside Claude.
3. **Agentic chat server.** A **Hono** service exposing a 47-tool healthcare catalog with multi-step tool use and **streaming SSE** responses, so the user sees progress rather than a spinner during a multi-tool chain. Per-user data isolation is enforced at this layer.
4. **Retrieval and grounding.** RAG with OpenAI embeddings over **pgvector** in Postgres, semantic caching, episodic memory, prompt versioning, and PII guardrails.

Underneath it all sits the Hasura DDN supergraph (387 models) over Neon Postgres with PostGIS, deployed as containers on Cloud Run.

### Technologies used

TypeScript, `@modelcontextprotocol/sdk`, Anthropic Claude, Express, Hono, JSON-RPC 2.0 / SSE, Prisma, Zod, PostgreSQL (Neon), pgvector, PostGIS, OpenAI embeddings, Hasura DDN, Docker, Google Cloud Run, Sentry, OpenTelemetry, Vitest.

### Key design decisions

- **MCP over a bespoke function-calling integration.** A proprietary tool protocol would have meant reimplementing the integration per LLM vendor. MCP made the tool layer the product and the client a detail — that one decision is why LocalityAI works inside Claude, ChatGPT, and Gemini without three integrations.
- **Tool libraries, not a tool service.** Composition at the host layer means a booking wizard host and a general search host can expose different slices of the same verified tools. It also made the tools unit-testable in isolation — hence 240+ tests per library.
- **Zod at every tool boundary.** LLMs produce plausible-looking malformed arguments. Schema validation at the boundary turns "model hallucinated a field" into a typed rejection the model can recover from, rather than a bad query hitting Postgres.
- **Isolation enforced in the data layer, not the prompt.** Tenant and per-user scoping lives in Prisma/Hasura permissions. A prompt instruction is a suggestion; a row-level constraint is a guarantee. Non-negotiable for multi-tenant.
- **Streaming SSE from the start.** A 47-tool agentic chain can take many seconds. Streaming turns that from "is it broken?" into visible progress — a UX decision that had to be architectural, not retrofitted.
- **Progressive-radius geospatial search (5→7→10→20 km) with multi-provider geocoding fallback.** Empty result sets are the worst agent outcome — the model apologizes instead of helping. Widening automatically, with Nominatim → Google → Mapbox fallback, means a query almost always returns *something* useful.

### Challenges encountered

- **Tool-surface bloat.** A 47-tool catalog stretches model selection accuracy — with too many overlapping tools, the model picks a plausible-but-wrong one. I had to tighten tool descriptions and boundaries so each tool had one unambiguous job, and let the host compose narrower slices per context rather than exposing everything at once.
- **Multi-tenant isolation under agentic access.** The moment an LLM composes queries, every implicit assumption in your data access gets tested. This is what forced isolation down into Prisma/Hasura permissions rather than the application layer.
- **A guardrail lesson that genuinely surprised me.** Separately, I'd built a prompt-based commit gate as part of my AI dev workflow — it required a review before allowing a commit. I realized the AI could satisfy it by *emitting the approval phrase without doing the review*. It was checking for a string, not a verified action. That reshaped how I build guardrails: anything that checks for the *appearance* of compliance isn't a guardrail. The durable wins came from deterministic enforcement — scaffolds that structurally cannot emit a hardcoded value — with the prompt gate demoted to a checklist. That principle carried straight into the MCP work: validate at the boundary, enforce in the data layer, don't trust the model's self-report.
- **Empty geospatial results** at low density in new areas — solved by the progressive-radius expansion above.

### Result or impact

A production AI-native platform: the MCP server works today from any MCP client, the agentic chat server handles multi-step booking flows with streaming responses and per-user isolation, and the React Native app is live on the Google Play Store. It runs on 10+ Cloud Run services over a 387-model Hasura supergraph with a 46-type multi-tenant taxonomy — built and operated by one person, which is itself the strongest evidence of the architecture's leverage.

The pattern also transferred: the same MCP-tools-over-live-data approach became **Livy** at Talview, a RAG application on the Anthropic SDK.

Currently extending it with a **Generative UI MCP server** on Google's A2UI protocol, so agents can render live interactive UI — a booking calendar you can actually click — instead of describing it in text.

### What I personally owned

All of it. Architecture, data modeling, every tool library, the aggregator and chat servers, the RAG pipeline, the guardrails, the tests, CI/CD, deployment, and production operations. There was no team.

---

### Alternate deep-dive (if they want team-scale / enterprise)

**Ember.js → React micro-frontend migration at Talview.**

- **Problem:** A legacy Ember.js application that had become the bottleneck on delivery speed and hiring — a big-bang rewrite was off the table because the product had to keep shipping.
- **My role:** Technical lead and primary architect; I made the calls and wrote the foundational layer, then brought 7–10 engineers onto it.
- **Approach:** Incremental strangler migration to React + TypeScript micro-frontends on **Module Federation (Rspack)** inside an **Nx monorepo**, so Ember and React could run side by side while surfaces moved over one at a time.
- **Key decisions:** Module Federation over a monolithic rewrite (independent deployability, incremental migration); Nx for the monorepo (shared libraries, remote caching); hand-rolled routing, shared-dependency, and state-boundary patterns because nothing off the shelf handled the Ember/React coexistence.
- **Challenges:** Shared-dependency version conflicts across remotes, and state boundaries between the two frameworks during coexistence — both solved with explicit contracts I designed rather than by leaking global state.
- **Impact:** 40% faster load time, 60% lower server load, 85%+ test coverage with ~70% fewer production bugs, and ~30% faster feature delivery from the shared component/rich-text libraries. The patterns I set are still the ones teams build on.
- **Owned personally:** The architecture, the platform layer, the migration strategy, and the standards — the team owned features built on top.

---

## Prep notes

**Numbers worth having on the tip of your tongue:** 8 years · team of 7–10 · 5,590 GitHub contributions in 2024 (highest in org) · 10+ Cloud Run services · 387 Hasura models · 46-type tenant taxonomy · 47-tool agent catalog · 240+ tests per tool library · 40% faster load / 60% less server load / 85%+ coverage / 70% fewer bugs / 30% faster delivery.

**Likely follow-ups to rehearse:**
- *"You're a frontend engineer by title but describing backend and AI work — where do you actually sit?"* → Frontend is where I have the most depth and the title, but I've shipped complete systems for years; LocalityAI is the proof, and I'm not looking to be boxed into one layer.
- *"How do you split time between Talview and LocalityAI?"* → Be straightforward: LocalityAI is built outside work hours, there's no conflict with Talview's product or customers, and you're transparent about it. Expect this one — have a clean, unembarrassed answer ready.
- *"What would you do differently on the MCP work?"* → Tool-surface design first: I'd define the tool taxonomy and boundaries before writing tools, rather than discovering the overlap problem at 47 tools.
- *"Have you managed people?"* → Technical leadership of 7–10, not HR-line management — say it plainly, don't inflate it.
