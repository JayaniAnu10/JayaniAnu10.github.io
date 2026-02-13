import { Eye, ExternalLink, MoveUp } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import RepoButton from "./buttons/RepoButton";
import { useState } from "react";
import heroImage from "../assets/daybee.lk.png";

const Project_1 = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const devRepos = [
    {
      name: "Repository · Deployed",
      link: "https://github.com/JayaniAnu10/Smart-Part-time-job-finder",
    },
    {
      name: "Backend",
      link: "https://github.com/JayaniAnu10/Smart-Part-time-job-finder/tree/main/backend/part-time-backend",
    },
    {
      name: "Frontend",
      link: "https://github.com/JayaniAnu10/Smart-Part-time-job-finder/tree/main/frontend/part-time-react",
    },
  ];

  const techStack = [
    { icon: "springboot", name: "Spring Boot" },
    { icon: "spring", name: "Spring" },
    { icon: "java", name: "Java" },
    { icon: "springsecurity", name: "Spring Security" },
    { icon: "hibernate", name: "Hibernate" },
    { icon: "database", name: "JPA" },
    { icon: "react", name: "React" },
    { icon: "reactquery", name: "React-Query" },
    { icon: "vite", name: "Vite" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "tailwindcss", name: "Tailwind" },
    { icon: "shadcnui", name: "Shadcn UI" },
    { icon: "mysql", name: "MySQL" },
    { icon: "jwt", name: "JWT" },
    { icon: "rest", name: "RestAPI" },
    { icon: "springai", name: "Spring AI" },
    { icon: "postman", name: "Postman" },
    { icon: "swagger", name: "Swagger" },
    { icon: "github", name: "GitHub" },
    { icon: "githubactions", name: "GitHub Actions" },
    { icon: "docker", name: "Docker" },
    { icon: "nginx", name: "Nginx" },
    { icon: "digitalocean", name: "Digital Ocean" },
    { icon: "leaflet", name: "Leaflet.js" },
    { icon: "openstreetmap", name: "OpenStreetMap" },
    { icon: "openai", name: "OpenAI" },
    { icon: "embedding", name: "OpenAI Embedding" },
    { icon: "redis", name: "Redis" },
    { icon: "stripe", name: "Stripe Payment Gateway" },
  ];

  return (
    <div className="relative">
      {/* ─── TOP BADGE ROW ─── */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
          Featured Project - 1
        </span>
        <span className="text-xs text-gray-500 bg-base-300/80 border border-white/10 px-3 py-1 rounded-full font-extrabold">
          Final Year Project
        </span>
        <span className="text-xs text-gray-500 bg-base-300/80 border border-white/10 px-3 py-1 rounded-full font-extrabold">
          Team Leader
        </span>
        <span className="text-xs text-gray-500 bg-base-300/80 border border-white/10 px-3 py-1 rounded-full font-extrabold">
          Lead Architect / Developer
        </span>
      </div>

      {/* ─── MAIN CARD ─── */}
      <div className="relative bg-base-200/50 border border-teal-500/40 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* subtle ambient glow behind image */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/8 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* ─── LEFT COLUMN – IMAGE (2/5) ─── */}
          <div className="lg:col-span-2 relative">
            <div className="relative group overflow-hidden rounded-tl-2xl rounded-bl-none lg:rounded-bl-2xl rounded-tr-2xl lg:rounded-tr-none h-full min-h-80">
              <img
                src={heroImage}
                alt="Milk Flow Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* floating action pills */}
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <a
                  href="http://daybee.jayanidahanayake.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-teal-500 hover:bg-teal-400 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg shadow-teal-500/25 transition-all duration-200 hover:shadow-teal-500/40 hover:-translate-y-0.5"
                >
                  <Eye className="size-3.5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* ─── RIGHT COLUMN – CONTENT (3/5) ─── */}
          <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center gap-5">
            {/* title + description */}
            <div>
              <h5 className="text-3xl font-bold tracking-tight mb-1.5">
                AI-Powered Smart Part-Time Employment Platform
              </h5>
              <p className="text-sm leading-relaxed max-w-lg text-base-content/80">
                An AI-powered part-time employment system with intelligent job
                recommendations using AI, a smart chatbot for real-time job
                insights, employer-jobseeker workflows, integrated application
                processing, and QR-based attendance management.
              </p>
            </div>
            {/* live URL */}
            <a
              href="http://daybee.jayanidahanayake.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors w-fit group"
            >
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              www.daybee.jayanidahanayake.me
            </a>

            {/* ─── TECH STACK ─── */}
            <div>
              <p className="text-sm uppercase tracking-widest text-base-content/60 font-semibold whitespace-nowrap  mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((t) => (
                  <SmallTechIcons
                    key={t.name}
                    iconName={t.icon}
                    techName={t.name}
                  />
                ))}
              </div>
              {/* ─── DEV REPOS ROW ─── */}
              <div className="mt-5 flex flex-col gap-3">
                <p className="text-sm uppercase tracking-widest text-base-content/60 font-semibold whitespace-nowrap">
                  Dev Repos
                </p>
                <div className="flex flex-wrap gap-2">
                  {devRepos.map((item) => (
                    <RepoButton
                      text={item.name}
                      key={item.name}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROJECT OVERVIEW ─── */}
      <div className="mt-6 border border-teal-500/40 rounded-xl px-5 py-4">
        <div className="gap-6 text-sm">
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-500/90 font-semibold whitespace-nowrap mb-2.5">
              The Problem
            </p>
            <p className="text-base-content/80 leading-relaxed text-justify">
              University students and part-time job seekers often struggle to
              find suitable work that aligns with their class schedules,
              locations, skills, and their preferences. In urgent financial
              situations, students need immediate access to relevant
              opportunities but are forced to rely on fragmented platforms or
              word-of-mouth.
            </p>
            <br />
            <p className="text-base-content/80 leading-relaxed text-justify">
              At the same time, employers face the opposite challenge. During
              sudden situations, they are unable to find reliable workers,
              manage applications efficiently, or track attendance accurately.
              The lack of intelligent matching, real-time visibility, and trust
              signals makes short-term hiring slow, inefficient, and unreliable
              for both sides.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm uppercase tracking-widest text-teal-500/90 font-semibold whitespace-nowrap mb-2.5">
              What I have Architected & Developed Here
            </p>
            <div className="text-base-content/80 leading-relaxed text-justify">
              <p>
                I architected the platform as a modular monolithic application
                with a clear separation of responsibilities to handle real-time
                job discovery, AI-driven recommendations, and user interactions
                efficiently.{" "}
                {!readMore && (
                  <button
                    onClick={() => setReadMore(true)}
                    className="text-lg text-teal-500 cursor-pointer font-bold animate-pulse"
                  >
                    Read more...
                  </button>
                )}
              </p>{" "}
              <br />
              {readMore && (
                <>
                  <p>
                    A Spring Boot backend manages job postings, role-based
                    workflows for job seekers and employers, application
                    processing, chatbot interactions, and attendance management.
                    Advanced filtering and an AI-powered recommendation engine
                    intelligently match job seekers with suitable opportunities
                    based on their preferences and location.
                  </p>
                  <br />
                  <p>
                    Redis is used to cache frequently accessed MySQL datasets,
                    improving response times and reducing database load.
                    Real-time location-based job discovery and nearby jobs
                    mapping provide fast, accurate results without relying on
                    third-party services.
                  </p>
                  <br />
                  <p>
                    The system includes multiple user interfaces: a job seeker
                    web, an employer dashboard for posting and managing jobs,
                    and real-time application handling by connecting to the same
                    backend for consistent user experience.
                  </p>
                  <br />
                  <p>
                    The entire platform is containerized with Docker, deployed
                    using NGINX on DigitalOcean, and automated with CI/CD
                    pipelines via GitHub Actions, ensuring scalability,
                    reliability, and easy maintenance.
                  </p>
                  {readMore && (
                    <button
                      onClick={() => setReadMore(false)}
                      className="text-teal-500 
                        cursor-pointer 
                        font-bold 
                        animate-pulse 
                        mt-2.5
                        flex gap-2 items-center
                        "
                    >
                      <MoveUp className="size-3" /> <p>Collapse content</p>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project_1;
