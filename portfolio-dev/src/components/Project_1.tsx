import { Cog, Eye, ScrollText, ExternalLink, MoveUp } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import RepoButton from "./buttons/RepoButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "../assets/milkflow_bg.png";

const Project_1 = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const devRepos = [
    {
      name: "Backend",
      link: "https://github.com/AdithyaShenal/milkflow-backend",
    },
    {
      name: "Frontend",
      link: "https://github.com/AdithyaShenal/milkflow-admin-web",
    },
    {
      name: "Driver App",
      link: "https://github.com/AdithyaShenal/milkflow-driver-android",
    },
    {
      name: "Farmer App",
      link: "https://github.com/AdithyaShenal/milkflow-farmer-android",
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
        <span className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-orange-400 animate-pulse" />
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
      <div className="relative bg-base-200/50 border border-orange-500/40 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* subtle ambient glow behind image */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-500/8 blur-3xl rounded-full pointer-events-none" />

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
                  href="http://milkflow.adithyashenal.me"
                  className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:-translate-y-0.5"
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
              href="http://milkflow.adithyashenal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors w-fit group"
            >
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              www.milkflow.adithyashenal.me
            </a>
            {/* action buttons row */}
            <div className="flex flex-wrap gap-2.5">
              <button className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200">
                <ScrollText size={14} />
                Documentation
              </button>
              <Link
                to="projectOneArch"
                className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-400 hover:bg-blue-500/25 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200"
              >
                <Cog size={14} />
                System Architecture
              </Link>
            </div>

            {/* production repo pill */}
            <RepoButton
              text={"Production Repository · Deployed"}
              link="https://github.com/AdithyaShenal/milk-flow-production"
            />
            {/* ─── TECH STACK ─── */}
            <div>
              <p className="text-sm uppercase tracking-widest text-base-content/60 font-semibold whitespace-nowrap">
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
      <div className="mt-6 border border-blue-500/40 rounded-xl px-5 py-4">
        <div className="gap-6 text-sm">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-500/80 font-semibold whitespace-nowrap mb-2.5">
              The Problem
            </p>
            <p className="text-base-content/80 leading-relaxed text-justify">
              Milk collection in the dairy industry is still handled manually,
              where collection trucks travel to farmers without knowing
              real-time milk availability. This often results in unnecessary
              trips, wasted fuel, increased operational costs, and time delays
              when farmers are unavailable. The lack of real-time visibility and
              optimized routing makes large-scale milk collection inefficient
              and unreliable.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm uppercase tracking-widest text-blue-500/80 font-semibold whitespace-nowrap mb-2.5">
              What I have Architected & Developed Here
            </p>
            <div className="text-base-content/80 leading-relaxed text-justify">
              <p>
                I architected the system as a multi-service application with a
                clear separation of responsibilities to handle real-time data
                flow and computationally heavy route optimization efficiently.{" "}
                {!readMore && (
                  <button
                    onClick={() => setReadMore(true)}
                    className="text-lg text-blue-500 cursor-pointer font-bold animate-pulse"
                  >
                    Read more...
                  </button>
                )}
              </p>{" "}
              <br />
              {readMore && (
                <>
                  <p>
                    A Node.js modular monolithic backend manages real-time
                    farmer submissions, driver coordination, routing requests,
                    and system orchestration using asynchronous processing. For
                    route optimization, I developed a dedicated Spring Boot
                    service that performs CVRP (Capacitated Vehicle Routing
                    Problem) calculations using Google OR-Tools, isolating heavy
                    mathematical processing from real-time operations.
                  </p>
                  <br />
                  <p>
                    To improve performance, Redis is used to cache large MongoDB
                    datasets in memory, reducing repeated database reads and
                    improving response times. A private OSRM server is deployed
                    to generate high-performance Sri Lankan road network data,
                    enabling fast and accurate route computation without
                    third-party API dependency.
                  </p>
                  <br />
                  <p>
                    The system includes three user interfaces: a farmer app for
                    submitting milk availability, a driver app with real-time
                    navigation built using MapLibre, and an admin web app for
                    monitoring submissions, generating routes, and visualizing
                    maps. Both mobile applications were I developed using React
                    + Capacitor + Konsta UI and connected to the same backend.
                  </p>
                  <br />
                  <p>
                    The entire platform is containerized and deployed using
                    Docker, NGINX, and DigitalOcean, with automated CI/CD
                    pipelines via GitHub Actions, ensuring scalability,
                    reliability, and easy maintenance.
                  </p>
                  {readMore && (
                    <button
                      onClick={() => setReadMore(false)}
                      className="text-blue-500 
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
