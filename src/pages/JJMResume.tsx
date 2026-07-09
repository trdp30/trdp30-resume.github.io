import { ReactElement, useRef, useState } from "react";
import DownloadButton from "../components/DownloadButton";
import projectsData from "../data/projects.json";

let data = {
  name: "Trideep Kumar Das",
  email: "trdp30@gmail.com",
  phone: "9706055724",
  location: "Bengaluru, India",
};

export const JJMResume = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const boldTechnologies = (text: string, technologies: string[]) => {
    if (!text) return text;
    const keyTerms = [
      "jQuery", "Ajax", "MongoDB", "PostgreSQL", "Node.js", "Express.js",
      "React", "TypeScript", "JavaScript", "GraphQL", "REST API", "MySQL",
      "NoSQL", "SQL", "Firebase", "HTML", "CSS", "Linux", "MVC",
      "Docker", "CI/CD", "Webpack", "Backbone.js", "Ember.js",
      "Enterprise", "report", "API", "deployment", "cloud",
    ];
    const allTerms = [...(technologies || []), ...keyTerms];
    if (allTerms.length === 0) return text;
    const sortedTerms = [...allTerms].sort((a, b) => b.length - a.length);
    const pattern = new RegExp(
      `\\b(${sortedTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
      "gi"
    );
    const parts: (string | ReactElement)[] = [];
    let lastIndex = 0;
    let match;
    pattern.lastIndex = 0;
    const matches: Array<{ index: number; length: number; text: string }> = [];
    while ((match = pattern.exec(text)) !== null) {
      matches.push({ index: match.index, length: match[0].length, text: match[0] });
    }
    matches.forEach((match, idx) => {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(<strong key={`term-${idx}`}>{match.text}</strong>);
      lastIndex = match.index + match.length;
    });
    if (lastIndex < text.length) parts.push(text.substring(lastIndex));
    return parts.length > 0 ? parts : text;
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
        {/* Header */}
        <header className="mb-2 pb-2 border-b-2 border-black" itemScope itemType="https://schema.org/Person">
          <h1 className="text-3xl font-bold mb-1 uppercase tracking-tight text-black">
            {data.name.toUpperCase()}
          </h1>
          <meta itemProp="email" content={data.email} />
          <meta itemProp="telephone" content={`+91-${data.phone}`} />
          <p className="text-base font-bold mb-2 text-black" itemProp="jobTitle">
            Software Developer | Full-Stack | 7.5+ Years | Node.js, React
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-black">
            <span>+91 {data.phone}</span>
            <span>{data.email}</span>
            <a href="https://github.com/trdp30" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
            <a href="https://linkedin.com/in/trideep-das-817962133" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
            <span>{data.location}</span>
          </div>
        </header>

        {/* Summary - Same as FAANG */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Summary</h2>
          <p className="text-sm leading-relaxed text-black">
            <strong>Seasoned Frontend Engineer</strong> with <strong>7.5+ years</strong> of experience architecting 
            <strong> high-performance, scalable web applications</strong> across SaaS and enterprise platforms. 
            Currently serving as <strong>Staff Frontend Engineer</strong> at Talview, leading a team of <strong>7-10 engineers</strong> and driving end-to-end frontend initiatives from design to production deployment. Expert in <strong>React</strong>, <strong>TypeScript</strong>, <strong>GraphQL/RESTful APIs</strong>, <strong>Webpack</strong>, <strong>CI/CD</strong>, and <strong>Docker</strong>. Delivered measurable impact: <strong>40% performance improvement</strong>, <strong>30% user engagement boost</strong>, and <strong>85%+ test coverage</strong>. Recognized for <strong>technical leadership</strong>, <strong>cross-functional collaboration</strong>, and <strong>mentorship excellence</strong>.
          </p>
        </section>

        {/* Technical Skills - JJM Aligned */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Technical Skills</h2>
          <div className="text-sm text-black space-y-1">
            <p><span className="font-semibold">Languages & Frameworks:</span> JavaScript, TypeScript, Node.js, React, React Native, Backbone.js, Ember.js, jQuery, HTML5, CSS3, Tailwind CSS</p>
            <p><span className="font-semibold">Backend & APIs:</span> Node.js, Express.js, GraphQL, REST API, Hasura, API design & integration</p>
            <p><span className="font-semibold">Databases:</span> PostgreSQL, MongoDB, Firebase, Prisma ORM, database relationships & schema design</p>
            <p><span className="font-semibold">Frontend:</span> jQuery, Ajax, React, TypeScript, HTML, CSS, cross-browser compatibility</p>
            <p><span className="font-semibold">Architecture:</span> MVC, Component-Based Architecture, Micro-Frontend, Module Federation, Monorepo</p>
            <p><span className="font-semibold">Server & Deployment:</span> Google Cloud Run, Firebase Hosting, Docker, CI/CD, GitHub Actions, application/web/database server setup (cloud-based)</p>
            <p><span className="font-semibold">Reporting & Documentation:</span> Custom enterprise report generation, technical documentation</p>
            <p><span className="font-semibold">Testing:</span> Jest, React Testing Library, Cypress, Unit/Integration/E2E testing, test plans</p>
            <p><span className="font-semibold">Mobile:</span> React Native, Android Studio, Xcode</p>
            <p><span className="font-semibold">Soft Skills:</span> Communication, project management, requirements analysis, team coordination</p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1.5 text-black">Professional Experience</h2>

          <div className="mb-2">
            <div className="flex justify-between items-start mb-0.5">
              <h3 className="text-lg font-semibold text-black">Staff Frontend Engineer</h3>
              <span className="text-sm text-black font-medium">June 2018 - Present</span>
            </div>
            <p className="text-base font-semibold text-black mb-1">Talview</p>
            <p className="text-sm italic mb-1.5 text-black">Bengaluru, India</p>

            <ul className="list-disc list-inside text-sm space-y-1 text-black">
              <li>Led full-stack architecture and development across multiple SaaS platforms, ensuring scalability, maintainability, and performance.</li>
              <li>Architected scalable systems serving thousands of concurrent users, achieving 40% reduction in load time through code splitting, lazy loading, and caching.</li>
              <li>Built GraphQL backends using Hasura DDN and Node.js Lambda connectors for custom business logic, multi-tenant data isolation, with Express.js services on Google Cloud Run.</li>
              <li>Designed and built custom enterprise report generation tools for internal analytics and stakeholder dashboards.</li>
              <li>Developed applications using MongoDB for document-based data storage and real-time features.</li>
              <li>Designed direct-to-cloud file handling with S3 multipart uploads, robust error handling, improving upload reliability to 98%.</li>
              <li>Led migration from legacy Ember.js to React/TypeScript micro-frontend architecture, improving development velocity by 35%.</li>
              <li>Established testing infrastructure with Jest, React Testing Library, Cypress, achieving 85%+ coverage and reducing production bugs by 70%.</li>
              <li>Implemented real-time proctoring using WebRTC, WebSocket, video.js, HLS streaming.</li>
              <li>Configured application deployment on Google Cloud Run, Firebase Hosting, Docker, with CI/CD pipelines.</li>
              <li>Led team of 7–10 engineers, establishing coding standards, code reviews, and documentation practices.</li>
              <li>Collaborated with product managers, backend engineers, UX/UI designers, and QA for end-to-end delivery.</li>
            </ul>
          </div>
        </section>

        {/* Work Projects - All from projects.json */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1.5 text-black">Key Work Projects</h2>

          {projectsData.projects.map((project, index) => (
            <div key={index} className="mb-2">
              <h4 className="font-semibold text-base text-black mb-0.5">Talview {project.name}</h4>
              <p className="text-sm text-black mb-0.5">{project.description}</p>
              {project.technologies && (
                <p className="text-xs text-black mb-1 italic">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
              )}
              {project.technologyUsageDescription && (
                <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
                  {project.technologyUsageDescription
                    .split(". ")
                    .filter((s) => s.trim().length > 0)
                    .map((sentence, idx) => {
                      const text = sentence.trim().endsWith(".") ? sentence.trim() : `${sentence.trim()}.`;
                      return <li key={idx}>{boldTechnologies(text, project.technologies || [])}</li>;
                    })}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Personal Projects */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1.5 text-black">Personal Projects</h2>

          {/* Jatayat */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">Jatayat - Real-Time Transportation Tracking</h3>
              <span className="text-xs text-black italic">React Native, GraphQL, Firebase, PostgreSQL, Native Android (Kotlin)</span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>Built real-time vehicle tracking platform with React Native mobile apps (iOS/Android) and GraphQL backend, processing vehicle fleets with sub-second location updates.</li>
              <li>Architected native Android modules (Kotlin) for high-performance geospatial calculations with parallel batch processing, supporting large-scale concurrent users with background location tracking.</li>
            </ul>
          </div>

          {/* Appointment Booking */}
          <div className="mb-2">
            <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
              <h3 className="text-base font-semibold text-black">Appointment Booking System - Multi-Tenant Clinic Management</h3>
              <span className="text-xs text-black italic">React, Module Federation, Hasura DDN, PostgreSQL, Node.js, Firebase</span>
            </div>
            <ul className="list-disc list-inside text-sm space-y-0.5 text-black ml-2">
              <li>Developed multi-tenant appointment booking system using Module Federation and Hasura DDN, implementing real-time queue management with PostgreSQL triggers.</li>
              <li>Built GraphQL backend with Hasura DDN and Node.js Lambda connectors for custom business logic, Express.js authentication deployed on Google Cloud Run.</li>
            </ul>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-2 pb-2 border-b border-black">
          <h2 className="text-xl font-bold mb-1 text-black">Key Achievements & Recognition</h2>
          <ul className="list-disc list-inside text-sm space-y-0.5 text-black">
            <li>5,590 GitHub contributions in 2024 (highest in organization)</li>
            <li>Production Engineering Champion, Annual Champion, Engineering Champion</li>
            <li>40% reduction in load time, 60% reduction in server load through optimization</li>
            <li>Led migration of legacy codebase to modern React/TypeScript, improving velocity by 35%</li>
          </ul>
        </section>

        {/* Education */}
        <section className="relative">
          <h2 className="text-xl font-bold mb-1 uppercase text-black">Education</h2>
          <p className="text-sm text-black">
            <strong>Master of Computer Applications (MCA)</strong><br />
            Sikkim Manipal Institute of Technology (SMIT) | 2015 - 2018
          </p>
        </section>
      </div>
    </div>
  );
};

export default JJMResume;
