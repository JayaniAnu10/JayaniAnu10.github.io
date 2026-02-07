import { Cog, Eye, ScrollText, ExternalLink, MoveUp } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import RepoButton from "./buttons/RepoButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "../assets/milkflow_bg.png";

const Project_3 = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const techStack = [
    { icon: "nodedotjs", name: "Node.js" },
    { icon: "express/black/white", name: "Express 5" },
    { icon: "react", name: "React 18" },
    { icon: "reactquery", name: "React-Query" },
    { icon: "vite", name: "Vite" },
    { icon: "natsdotio", name: "NATS Streaming Server" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "github/black/white", name: "GitHub" },
    { icon: "git", name: "Git" },
    { icon: "githubactions", name: "GitHub Actions" },
    { icon: "docker", name: "Docker" },
    { icon: "kubernetes", name: "Kubernetes" },
    { icon: "npm", name: "npm" },
    { icon: "nginx", name: "Nginx" },
    { icon: "digitalocean", name: "Digital Ocean" },
    { icon: "mongodb", name: "mongodb" },
    { icon: "mysql", name: "MySql" },
    { icon: "jsonwebtokens/black/white", name: "JWT" },
  ];

  return (
    <div className="relative">
      {/* ─── TOP BADGE ROW ─── */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
          Featured Project - 3
        </span>
        <span className="text-xs text-gray-500 bg-base-300/80 border border-white/10 px-3 py-1 rounded-full font-extrabold">
          Personal Project
        </span>
      </div>

      {/* ─── MAIN CARD ─── */}
      <div className="relative bg-base-200/50 border border-blue-500/40 backdrop-blur-sm rounded-2xl overflow-hidden">
        {/* subtle ambient glow behind image */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/8 blur-3xl rounded-full pointer-events-none" />

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
                  href="http://lumina.adithyashenal.me"
                  className="inline-flex items-center gap-1.5 bg-blue-500 hover:bg-blue-400 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-blue-500/40 hover:-translate-y-0.5"
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
                Lumina
              </h5>
              <p className="text-sm leading-relaxed max-w-lg text-base-content/80">
                An event-driven image-sharing platform built on a fully
                asynchronous microservice architecture using Node.js, NATS,
                Docker, and Kubernetes.
              </p>
            </div>
            {/* live URL */}
            <a
              href="http://lumina.adithyashenal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors w-fit group"
            >
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              www.lumina.adithyashenal.me
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
              text={"Repository · Deployed"}
              link="https://github.com/AdithyaShenal/Lumina"
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
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROJECT OVERVIEW ─── */}
      <div className="mt-6 border border-blue-500/40 rounded-xl px-5 py-4">
        <div className="gap-6 text-sm">
          <div className="mt-4">
            <p className="text-sm uppercase tracking-widest text-blue-500/80 font-semibold whitespace-nowrap mb-2.5">
              What I have Architected & Developed Here
            </p>
            <div className="text-base-content/80 leading-relaxed text-justify">
              <p>
                I architected and developed Lumina as a fully asynchronous,
                event-driven image-sharing web application, with a strong focus
                on microservice architecture, service isolation, and
                system-level communication patterns.{" "}
                {!readMore && (
                  <button
                    onClick={() => setReadMore(true)}
                    className="text-lg text-blue-500 cursor-pointer font-bold animate-pulse"
                  >
                    Read more...
                  </button>
                )}
              </p>
              <br />
              {readMore && (
                <>
                  <p>
                    The backend is composed of independent Node.js
                    microservices, each responsible for a single business
                    capability:
                    <ul>
                      <li>
                        -&gt; User Service – authentication and user management
                      </li>
                      <li>-&gt; Post Service – image and post creation</li>
                      <li>-&gt; Search Service – content searching</li>
                      <li>
                        -&gt; Timeline Service – personalized feed aggregation
                      </li>
                    </ul>
                    Each service owns its own data and responsibilities,
                    communicating exclusively through events rather than direct
                    service-to-service calls.
                  </p>
                  <br />
                  <p>
                    To avoid duplicated logic and enforce consistency, I created
                    a shared internal npm package that encapsulates reusable
                    components such as:
                    <ul>
                      <li>-&gt; NATS client configuration</li>
                      <li>-&gt; Typed event publishers and listeners</li>
                      <li>
                        -&gt; Common base classes using a class-based
                        abstraction
                      </li>
                    </ul>
                    This shared package is consumed by all services, enabling
                    standardized event handling while keeping services
                    independently deployable
                  </p>
                  <br />
                  <p>
                    Authentication across the system is handled using JWT-based
                    stateless authentication, implemented consistently at the
                    service level to ensure secure and trusted communication
                    between clients and services.
                  </p>
                  <br />
                  <p>
                    The entire platform is containerized with Docker and
                    deployed on Kubernetes, allowing individual services to be
                    deployed, restarted, and managed independently. Traffic
                    routing is handled via an NGINX Ingress Controller, which
                    acts as a load balancer and gateway for both API and
                    frontend traffic.
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

export default Project_3;
