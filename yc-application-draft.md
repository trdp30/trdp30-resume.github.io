# Y Combinator — Fall 2026 Application Draft

**Veerluit Private Limited · LocalityAI · Trideep Kumar Das (solo founder)**

> **Status assumed from your answers:** incorporated ✓ · pre-launch (no users, no revenue) · already left Talview to work on this full-time · post-YC location undecided.
>
> `[FILL]` marks things only you can supply. **Read the "Before you submit" section at the bottom first** — there are two things that will materially change your odds.

---

## Founders

### Who writes code, or does other technical work on your product? Was any of it done by a non-founder?

> Your current draft is fine but underclaims. YC reads this to check the founder is genuinely technical — give them the evidence.

I write all of it. No contractors, no agency, no non-founder contributors.

That covers the full stack: the Hasura DDN supergraph and PostgreSQL data model, 10+ containerized microservices on Cloud Run, the MCP tool servers and agentic LLM layer, the React Native app, and the Module Federation web app. I spent 8 years as a Staff Frontend Engineer at Talview leading a team of 7–10 before leaving to do this full-time, so the engineering is not the bottleneck here — distribution is.

### Are you looking for a cofounder?

> ⚠️ **Change your current answer.** "Not as of now" is the single cheapest mistake in this application. YC funds solo founders, but "not looking" reads as *hard to work with* — and that's a much worse signal than being solo. Say you're open, without sounding desperate or unsure.

Open to it, but I won't take one just to have one. I've built the entire product alone, so what I'd actually want is a partner on distribution and go-to-market — someone who can get local businesses onboarded — rather than a second engineer. If I meet that person through YC I'd move on it; until then I'd rather move fast alone than slow with the wrong person.

---

## Founder Video — 1 minute script

> ~150 words, which is about 60 seconds spoken. Record on a phone in decent light, look at the lens, don't read it word for word — know the beats and talk.

Hi, I'm Trideep. I'm a solo founder based in Bengaluru, and I'm building LocalityAI.

I spent eight years as a Staff Frontend Engineer at Talview, ending up leading a team of ten and owning architecture across our products. I left to work on this full-time.

Here's the bet. People have started asking ChatGPT and Claude to do things, not just answer things. But when you ask an AI to book you a dentist appointment on Saturday, it can't — because no local business is reachable by an agent. There's no transaction layer.

So I built one. It's an MCP server, which means any AI assistant — Claude, ChatGPT, Gemini — can search real availability and actually make a booking. I built the whole platform myself: the backend, the AI layer, the mobile app.

It works today. What I need now is distribution, and that's why I'm applying.

---

## Company

### Company name
Veerluit Private Limited

### Describe what your company does in 50 characters or less.

> Pick one. Character counts verified. I'd use the first — it names the customer benefit and the AI angle without jargon.

| Option | Chars |
|---|---|
| **Makes local businesses bookable by AI agents** | 44 |
| AI agents that find and book local services | 43 |
| Let AI agents book appointments at local clinics | 48 |
| Stripe for AI agents booking local services | 43 |
| The booking layer for AI agents + local business | 48 |

**Recommended:** `Makes local businesses bookable by AI agents`

*(If you narrow to healthcare — see "Before you submit" — use the clinics one. Specificity wins here.)*

### Company URL, if any
`[FILL — do you have veerluit.com or localityai.in? If not, buy one today. A YC application with no website is a small but real negative.]`

### Please provide a link to the product
`https://play.google.com/store/apps/details?id=com.localityai`

> Also attach a **demo video** — this is your strongest asset. Pre-launch companies with no users get judged almost entirely on the demo. Show, in under 3 minutes: (1) you type "book me a dermatologist near Indiranagar for Saturday morning" into **Claude or ChatGPT**, (2) it searches real data and completes a real booking, (3) the booking appears in the app. That single screen recording is more persuasive than everything else in this form combined.

### Login credentials, if required
`[FILL — create a demo account for reviewers: demo@localityai / <password>. Don't make them sign up.]`

### What is your company going to make? Please describe your product and what it does or will do.

LocalityAI makes local businesses transactable by AI agents.

**The shift:** People are moving from searching to asking. They ask ChatGPT to plan the trip, compare the options, make the decision. But the moment the task involves a local business — book a dentist, get the car serviced, rent equipment — the agent stops and hands back a phone number. It can't complete the job, because local businesses have no machine-readable surface. Their availability lives in a paper diary, a WhatsApp thread, or a booking widget built for human clicks.

**What we built:** A platform where local businesses' real inventory, availability, and pricing are exposed as agent-callable tools over the Model Context Protocol. Because MCP is an open standard, the same server works in Claude, ChatGPT, and Gemini with no per-vendor integration — an agent can search across providers, check genuine availability, and complete a booking end to end.

Concretely, today: a multi-tenant platform on a Hasura DDN supergraph (387 models) over PostgreSQL, covering healthcare, ecommerce, rentals, and personal care; geospatial discovery on PostGIS with progressive-radius search and multi-provider geocoding fallback; MCP tool libraries with Zod-validated schemas over a shared Prisma layer; an aggregator server speaking JSON-RPC over HTTP/SSE; and an agentic chat backend with a 47-tool healthcare catalog doing multi-step tool use with streaming responses. Plus a React Native consumer app and a Module Federation web app for businesses. Ten-plus services in production on Cloud Run.

**Where it goes:** Two directions. First, the business side becomes the product — the operator's calendar, payments, and commissions are what make their inventory real, and the agent surface is what makes it valuable. Second, generative UI: I'm building an MCP server on Google's A2UI protocol so an agent can render a live, clickable booking calendar inside the chat instead of describing one in text. Text is a bad interface for picking a time slot.

The long-term position is the transaction layer between AI assistants and local commerce — the thing that gets called whenever an agent needs to actually do something in the physical world near you.

### Where do you live now, and where would the company be based after YC?

`Bengaluru, India / San Francisco, USA`

> **Recommendation:** put San Francisco unless you know you can't relocate. You said undecided, and "undecided" is the one answer that costs you — it reads as low commitment. If relocating is genuinely off the table, write `Bengaluru, India / Bengaluru, India` and own it confidently; plenty of YC companies are India-based. Either is fine. Hedging isn't.

### Explain your decision regarding location.

**If you go with SF:**

I'm in Bengaluru now, which is where the product was built and where the first businesses will be onboarded — India is the right place to prove this, because the density of small local businesses is enormous and almost none of them have any digital booking surface at all.

But the companies defining what agents can do — Anthropic, OpenAI, Google — and the developer ecosystem forming around MCP are concentrated in the Bay Area. Being close to that is worth a lot for a company whose entire thesis is that agents will need a transaction layer. I'd base the company in San Francisco after the batch and keep operations and onboarding in India, which also means our cost of iteration stays low.

**If you go with Bengaluru:**

I'm in Bengaluru and would stay. This product needs to be pressure-tested against real local businesses at real density, and India is the best environment in the world for that — millions of small clinics, salons, and service businesses with no digital booking presence, and a population that adopted UPI faster than anyone expected. Building the transaction layer where the transactions actually are matters more than being near the model labs, and MCP is an open protocol I can build against from anywhere. I'd travel to the US for the batch and for fundraising.

---

## Progress

### How far along are you?

The product is built and deployed; it is not yet publicly launched.

What exists in production today: 10+ containerized services on Google Cloud Run, a Hasura DDN supergraph with 387 metadata models over Neon PostgreSQL, a multi-tenant taxonomy covering 46 business types, PostGIS geospatial discovery, an MCP tool ecosystem (16 tenant tools, 13 clinic tools, plus ecommerce) with 240+ tests per library, an MCP aggregator server that any MCP client can connect to, an agentic Claude chat server with a 47-tool healthcare catalog and streaming responses, a React Native app published to the Google Play Store, and a Module Federation web app for business operators.

So the hard technical work — multi-tenant isolation under agentic access, geospatial search, the agent tool layer — is done and working. What I have not done is put it in front of real businesses and real users, and that is exactly the gap I want the batch to close. My honest self-assessment: I over-invested in building and under-invested in distribution, which is the classic solo-technical-founder failure mode. I'd rather state that plainly than pretend otherwise.

### How long have each of you been working on this? How much of that has been full-time?

`[FILL the two dates, then this reads correctly.]`

I started building LocalityAI in `[Month Year]`, working nights and weekends alongside my Staff Engineer role at Talview. I left Talview in `[Month Year]` to work on it full-time, so that's roughly `[N]` months part-time and `[N]` months full-time as of today. I'm the only person who has worked on it.

### What tech stack are you using, or planning to use, to build this product? Include AI models and AI coding tools you use.

**AI / agent layer:** Model Context Protocol (`@modelcontextprotocol/sdk`) for the agent-callable tool surface, exposed over JSON-RPC 2.0 via HTTP/SSE so any MCP client connects without a custom integration. Anthropic Claude for the agentic chat server, with multi-step tool use and streaming SSE responses. RAG using OpenAI embeddings over pgvector in Postgres, with semantic caching, episodic memory, prompt versioning, and PII guardrails. Building on Google's A2UI protocol for generative UI.

**Backend:** TypeScript throughout. Hasura DDN supergraph over Neon PostgreSQL, with PostGIS for geospatial and Prisma as the shared data layer. Express and Hono services, Zod validation at every tool and API boundary. Firebase Auth with JWT/Hasura claims for RBAC, Razorpay for payments.

**Clients:** React 19 and React Native (bare CLI), Apollo Client, Redux Toolkit, Tailwind. Micro-frontends on Module Federation via Rsbuild. Everything in an Nx monorepo with pnpm workspaces and Nx Cloud remote caching.

**Infra:** Docker on Google Cloud Run, Cloud Pub/Sub for event-driven flows, GitHub Actions CI/CD, Sentry and OpenTelemetry for observability. Vitest, Jest, React Testing Library, Cypress, and Playwright for testing.

**AI coding tools:** Claude Code as the primary driver, plus Cursor and Codex. This is a real force multiplier for a solo founder, and I've invested in making it one rather than just using it — I built custom Claude Code **skills** that scaffold components into the exact project conventions and design-token system, and **hooks** that gate commits against a structural review checklist. One lesson worth recording: my first commit gate was prompt-based, and I found the model could satisfy it by emitting the approval phrase without doing the review. It was checking for the appearance of compliance, not the act. I rebuilt the enforcement deterministically — the scaffold structurally cannot emit a hardcoded value — and demoted the prompt to a checklist. That principle carried into the product: validate at the boundary, enforce in the data layer, never trust a model's self-report.

### Are people using your product?
**No**

### Do you have revenue?
**No**

### If you are applying with the same idea as a previous batch, did anything change?
`[FILL — if this is your first YC application, leave blank or write: "This is my first application to YC."]`

### If you have already participated or committed to participate in an incubator/accelerator
`[FILL — if none: "No, I have not participated in any incubator or accelerator program."]`

---

## Idea

### Why did you pick this idea to work on? Do you have domain expertise in this area? How do you know people need what you're making?

**Why this idea.** I got here from the technology, not from the market — which I'll be honest about, because it's both the strength and the weakness of this application.

I spent two years going deep on agent infrastructure: I built Livy, a RAG application on the Anthropic SDK, at Talview, and then MCP tool servers for LocalityAI. Working with MCP daily, one thing became obvious. Agents are getting rapidly better at *deciding* things and are still completely unable to *do* things in the physical world near you. The gap isn't model capability — it's that nothing local is exposed in a form an agent can call. Every existing booking integration was built for a human clicking a button, and an agent can't use it. Somebody has to build the layer that makes local inventory agent-callable, and it looked to me like a protocol and data-modeling problem, which is what I'm good at.

**Domain expertise.** Deep on the technical side: 8 years shipping production systems, Staff Frontend Engineer leading 7–10 people, and I've personally built every layer of this — multi-tenant data isolation, geospatial search, the MCP tool ecosystem, the agentic backend, mobile and web clients, and the production infrastructure. Solo. That's the specific expertise this problem needs: it is fundamentally a systems and protocol problem, and there are not many people who have both shipped consumer products at scale and built production MCP infrastructure.

Where I'm thinner is local-business operations. I have not run a clinic. `[FILL — if you have any real conversations with clinic owners, salon owners, or service businesses, put them here, with numbers: "I've spoken with N clinic owners in Bengaluru and..." Even 5 conversations changes how this reads. If you haven't had any, have five this week — before you submit.]`

**How I know people need it.** The honest answer is that I have strong evidence for the technical thesis and weaker evidence for the demand, and I'd rather say that than dress it up.

What I'm confident about: the direction of consumer behaviour is not speculative. Assistants are moving from answering to acting; MCP exists precisely because the labs know agents need to reach real systems; and the agent-commerce protocols announced over the last year confirm every major player expects this. On the supply side, the gap is visible without a survey — the overwhelming majority of local clinics and service businesses in India have no online booking at all, and the ones that do sit inside aggregators that take a large cut and own the customer relationship.

What I don't yet have is paying businesses. `[FILL if you have any signal at all — a waitlist, businesses who said yes, anyone who asked when it launches.]` Getting that is the entire point of the next three months, and it's what I'd use the batch for.

### Who are your competitors? What do you understand about your business that they don't?

**Three groups.**

*Vertical booking aggregators* — Practo, Zocdoc, Urban Company, Fresha. They own local booking demand today. But they're built as destinations: the whole business model depends on the customer coming to their app, seeing their ranked list, and their taking a cut for the introduction. An agent that books directly is an existential threat to that model, not an opportunity, which makes them structurally slow to expose their inventory to agents. They'd be disintermediating themselves.

*Horizontal booking infrastructure* — Calendly, Cal.com, and the various scheduling APIs. Good at scheduling, but they have no discovery layer and no notion of local. An agent asking "who near me can do this on Saturday" gets no answer from them.

*The agent-commerce protocol layer* — the payment and checkout protocols the big platforms are standardizing. These are complementary rather than competitive: they solve how an agent pays, not what it can find or book locally. I'd expect to sit on top of them.

**What I think I understand that they don't.**

First, **the hard part isn't the agent, it's the inventory being real.** Anyone can wrap an LLM around a directory listing. Making an agent able to say "yes, 11:30 on Saturday is genuinely open" requires the business's actual calendar, which means you have to build the boring operational software — scheduling, payments, commissions, tenant isolation — that they'd never adopt for an AI reason. I've already built that layer. The agent surface is the wedge; the operational system is the moat.

Second, **the constraint is trust, not capability, and that's an architecture decision.** Booking is a state-changing action against a stranger's business under multi-tenant isolation. If a model can be prompted into crossing a tenant boundary or creating a false booking, the product is unshippable regardless of how good the demo looks. I enforce isolation in the data layer through Prisma and Hasura permissions rather than in the prompt, because a prompt instruction is a suggestion and a row-level constraint is a guarantee. Most teams approaching this from the AI side will learn that the expensive way.

Third, **whoever gets there first accrues a real advantage.** Consumers won't maintain relationships with dozens of local-business apps; they'll ask one assistant. The layer the assistants call becomes the default, and the businesses on it get demand the others don't.

### How do or will you make money? How much could you make?

**Model — three streams, in the order we'd turn them on:**

1. **SaaS subscription from businesses.** The operational software — bookings, calendar, payments, staff management — at roughly ₹1,000–3,000/month (~$12–36) per business. This is the base, and it's what makes their inventory real enough to be agent-callable.
2. **Transaction fee on agent-originated bookings.** A percentage on bookings that come through the agent channel, which is demand the business would not otherwise have had. This is the one that scales with the thesis: as more consumers ask assistants to do things, this line grows without us doing anything.
3. **Payments.** Take rate on payments processed through the platform once volume justifies it.

Deliberately *not* an ads/ranking model. The moment you monetize ranking, you have an incentive to give the agent a worse answer, and being the trustworthy layer is the whole asset.

**Size, best estimate.** India alone has millions of small local service businesses — clinics, salons, car care, rentals — and the addressable slice is the several million with any transaction volume worth software. At 100,000 businesses on a ~₹2,000/month subscription that's roughly ₹240 crore (~$29M) in ARR from subscriptions alone, before any transaction revenue. Layer a 5–10% take on agent-originated bookings and the transaction line plausibly exceeds subscriptions at scale, because it grows with agent adoption rather than with sales headcount.

The bigger version isn't India-specific. The problem — local inventory not being agent-callable — is identical in every market, and because MCP is an open protocol the same integration surface works everywhere. If agent-mediated commerce becomes a meaningful share of local transactions, the layer that intermediates it is a very large business. That's the bet, and I'd rather state it as a bet than pretend the number is knowable.

### If you had any other ideas you considered applying with, please list them.

> ⚠️ **Don't skip this.** YC says explicitly that they sometimes fund the thing listed here instead. It's free option value. Below are three drawn from what you've actually built — edit or replace with what genuinely interests you, but list *something*.

1. **Generative UI infrastructure for agents.** Agents are stuck returning text and static cards. I'm already building an MCP server on Google's A2UI protocol so an agent can render a live, interactive component — a real booking calendar, a real seat map — inside the conversation. That could be a company on its own: the rendering and component layer for agentic interfaces, independent of any vertical.

2. **MCP infrastructure tooling.** Building production MCP servers surfaced a set of problems nobody has solved well: tool-selection accuracy degrades as catalogs grow past a few dozen tools, there's no good observability for multi-step tool chains, and no standard way to test whether a tool surface is safe against a model that's confidently wrong. I hit all of these building a 47-tool catalog. Datadog-for-agent-tool-layers is a real gap.

3. **Agent-safe data access for multi-tenant SaaS.** Every B2B SaaS company will want to let customers point an LLM at their own data, and almost all of them will get tenant isolation wrong when they do, because they'll enforce it in the prompt. A drop-in layer that enforces row-level isolation and action permissions beneath the tool surface is unglamorous and probably necessary.

---

## Equity

- **Have you formed ANY legal entity yet?** → **Yes**. Veerluit Private Limited, incorporated in India `[FILL: month/year]`.
- **Have you taken any investment yet?** → `[FILL — presumably No]`
- **Are you currently fundraising?** → `[FILL — presumably No. Saying No is fine and slightly cleaner.]`

---

## Curious

### What convinced you to apply to Y Combinator? Did someone encourage you to apply? Have you been to any YC events?

`[FILL the personal specifics — did anyone encourage you? Have you been to any YC event or done Startup School? Answer honestly; "no" is fine.]`

Two things.

The first is that I know exactly what my gap is. I can build anything — I built this entire platform alone while working a full-time staff engineering job — but I have never sold anything, and I've now proven that to myself by spending `[N]` months producing a technically complete product with zero users. That's a solvable problem, and it's precisely what YC is good at forcing: talk to users, launch before you're ready, do things that don't scale. I don't need help with the code.

The second is timing. The window where the agent transaction layer for local commerce is unclaimed is not going to stay open. Three months of YC's pace is worth more to me right now than a year of my own.

`[If applicable: "X encouraged me to apply" / "I've followed YC's material for years and worked through Startup School."]`

### How did you hear about Y Combinator?
`[FILL — e.g. "Through Hacker News and YC's essays, which I've read for years as an engineer." Answer honestly; this one isn't scored.]`

---

## Batch Preference
**Fall 2026**

---

# ⚠️ Before you submit — read this

**1. Your biggest weakness is scope, and it's fixable in an afternoon.**
The application currently says you serve clinics, ecommerce, rentals, car care, parlors, and dairy — 46 business types. To a YC reader that says *this founder hasn't chosen*, and breadth from a pre-launch solo founder reads as avoidance, not ambition. Your own build tells you where to point: you have 13 clinic tools and a 47-tool healthcare catalog. **Healthcare/clinics is the deepest thing you've built.** Consider rewriting the description, the product answer, and the 50-char line around clinics specifically — "Let AI agents book appointments at local clinics" — and mention the multi-vertical taxonomy only as evidence the architecture generalizes. A narrow wedge with a real first customer beats a platform with none, every time.

**2. Get five conversations before you submit.**
The single weakest answer above is "how do you know people need this," because right now the honest answer is that you inferred it. Five conversations with clinic owners in Bengaluru this week — asking what they use today, what a no-show costs them, whether they'd pay — would let you replace inference with evidence in the one place the application is soft. That's a bigger improvement than anything I can write.

**3. The demo video is doing most of the work.**
Pre-launch, no revenue, solo founder — the reviewer's real question is "can this person build?" A screen recording of someone typing a booking request into Claude and a real appointment landing in the app answers that in 30 seconds. Prioritize it over polishing prose.

**4. Fill the two dates.** "How long full-time" is a question YC weighs heavily, and you now have the strongest possible version of that answer — you left a staff engineering job for this. Don't leave it blank.

**5. One thing to square away.** You're interviewing for a full-time frontend role while applying to YC as a full-time founder. That's your call and both are reasonable hedges — but the YC answers above state you're full-time on LocalityAI, so make sure that's what you'd say on a call. If an interview converts before YC decides, the answer changes.
