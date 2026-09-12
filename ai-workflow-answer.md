# AI-Automated Workflow — Answer Draft

> **Q:** Describe a workflow you automated using AI. What was the workflow, what did you build, and what was the result? Be specific: name the tool, approximate scale (how many people, how often, how much time saved), and at least one thing that broke or surprised you. We're more interested in what you learned than in how impressive the result was.

---

## Answer (short)

**Workflow:** Enforcing frontend consistency across all engineers in the org, in a single Nx monorepo spanning all our applications, modules, and shared libraries (React Native apps, React web apps, and micro-frontends). Reviews kept flagging the same things — inconsistent component structure, hardcoded colors/spacing instead of design tokens, and messy commits.

**What I built — with Claude Code Skills + Hooks:**
- **Scaffolding skills** (`create-component`, `create-rn-screen`, `redux-slice-pattern`) that generate components in our exact folder-file convention (logic, JSX, types, styles split out) and wire up the responsive design-token system so nothing is hardcoded.
- A **`git commit` hook** that blocks any commit until it's reviewed against a checklist — folder structure, SOLID/KISS, Redux patterns, responsive tokens — and enforces `Fixes #N` commit messages.

**Result:** This is now the enforced standard across the org — every new component and every commit has to follow it, every time, no exceptions — running many times a day. It removed most structural/naming/hardcoded-value nitpicks from code review, so reviews focused on real logic, and new joiners shipped on-pattern code immediately. The net outcome: development speed went up and PR review time dropped, so PRs get merged faster — and features and bug fixes ship faster as a result.

**What surprised me:** the commit hook is a *prompt-based* gate, and I realized the AI could pass it by just emitting the "Approved" phrase **without actually doing the review** — it was trusting a string, not a verified action. Lesson: a guardrail that checks for the *appearance* of compliance isn't one. The real wins came from the scaffolds enforcing rules *deterministically* (they simply can't emit a hardcoded value), with the hook as a checklist, not a security boundary.

---

## TODO / points to update

- [ ] Add a concrete **time-saved / scale** number (e.g. review comments per PR, minutes saved per component).
- [ ]
- [ ]

---

## Company incorporation context (Veerluit)

```
Company context for incorporation

Proposed name: Veerluit (Private Limited)
Product: LocalityAI

Nature of business:
Veerluit is a technology / software company. We build and operate an
AI-powered, multi-tenant online platform (mobile and web apps) that
connects users with local businesses and service providers — helping
people discover nearby providers, book appointments/services, and
transact online.

The platform serves multiple sectors, including healthcare/clinics,
retail and e-commerce, rentals, car care, personal care, and similar
local services. It also includes AI/LLM-based tools and services
(intelligent search, assistants, and automation) built on top of the
platform.

Primary activities:
- Developing and licensing software products, mobile and web applications
- Operating an online marketplace/platform for discovery, booking, and
  commerce of local goods and services
- Providing AI/machine-learning based tools, technology, consulting, and
  support services
- Enabling online payments/transactions between users and service
  providers on the platform

Revenue: SaaS subscriptions, platform/convenience fees, and advertising,
plus related technology services.

Please draft the Main Objects clause accordingly (software/technology
platform + online marketplace + AI services). Let me know if you need
NIC code suggestions or any additional detail.
```

---

## Reference — what actually exists (for accuracy while editing)

- **Skills** (`workspace-super-app/.claude/skills/`): `create-component`, `create-rn-screen`, `create-rn-hook`, `redux-slice-pattern`, `create-android-*`, `module-structure-rules`, `consumer-design-implementation`.
- `create-component` scaffolds: `index.tsx` (logic/Redux), `Content.tsx` (JSX only), `types.d.ts`, `constants.ts`, `helpers.ts`, `style.ts` (responsive tokens). Project-aware (localityai RN = responsive system required; super-app web; MFEs).
- `consumer-design-implementation`: Figma/HTML-CSS → centralized `designTokens.ts` (colors light+dark, typography, 4px-baseline spacing, radius, shadows) → theme-based styling, no hardcoded values.
- **Hooks** (PreToolUse Bash, in `~/.claude/settings.json` + project `.claude/settings.json`):
  - `git commit` gate — requires explicit request + review against folder structure, SOLID+KISS, Redux/Redux-saga, responsive tokens.
  - Commit message must use `Fixes #N`.
  - `git add` — validates `.md` file locations (root allowlist / `/docs/` / `.github` templates).
