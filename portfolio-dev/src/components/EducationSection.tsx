import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    era: "2023 – Present",
    phase: "Undergraduate",
    icon: GraduationCap,
    institution: "University of Ruhuna Sri Lanka",
    degree: "Bachelor of Computer Science (Undergraduate)",
    stream: "Computer Science",
    location: "Matara, Sri Lanka",
    highlight: "Passed with higher GPA of 3.97",
    tags: ["Data Structures - A", "OOP - A", "DBMS - A+"],
    accent: "text-teal-400",
    glowColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    dotColor: "bg-teal-500",
    dotGlow: "shadow-teal-500/50",
    pillBg: "bg-teal-500/15",
    pillBorder: "border-teal-500/30",
    pillText: "text-teal-400",
    isCurrent: true,
  },
  {
    era: "2021",
    phase: "G.C.E A/L",
    icon: BookOpen,
    institution: "G.C.E Advanced Level (A/L)",
    degree: "Physical Science Stream",
    stream: "Physical Science Stream",
    location: "Gampaha, Sri Lanka",
    highlight: "Z-Score: 1.4291",
    tags: ["Combined Mathematics - B", "Chemistry - B", "Physics - B"],
    accent: "text-gray-400",
    glowColor: "bg-gray-500/8",
    borderColor: "border-gray-500/20",
    dotColor: "bg-gray-400",
    dotGlow: "shadow-gray-500/30",
    pillBg: "bg-gray-500/10",
    pillBorder: "border-gray-500/25",
    pillText: "text-gray-400",
  },
];

const EducationSection = () => {
  return (
    <section className="bg-base-200 py-17 px-4" id="education">
      <div className="mx-auto w-full max-w-6xl">
        {/* ─── SECTION HEADING ─── */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-base-content/80 font-semibold mb-2">
            Learning Journey
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Education &amp;{" "}
            <span className="text-teal-500">Certifications</span>
          </h2>

          <p className="text-sm text-base-content/80 max-w-lg mx-auto mt-3 leading-relaxed">
            Academic foundation and professional growth
          </p>
        </div>

        {/* ─── TIMELINE ─── */}
        <div className="relative">
          {/* vertical line */}

          {/* For White */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/12 to-transparent -translate-x-1/2" />

          {/* For Dark */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-black/20 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isRight = index % 2 === 0; // alternates: left, right, left

              return (
                <div key={index} className="relative flex items-start">
                  {/* ─── DOT + ERA (center node) ─── */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    {/* era label — sits above the dot on desktop */}
                    <span className="hidden sm:block text-xs text-base-content font-semibold tracking-wide whitespace-nowrap mb-2">
                      {edu.era}
                    </span>

                    {/* glowing dot */}
                    <div
                      className={`size-4 rounded-full ${edu.dotColor} shadow-md ${edu.dotGlow} ring-2 ring-base-200 transition-transform duration-300 hover:scale-125`}
                    />
                  </div>

                  {/* ─── CARD ─── */}
                  {/* Mobile: always full-width left-offset. Desktop: alternates left / right. */}
                  <div
                    className={`
                      w-full pl-14 sm:pl-0
                      ${isRight ? "sm:pr-[calc(50%+2rem)] sm:pl-0" : "sm:pl-[calc(50%+2rem)] sm:pr-0"}
                    `}
                  >
                    <div
                      className={`
                        relative group bg-base-200/60 border ${edu.borderColor} backdrop-blur-sm
                        rounded-xl overflow-hidden transition-all duration-300
                        hover:border-white/20 hover:shadow-md hover:shadow-black/20
                      `}
                    >
                      <div className="relative z-10 p-5">
                        {/* ─── top row: phase badge + era (mobile) ─── */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 ${edu.pillBg} border ${edu.pillBorder} ${edu.pillText} text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full`}
                          >
                            {edu.isCurrent && (
                              <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
                            )}
                            <Icon className="size-3" />
                            {edu.phase}
                          </span>

                          {/* era on mobile only */}
                          <span className="sm:hidden text-xs text-base-content font-semibold tracking-wide">
                            {edu.era}
                          </span>
                        </div>

                        {/* ─── institution + degree ─── */}
                        <h4 className="text-base font-bold tracking-tight leading-snug">
                          {edu.institution}
                        </h4>
                        <p
                          className={`text-md font-semibold mt-0.5 ${edu.accent}`}
                        >
                          {edu.degree}
                        </p>

                        {/* ─── highlight line ─── */}
                        <p className="text-sm text-base-content mt-2.5 leading-relaxed border-l-2 border-gray-500/50 pl-2.5">
                          {edu.highlight}
                        </p>

                        {/* ─── tags ─── */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {edu.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-base-300/60 border border-gray-500/50 text-base-content/70 text-xs font-medium px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
