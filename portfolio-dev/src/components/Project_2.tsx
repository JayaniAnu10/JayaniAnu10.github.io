import { Eye, ExternalLink, MoveUp } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";
import RepoButton from "./buttons/RepoButton";
import { useState } from "react";
import heroImage from "../assets/eventra6.png";

const Project_2 = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const devRepos = [
    {
      name: "Repository · Deployed",
      link: "https://github.com/JayaniAnu10/Event-ticketing-proj",
    },
    {
      name: "Backend",
      link: "https://github.com/JayaniAnu10/Event-Ticketing",
    },
    {
      name: "Frontend",
      link: "https://github.com/JayaniAnu10/Event-Ticketing--FrontEnd",
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
    { icon: "typescript", name: "TypeScript" },
    { icon: "tailwindcss", name: "Tailwind" },
    { icon: "shadcnui", name: "Shadcn UI" },
    { icon: "mysql", name: "MySQL" },
    { icon: "jwt", name: "JWT" },
    { icon: "rest", name: "RestAPI" },
    { icon: "github", name: "GitHub" },
    { icon: "postman", name: "Postman" },
    { icon: "swagger", name: "Swagger" },
    { icon: "githubactions", name: "GitHub Actions" },
    { icon: "docker", name: "Docker" },
    { icon: "nginx", name: "Nginx" },
    { icon: "redis", name: "Redis" },
    { icon: "stripe", name: "Stripe Payment Gateway" },
  ];

  return (
    <div className="relative">
      {/* ─── TOP BADGE ROW ─── */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
          Featured Project - 2
        </span>
        <span className="text-xs text-gray-500 bg-base-300/80 border border-white/10 px-3 py-1 rounded-full font-extrabold">
          Personal Project
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
                alt="Eventra Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* floating action pills */}
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <a
                  href="http://eventra.jayanidahanayake.me"
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
                Eventra
              </h5>
              <p className="text-sm leading-relaxed max-w-lg text-base-content/80">
                An event ticket booking platform built on a layered
                architecture, enabling event discovery, ticket reservations, and
                secure bookings, with an integrated admin dashboard for managing
                events, users, and platform operations.
              </p>
            </div>
            {/* live URL */}
            <a
              href="http://eventra.jayanidahanayake.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors w-fit group"
            >
              <ExternalLink className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              www.eventra.jayanidahanayake.me
            </a>
            {/* action buttons row */}

            {/* ─── TECH STACK ─── */}
            <div>
              <p className="text-sm uppercase tracking-widest text-base-content/60 font-semibold whitespace-nowrap mb-2">
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

      {/* ─── PROJECT OVERVIEW ─── */}
      <div className="mt-6 border border-teal-500/40 rounded-xl px-5 py-4">
        <div className="gap-6 text-sm">
          <div className="mt-4">
            <p className="text-sm uppercase tracking-widest text-teal-500/80 font-semibold whitespace-nowrap mb-2.5">
              What I have Architected & Developed Here
            </p>
            <div className="text-base-content/80 leading-relaxed text-justify">
              <p>
                Eventra is a full-stack event ticket booking platform designed
                to deliver secure, and user-friendly event discovery and ticket
                reservation experience for users.
                {!readMore && (
                  <button
                    onClick={() => setReadMore(true)}
                    className="text-lg text-teal-500 cursor-pointer font-bold animate-pulse"
                  >
                    Read more...
                  </button>
                )}
              </p>
              <br />
              {readMore && (
                <>
                  <p>
                    The backend is built using Spring Boot following a layered
                    architecture, ensuring clean separation between controllers,
                    services, and data access layers. This structure improves
                    maintainability, and testability of the system.
                  </p>
                  <br />
                  <p>
                    Users can discover events, reserve tickets, and complete
                    ticket bookings through secure Stripe-powered payments, all
                    within a seamless user experience.While an admin dashboard
                    provides centralized control for creating events, managing
                    events, users, and related platform operations.
                  </p>
                  <br />
                  <p>
                    Security is implemented using Spring Security with JWT-based
                    authentication, utilizing both access and refresh tokens to
                    prevent frequent re-login, maintain secure stateless
                    sessions, and protect sensitive endpoints with fine-grained
                    authorization.
                  </p>
                  <br />
                  <p>
                    To improve performance and reduce database load, Redis is
                    used to cache frequently accessed event data, enabling
                    faster response times and smoother user experiences.
                  </p>
                  <br />
                  <p>
                    The entire platform is containerized using Docker and
                    deployed on DigitalOcean, with NGINX configured as a reverse
                    proxy to handle routing. This setup ensures scalability,
                    clean deployments, and reliable production performance.
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

export default Project_2;
