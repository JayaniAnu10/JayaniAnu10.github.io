import {
  Server,
  Layout,
  Boxes,
  GitBranch,
  Database,
  Smartphone,
  Brain,
} from "lucide-react";
import TechIcon from "./TechIcon";
import SectionHeading from "./SectionHeading";

const techCategories = [
  {
    icon: Server,
    title: "Backend & APIs",
    accent: "blue",
    skills: [
      { iconName: "springboot", techName: "Spring Boot" },
      { iconName: "java", techName: "Java" },
      { iconName: "springsecurity", techName: "Spring Security" },
      { iconName: "spring", techName: "Spring" },
      { iconName: "hibernate", techName: "Hibernate" },
      { iconName: "database", techName: "JPA" },
      { iconName: "typescript", techName: "TypeScript" },
      { iconName: "jwt", techName: "JWT" },
      { iconName: "rest", techName: "RestAPI" },
      { iconName: "postman", techName: "Postman" },
      { iconName: "swagger", techName: "Swagger" },
      { iconName: "springai", techName: "Spring AI" },
    ],
  },
  {
    icon: Layout,
    title: "Frontend & UI",
    accent: "blue",
    skills: [
      { iconName: "react", techName: "React" },
      { iconName: "vite", techName: "Vite" },
      { iconName: "typescript", techName: "TypeScript" },
      { iconName: "tailwindcss", techName: "Tailwind" },
      { iconName: "shadcnui", techName: "Shadcn UI" },
      { iconName: "html5", techName: "HTML5" },
      { iconName: "css", techName: "CSS" },
    ],
  },
  {
    icon: Database,
    title: "Databases & Caching",
    accent: "blue",
    skills: [
      { iconName: "mysql", techName: "MySQL" },
      { iconName: "redis", techName: "Redis" },
    ],
  },

  {
    icon: Boxes,
    title: "DevOps & Cloud",
    accent: "blue",
    skills: [
      { iconName: "docker", techName: "Docker" },
      { iconName: "nginx", techName: "Nginx" },
      { iconName: "digitalocean", techName: "Digital Ocean" },
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control & CI/CD",
    accent: "blue",
    skills: [
      { iconName: "git", techName: "Git" },
      { iconName: "github", techName: "GitHub" },
      { iconName: "githubactions", techName: "GitHub Actions" },
    ],
  },
  {
    icon: Brain,
    title: "AI Tools & Tech",
    accent: "blue",
    skills: [
      { iconName: "openai", techName: "OpenAI" },
      { iconName: "embedding", techName: "OpenAI Embedding" },
    ],
  },
];

const TechStackSection = () => {
  return (
    <section className="bg-base-200 py-16 px-4 relative overflow-hidden">
      {/* ─── AMBIENT BACKGROUND GLOW ─── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <SectionHeading
          preHeading="Skills & Expertise"
          heading_1="Technical"
          heading_2="Skills"
          subTitle="The technologies and tools I use to build and learn"
        />

        {/* ─── TECH GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {techCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="relative group bg-base-200/50 border border-teal-500/40 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-black/10"
              >
                {/* subtle glow per card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/3 blur-2xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-5">
                  {/* ── category header ── */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* icon shell */}
                    <div className="size-9 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center shrink-0">
                      <Icon className="size-4 text-teal-400" />
                    </div>

                    {/* title */}
                    <h3 className="text-base font-bold tracking-tight">
                      {category.title}
                    </h3>

                    {/* skill count badge */}
                    <span className="ml-auto text-xs text-gray-500 font-semibold bg-base-300/60 border border-white/8 px-2 py-0.5 rounded-full">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* ── tech icons ── */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <TechIcon
                        key={skill.techName}
                        iconName={skill.iconName}
                        techName={skill.techName}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── OPTIONAL: PROFICIENCY NOTE ─── */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Continuously building my skillset and experimenting with new
            technologies to create practical, real-world solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
