import { Cog, Eye, ScrollText, ExternalLink, MoveUp } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import RepoButton from "./buttons/RepoButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "../assets/zephyr_bg.png";

const Project_2 = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const techStack = [
    { icon: "nodedotjs", name: "Node.js" },
    { icon: "express/black/white", name: "Express 5" },
    { icon: "react", name: "React 19" },
    { icon: "reactquery", name: "React-Query" },
    { icon: "vite", name: "Vite" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "tailwindcss", name: "Tailwind" },
    { icon: "shadcnui/black/white", name: "shadcn/ui" },
    { icon: "github/black/white", name: "GitHub" },
    { icon: "git", name: "Git" },
    { icon: "githubactions", name: "GitHub Actions" },
    { icon: "docker", name: "Docker" },
    { icon: "nginx", name: "Nginx" },
    { icon: "digitalocean", name: "Digital Ocean" },
    { icon: "socketdotio/black/white", name: "Socket.io" },
    { icon: "cloudinary", name: "Cloudinary" },
    { icon: "mongodb", name: "mongodb" },
    { icon: "redis", name: "Redis" },
    { icon: "jsonwebtokens/black/white", name: "JWT" },
  ];

  return (
    <div className="relative">
      {/* ─── TOP BADGE ROW ─── */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
          Featured Project - 2
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
                  href="http://zephyr.adithyashenal.me"
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
                Zephyr
              </h5>
              <p className="text-sm leading-relaxed max-w-lg text-base-content/80">
                A friend-based real-time messaging platform built on a hybrid
                WebSocket + REST architecture, enabling instant user
                interactions such as friend requests, accept/reject flows, and
                live messaging.
              </p>
            </div>
            {/* live URL */}
            <a
              href="http://zephyr.adithyashenal.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors w-fit group"
            >
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              www.zephyr.adithyashenal.me
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
              link="https://github.com/AdithyaShenal/Zephyr-ChatApp"
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
                I architected and developed Zephyr as a multi-service,
                distributed real-time chat platform with a strong emphasis on
                performance, reliability, and clean system design. The Node.js
                (TypeScript) backend follows a modular monolith architecture,
                enabling clear separation of concerns while keeping deployment
                and maintenance simple.{" "}
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
                    The backend is built with Node.js, Express, Socket.io and
                    TypeScript using a hybrid communication model where RESTful
                    APIs handle standard operations and Socket.io manages
                    real-time messaging, presence updates, and notifications.
                    This approach ensures efficient bidirectional communication
                    without overloading the system with persistent connections
                    for non-real-time tasks.
                  </p>
                  <br />
                  <p>
                    To optimize performance, I implemented a Redis-based caching
                    layer that significantly reduces database load and improves
                    average API response times. Redis is also used as the
                    backbone for background job processing via BullMQ, allowing
                    non-critical tasks such as notifications and cleanup
                    operations to run asynchronously without blocking the main
                    application.
                  </p>
                  <br />
                  <p>
                    Authentication and authorization are handled using JWT-based
                    stateless security, ensuring safe and scalable user access.
                    All APIs are designed to be idempotent, guaranteeing
                    reliability even under unstable network conditions or
                    repeated requests.
                  </p>
                  <br />
                  <p>
                    The frontend is built with React, TypeScript, Vite, Tailwind
                    CSS, and shadcn/ui, focusing on a clean, modern UI and
                    type-safe development. Media uploads such as profile images
                    are handled through Cloudinary, providing optimized and
                    secure cloud-based storage.
                  </p>
                  <br />
                  <p>
                    For deployment, the entire system is fully containerized
                    using Docker and Docker Compose, with dual-NGINX setup: an
                    edge NGINX for reverse proxying and routing, and a dedicated
                    NGINX container for serving React static assets, ensuring
                    clean separation of concerns. I implemented a complete CI/CD
                    pipeline using GitHub Actions, enabling automated builds,
                    container publishing using docker hub, and deployment to
                    DigitalOcean on every production update.
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

export default Project_2;
