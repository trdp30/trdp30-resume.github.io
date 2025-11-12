import { useRef, useState } from "react";
import DownloadButton from "./DownloadButton";

let data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

// if (process.env.NODE_ENV !== "production") {
//   data = {
//     name: "Test test Test",
//     email: "test0@test.com",
//     phone: "1234567890",
//     location: "Address, Dist: Address, Assam, India",
//   };
// }

const role = [
  "Lead Frontend Engineer",
  "Staff Frontend Engineer",
  "UI Manager",
];

export const App = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [targetRoleIndex, setTargetRoleIndex] = useState(0);

  const handleSwitchTargetRole = () => {
    let index = targetRoleIndex;
    if (index === 2) {
      index = 0;
      setTargetRoleIndex(index);
    } else {
      index += 1;
      setTargetRoleIndex(index);
    }
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
        <header className="mb-4 pb-3 border-b border-black">
          <h1 className="text-3xl font-bold mb-1 uppercase tracking-tight text-black opacity-[0.8] print:opacity-100">
            {data.name.toUpperCase()}
          </h1>
          <p
            className="text-lg font-bold mb-2 text-black"
            onClick={handleSwitchTargetRole}
          >
            {role[targetRoleIndex]} | React & TypeScript Expert | Scalable
            System Architect
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

        {/* Professional Summary */}
        <section className="mb-4 pb-5 border-b relative">
          <h2 className="text-xl font-bold mb-3 text-black">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-black">
            Seasoned <strong>Frontend Engineering Leader</strong> with{" "}
            <strong>7+ years of experience</strong> in architecting and
            delivering{" "}
            <strong>high-performance, scalable web applications</strong> across{" "}
            <strong>SaaS and enterprise platforms</strong>. Currently serving as{" "}
            <strong>Staff Frontend Engineer</strong> at Talview, leading a team
            of <strong>7-10 engineers</strong> and driving{" "}
            <strong>end-to-end frontend initiatives</strong> from design to
            production deployment. Adept at building{" "}
            <strong>modular architectures</strong> using
            <strong>
              {" "}
              React, TypeScript, GraphQL/RESTful API, and Webpack
            </strong>
            , and integrating <strong>CI/CD pipelines</strong> with{" "}
            <strong>Docker</strong>. Proven success in improving application
            performance by <strong>40%</strong>, boosting user engagement by{" "}
            <strong>30%</strong>, and achieving{" "}
            <strong>85%+ test coverage</strong>. Recognized for{" "}
            <strong>technical leadership</strong>,
            <strong> cross-functional collaboration</strong>, and{" "}
            <strong>mentorship excellence</strong>, consistently aligning
            engineering strategy with organizational growth and innovation.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-4 pb-5 relative border-b">
          <h2 className="text-xl font-bold mb-3 text-black">
            Core Competencies
          </h2>
          <ul className="text-sm space-y-2 text-black">
            <li className="flex items-start">
              <div>
                <span className="font-semibold">
                  Frontend Architecture & Development
                </span>
                <span className="mx-2">|</span>
                <br />
                <span>
                  React.js / EmberJs / React Native & TypeScript / Javascript /
                  Webpack / Vite / Nx monorepo / Micro-Frontend
                </span>
              </div>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Scalable System Design</span>
              <span className="mx-2">|</span>
              <span>Mentorship & Team Leadership</span>
            </li>
            <li className="flex items-center">
              <span>Redux / RTK Query / Redux-Saga</span>
              <span className="mx-2">|</span>
              <span>GraphQL / Apollo Client / RESTful API / Axios</span>
            </li>
            <li className="flex items-center">
              <span>WebSocket / WebRTC / Firebase Realtime Database</span>
              <span className="mx-2">|</span>
              <span>CI/CD (GitHub Actions, Docker)</span>
            </li>
            <li className="flex items-center">
              <span>NodeJs / Hasura</span>
              <span className="mx-2">|</span>
              <span>Firebase Console / GCP Cloud Run</span>
            </li>
            <li className="flex items-center">
              <span>HTML5 / CSS3 / Tailwind / Material UI / Shadcn/UI</span>
            </li>
            <li className="flex items-center">
              <span>
                Unit, Integration and End-to-End Testing (Jest, RTL, Cypress,
                Storybook)
              </span>
            </li>
            <li className="flex items-center">
              <span>Agile Delivery</span>
              <span className="mx-2">|</span>
              <span>Cross-Functional Collaboration</span>
              <span className="mx-2">|</span>
              <span>Performance Optimization</span>
            </li>
          </ul>
        </section>

        {/* Prompt Engineering */}
        <section className="mb-4 pb-5 relative border-b">
          <h2 className="text-xl font-bold mb-3 text-black">
            Prompt Engineering
          </h2>
          <ul className="text-sm space-y-2 text-black">
            <li className="flex items-center">
              <span>
                <strong>Cursor</strong>
              </span>
              <span className="mx-2">|</span>
              <span>
                <strong>Windsurf</strong>
              </span>
              <span className="mx-2">|</span>
              <span>
                <strong>Claude Cloud</strong>
              </span>
              <span className="mx-2">|</span>
              <span>
                <strong>Codex</strong>
              </span>
            </li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-4 pb-5 border-b relative">
          <h2 className="text-xl font-bold mb-3 text-black">
            Professional Experience
          </h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-black">
              Staff Software Engineer - Frontend
            </h3>
            <p className="text-sm italic mb-3 text-black">
              Talview | June 2018 - Present | Bengaluru, India
            </p>

            <div className="mb-3">
              <h4 className="font-semibold text-base mb-2 text-black">
                Leadership & Architecture:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Lead <strong>frontend architecture</strong> and development
                  across multiple
                  <strong> SaaS platforms</strong>, ensuring{" "}
                  <strong>scalability, maintainability</strong>, and
                  <strong> optimized performance</strong>.
                </li>
                <li>
                  Defined reusable <strong>design systems</strong> and{" "}
                  <strong>component libraries</strong>, reducing redundant code
                  and improving development velocity by <strong>35%</strong>.
                </li>
                <li>
                  Collaborated with <strong>product managers</strong>,{" "}
                  <strong>backend engineers</strong>, and{" "}
                  <strong>UX teams</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-base mb-2 text-black">
                Performance & Quality:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Optimized <strong>application architecture</strong>, achieving
                  a <strong>40% reduction in load time</strong> and enhanced
                  <strong> system stability</strong>.
                </li>
                <li>
                  Established comprehensive{" "}
                  <strong>unit and integration testing frameworks</strong> using{" "}
                  <strong>Jest</strong> and{" "}
                  <strong>React Testing Library</strong>, increasing coverage to{" "}
                  <strong>85%+</strong>.
                </li>
                <li>
                  Introduced <strong>automated deployment pipelines</strong> via{" "}
                  <strong>GitHub Actions</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-base mb-2 text-black">
                Mentorship & Delivery:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Mentored <strong>junior and mid-level engineers</strong>,
                  improving <strong>team productivity</strong> and{" "}
                  <strong>code quality</strong>.
                </li>
                <li>
                  Standardized <strong>coding guidelines</strong> and{" "}
                  <strong>code-review processes</strong>.
                </li>
                <li>
                  Delivered multiple{" "}
                  <strong>enterprise-grade web applications</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-base mb-2 text-black">
                Key Achievements:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Achieved <strong>5,590 GitHub contributions in 2024</strong>,
                  highest in organization history.
                </li>
                <li>
                  Recognized as Production Engineering Champion, Annual
                  Champion, and Engineering Champion.
                </li>
                <li>
                  Instrumental in driving{" "}
                  <strong>30% growth in user engagement</strong> through{" "}
                  <strong>UI/UX enhancements</strong> and{" "}
                  <strong>feature optimization</strong>.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3 text-black">
              Key Projects
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold text-base text-black mb-2">
                Talview Orchestration Platform (TOP)
              </h4>
              <p className="text-sm italic mb-2 text-black">
                React.js, TypeScript, GraphQL, Redux-Saga, WebSocket, Webpack,
                Docker, GitHub Actions, Nx Monorepo Workspace
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Designed and led <strong>frontend architecture</strong>.
                </li>
                <li>
                  Containerized applications using <strong>Docker</strong>.
                </li>
                <li>
                  Integrated <strong>GraphQL subscriptions</strong> with{" "}
                  <strong>WebSocket</strong> for{" "}
                  <strong>real-time data pipelines</strong>.
                </li>
                <li>
                  Automated <strong>CI/CD pipelines</strong> using{" "}
                  <strong>GitHub Actions</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-base text-black mb-2">
                Proview Live Proctor
              </h4>
              <p className="text-sm italic mb-2 text-black">
                React.js, WebRTC, WebSocket, GraphQL, Apollo Client, Socket.io,
                Sentry
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Developed a <strong>real-time proctoring platform</strong>{" "}
                  integrating <strong>live video streaming, chat</strong>, and{" "}
                  <strong>analytics</strong>.
                </li>
                <li>
                  Implemented <strong>WebRTC-based video streaming</strong> with{" "}
                  <strong>Socket.io</strong> and
                  <strong> Apollo Client</strong> for{" "}
                  <strong>real-time communication</strong>, ensuring{" "}
                  <strong>stable and secure</strong> live proctoring
                  experiences.
                </li>
                <li>
                  Enhanced <strong>system reliability and monitoring</strong>{" "}
                  using <strong>Sentry</strong> for
                  <strong> error tracking</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-base text-black mb-2">
                Proview Client
              </h4>
              <p className="text-sm italic mb-2 text-black">
                Backbone.js, Grunt, Browserify, Socket.io, Getstream.io, Sentry
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Delivered advanced <strong>event-tracking features</strong>{" "}
                  such as <strong>multi-face detection</strong>,{" "}
                  <strong>copy/paste monitoring</strong>, and{" "}
                  <strong>screen recording</strong>.
                </li>
                <li>
                  Integrated{" "}
                  <strong>Socket.io-based real-time notifications</strong> and
                  <strong> Getstream.io</strong> for{" "}
                  <strong>activity feeds</strong>.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-base text-black mb-2">
                Recruit & Candidate Platforms
              </h4>
              <p className="text-sm italic mb-2 text-black">
                Ember.js, Ember-data, Semantic UI, Sentry
              </p>
              <ul className="list-disc list-inside text-sm space-y-2 text-black">
                <li>
                  Enhanced <strong>user engagement</strong> by{" "}
                  <strong>30%</strong> through
                  <strong> modernized frontends</strong>,{" "}
                  <strong>optimized performance</strong>, and{" "}
                  <strong>restructured legacy codebases</strong>.
                </li>
                <li>
                  Refactored <strong>legacy applications</strong> using{" "}
                  <strong>Ember-data</strong> for{" "}
                  <strong>efficient data management</strong> and{" "}
                  <strong>Semantic UI</strong> for{" "}
                  <strong>consistent UI components</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-4 pb-5 border-b border-black relative">
          <h2 className="text-xl font-bold mb-3 text-black">Achievements</h2>
          <ul className="list-disc list-inside text-sm space-y-2 text-black">
            <li>
              <strong>5,590 GitHub Contributions (2024)</strong> - Highest
              organization-wide record.
            </li>
            <li>
              <strong>40% Load Time Reduction</strong> through{" "}
              <strong>architectural refactoring</strong> and optimized{" "}
              <strong>Webpack configuration</strong>.
            </li>
            <li>
              <strong>85%+ Test Coverage</strong> across all major{" "}
              <strong>frontend modules</strong>.
            </li>
            <li>
              <strong>30% User Engagement Growth</strong> through{" "}
              <strong>strategic feature development</strong> and{" "}
              <strong>UI performance tuning</strong>.
            </li>
            <li>
              Multiple <strong>Engineering Awards</strong> recognizing{" "}
              <strong>technical excellence</strong> and
              <strong> leadership impact</strong>.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="relative">
          <h2 className="text-xl font-bold mb-3 uppercase text-black">
            Education
          </h2>
          <p className="text-sm text-black">
            <strong>Master of Computer Applications (MCA)</strong>
            <br />
            Sikkim Manipal Institute of Technology (SMIT) | 2015 - 2018
          </p>
        </section>
      </div>
    </div>
  );
};

export default App;
