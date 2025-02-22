export const App = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl print:p-0 print:max-w-none">
      <header className="mb-6 pb-6 border-b border-gray-300 print:border-gray-400">
        <h1 className="text-3xl font-bold mb-2">Trideep Kumar Das</h1>
        <div className="flex flex-wrap gap-1 text-sm">
          <span className="mr-1 font-bold">Email:</span>
          <a
            className="text-blue-700"
            href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`}
          >
            {import.meta.env.VITE_EMAIL_ADDRESS}
          </a>
          <span className="mr-1 ml-2 font-bold">Phone:</span>
          <a
            className="text-blue-700"
            href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}
          >
            {import.meta.env.VITE_PHONE_NUMBER}
          </a>
        </div>
        <p className="text-sm">
          <span className="mr-1 font-bold">Address:</span>
          <span>{import.meta.env.VITE_ADDRESS}</span>
        </p>
        <div className="text-sm">
          <span className="mr-1 font-bold">Github: </span>
          <a
            className="text-blue-700"
            href="https://github.com/trdp30"
            target="_blank"
          >
            https://github.com/trdp30
          </a>

          <span className="mr-1 ml-2 font-bold">LinkedIn: </span>
          <a
            className="text-blue-700"
            href="https://linkedin.com/in/trideep-das-817962133"
            target="_blank"
          >
            https://linkedin.com/in/trideep-das-817962133
          </a>
        </div>
      </header>

      <section className="mb-6 pb-6 border-b border-gray-300 print:border-gray-400">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p className="text-sm">
          I'm currently a Staff Frontend Engineer at Talview, leading a frontend
          team of 7-10 engineers (from junior to mid-senior levels) for the past
          3 years. With 7 years of experience in frontend development, majorly
          with React, I specialize in building web applications from scratch to
          production deployment. I have a proven track record of leading
          end-to-end frontend development projects, architecting scalable
          systems, and mentoring engineering teams. Skilled in aligning
          technical solutions with strategic business goals, I actively elevate
          team performance by fostering a culture of technical excellence and
          continuous improvement through technical leadership.
        </p>
      </section>

      <section className="mb-6 pb-6 border-b border-gray-300 print:border-gray-400">
        <h2 className="text-xl font-semibold mb-2">Key Skills</h2>
        <ul className="list-disc list-inside text-sm">
          <li>
            <strong className="text-base">Frontend Development:</strong>{" "}
            Javascript, HTML/CSS, ReactJs, EmberJs, BackboneJs, Redux,
            Redux-saga, RTK Query, TailwindCss, Material UI, Shadcn/ui
          </li>
          <li>
            <strong className="text-base">System Architecture:</strong> Scalable
            frontend architectures, Webpack configuration, GraphQL, Apollo
            Client, REST APIs, WebSocket
          </li>
          <li>
            <strong className="text-base">Leadership & Mentorship:</strong> Team
            growth facilitation, code quality standardization, cross-functional
            collaboration
          </li>
          <li>
            <strong className="text-base">Testing & Performance:</strong> Jest,
            React testing library(RTL), Storybook, Lighthouse, Sentry,
            performance optimization (40% load reduction, 85%+ test coverage)
          </li>
        </ul>
      </section>

      <section className="mb-6 pb-6 border-b border-gray-300 print:border-gray-400">
        <h2 className="text-xl font-semibold mb-2">Professional Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">
            Staff Software Engineer - Frontend
          </h3>
          <p className="text-sm italic">
            Talview | Bengaluru, India | June 2018 – Present
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>
              Technical Leadership: Led large-scale frontend projects, defining
              scalable architectures for high-performance applications,
              increasing application load speed by 40% and enhancing system
              stability.
            </li>
            <li>
              Cross-Functional Collaboration: Worked closely with product
              managers and UX designers to transform complex requirements into
              intuitive, performant user interfaces.
            </li>
            <li>
              Mentorship: Guided and mentored junior and senior engineers,
              achieving 40-60% improvements in their coding skills and
              productivity.
            </li>
            <li>
              Code Quality and Performance Optimization: Conducted rigorous code
              reviews, establishing benchmark code quality standards recognized
              organization-wide.
            </li>
            <li>
              Top GitHub Contributor: Achieved 5,590 GitHub contributions in the
              last year, the highest contribution in the organization,
              showcasing consistent and impactful engineering output.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Key Projects</h3>
          <div className="mb-2">
            <h4 className="font-semibold">
              Talview Orchestration Platform (TOP)
            </h4>
            <p className="text-sm italic">
              ReactJs, Redux, Webpack, TailwindCss, Shadcn/ui, GraphQL, Apollo
              Client, WebSocket, Socket.io, Redux-saga, Storybook, WebRTC,
              Sentry, Docker, Kubernetes, GitHub Actions, Jest, RTL, Storybook
            </p>
            <ul className="list-disc list-inside text-sm mt-1">
              <li>
                Led the design and enhancement of the orchestration platform,
                implementing scalable frontend architectures using Webpack,
                React, Redux, and Redux-saga, with real-time data pipelines
                powered by WebSocket integrated through Apollo Client and
                `graphql-ws`.
              </li>
              <li>
                The TOP project comprises multiple applications, with total
                lines of code ranging from 19,884 in the largest application to
                5,909 in the smallest, demonstrating expertise in managing
                complex codebases.
              </li>
              <li>
                Utilized Docker to containerize applications, ensuring
                consistency across development, testing, and production
                environments.
              </li>
              <li>
                Deployed applications using Kubernetes, automating deployment,
                scaling, and management of containerized applications.
              </li>
              <li>
                Automated the deployment process using GitHub Actions, enabling
                continuous integration and continuous deployment (CI/CD) for
                seamless updates and rollbacks.
              </li>
            </ul>
          </div>

          <div className="mb-2">
            <h4 className="font-semibold">Proview Live Proctor</h4>
            <p className="text-sm italic">
              ReactJs, Redux, WebSocket, GraphQL, Apollo Client, WebRTC,
              Socket.io, Webpack, Sentry
            </p>
            <ul className="list-disc list-inside text-sm mt-1">
              <li>
                Spearheaded a real-time proctoring system integrating real-time
                chat and video analysis, significantly improving candidate
                monitoring and security.
              </li>
              <li>
                Designed and implemented real-time streaming using WebRTC,
                leveraging Socket.io, Apollo Client (GraphQL), Webpack
                configuration, and Sentry for error tracking, ensuring stable
                and secure live proctoring experiences.
              </li>
            </ul>
          </div>

          <div className="mb-2">
            <h4 className="font-semibold">Proview Client</h4>
            <p className="text-sm italic">
              BackboneJs, Grunt, Browserify, jQuery, Socket.io, Getstream.io,
              Sentry
            </p>
            <ul className="list-disc list-inside text-sm mt-1">
              <li>
                Developed an event-capture platform with features like multiple
                face detection, copy/paste tracking, and screen activity
                recording for enhanced candidate evaluation.
              </li>
              <li>
                Integrated Socket.io based real-time notifications, enhancing
                platform responsiveness, and used Grunt and Browserify for
                efficient build processes.
              </li>
            </ul>
          </div>

          <div className="mb-2">
            <h4 className="font-semibold">Recruit & Candidate Platforms</h4>
            <p className="text-sm italic">
              EmberJs, Ember-data, Semantic UI, Sentry
            </p>
            <ul className="list-disc list-inside text-sm mt-1">
              <li>
                Oversaw end-to-end development and maintenance, optimizing
                performance and enhancing user engagement by 30%.
              </li>
              <li>
                Refactored legacy codebases, achieving performance enhancements
                and improved maintainability, using Ember-data for data
                management and Semantic UI for consistent UI components.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6 pb-6 border-b border-gray-300 print:border-gray-400">
        <h2 className="text-xl font-semibold mb-2">Achievements</h2>
        <ul className="list-disc list-inside text-sm">
          <li>
            5,590 GitHub Contributions in 2024: Achieved the highest GitHub
            contribution in the organization for the year.
          </li>
          <li>
            30% Increase in User Engagement: Developed and launched new features
            that drove significant user engagement improvements.
          </li>
          <li>
            40% Reduction in Load Time: Optimized application performance,
            enhancing overall user satisfaction.
          </li>
          <li>
            85% Test Coverage: Elevated test coverage across projects, ensuring
            robust and reliable software solutions.
          </li>
          <li>
            Mentorship Impact: Successfully mentored developers, boosting
            productivity by up to 60%.
          </li>
          <li>
            Multiple Engineering Awards: Recognized as Production Engineering
            Champion, Annual Champion, and Engineering Champion for impactful
            contributions.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        <p className="text-sm">
          <strong>Master of Computer Applications (MCA)</strong>
          <br />
          Sikkim Manipal Institute of Technology (SMIT) | 2015 – 2018
        </p>
      </section>
    </div>
  );
};

export default App;
