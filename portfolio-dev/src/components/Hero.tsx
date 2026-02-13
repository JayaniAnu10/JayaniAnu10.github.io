import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "../assets/profile photo4.png";
import { motion, type Variants } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resumePDF from "../assets/Jayani_Dahanayake_Resume.pdf";

const Hero = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/JayaniAnu10" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jayani-dahanayaka",
    },
    {
      icon: Mail,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=jayanianuththara10@gmail.com",
    },
  ];

  return (
    <section
      className="bg-base-200 relative overflow-hidden flex items-start"
      id="hero"
    >
      {/* ─── AMBIENT BACKGROUND GLOWS ─── */}
      {/* Larger, softer ambient gradients for a more professional background */}
      <div className="absolute -top-56 -left-48 w-[900px] h-[900px] bg-teal-500/6 blur-[160px] rounded-full pointer-events-none transform-gpu" />
      <div className="absolute -bottom-48 -right-12 w-[720px] h-[720px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none transform-gpu" />
      {/* subtle contrast glow on the right to add depth */}
      <div className="absolute top-20 right-8 w-[420px] h-[420px] bg-teal-300/6 blur-[90px] rounded-full pointer-events-none transform-gpu" />

      {/* additional corner glows for balanced composition */}
      <div className="absolute -top-20 right-0 w-[360px] h-[360px] bg-teal-400/6 blur-[110px] rounded-full pointer-events-none transform-gpu" />
      <div className="absolute bottom-8 -left-24 w-[440px] h-[440px] bg-teal-600/5 blur-[110px] rounded-full pointer-events-none transform-gpu" />

      {/* Grid Pattern 
      <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.02] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />*/}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* ════════════ LEFT – TEXT (3 / 5) ════════════ */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {/* ── availability badge ── */}

            {/* ── name + role ── */}
            <div style={{ animation: "fadeInUp 0.7s ease 0.1s both" }}>
              <h2 className=" font-bold mb-3 tracking-tighter leading-tight text-2xl">
                Hi, I'm
              </h2>

              {/* Name as a typewriter */}
              <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold mb-1 font-mono ">
                <Typewriter
                  words={["Jayani Anuththara"]}
                  loop={1}
                  cursor={false}
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>

              <h2 className="text-lg sm:text-xl text-teal-500 font-semibold tracking-tighter leading-tight">
                {/* role placeholder kept smaller */}
              </h2>
            </div>
            <motion.div
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl text-teal-500 font-semibold mb-6 tracking-tighter leading-tight whitespace-nowrap overflow-hidden"
            >
              <Typewriter
                words={["Software Engineer", "Full-Stack Developer"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div>

            {/* ── bio ── */}
            <p
              className="text-sm text-base-content leading-relaxed max-w-md"
              style={{ animation: "fadeInUp 0.7s ease 0.25s both" }}
            >
              Computer Science undergraduate interested in building real-world
              software solutions and exploring modern technologies. Focused on
              developing clean, maintainable systems through hands-on projects
              while working toward a Software Engineer.
            </p>

            {/* ── CTA buttons ── */}
            <div
              className="flex flex-wrap items-center gap-3 mt-1"
              style={{ animation: "fadeInUp 0.7s ease 0.45s both" }}
            >
              <a
                href="#projects"
                className="
                  inline-flex 
                  items-center 
                  gap-2 
                  bg-teal-500 
                  hover:bg-teal-400 
                  text-white 
                  text-sm 
                  font-semibold 
                  px-5 
                  py-2.5 
                  rounded-full 
                  shadow-md 
                  shadow-teal-500/25 
                  hover:shadow-teal-500/40 
                  transition-all 
                  duration-200 
                  hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href={resumePDF}
                download="Jayani_Dahanayake_Resume.pdf"
                className="
    inline-flex 
    items-center 
    gap-2 
    bg-base-300 
    border 
    border-white/12 
    hover:border-white/25 
    text-sm 
    font-semibold 
    px-5 
    py-2.5 
    rounded-full 
    transition-all 
    duration-200 
    hover:-translate-y-0.5
  "
              >
                Download Resume
              </a>
            </div>

            {/* ── social row ── */}
            <div
              className="flex items-center gap-3 mt-0 mb-0"
              style={{ animation: "fadeInUp 0.7s ease 0.55s both" }}
            >
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="size-9 rounded-lg bg-base-300/50 border border-white/10 hover:border-teal-500/35 hover:bg-teal-500/10 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}

              {/* divider dot */}
              <span className="size-1 rounded-full bg-white/15 mx-1" />

              <span className="text-sm text-gray-600 font-medium">
                Sri Lanka
              </span>
            </div>
          </div>

          {/* ════════════ RIGHT – IMAGE (2 / 5) ════════════ */}
          <div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            style={{ animation: "fadeInRight 0.8s ease 0.2s both" }}
          >
            <div className="relative w-full max-h-[640] max-w-[640px] sm:max-w-[760px] lg:max-w-[920px] lg:-mt-8">
              {/* image frame: circular image with solid purple ring (no shadow) */}
              <div className="relative z-10 group flex items-center justify-center">
                {/* container that controls ring + image size */}
                <div className="relative w-11/12 sm:w-full aspect-square">
                  {/* decorative shape removed per user request */}

                  {/* rectangular image (no circular frame) */}
                  <div className="relative w-full h-full overflow-hidden p-1 z-30">
                    <img
                      src={heroImage}
                      alt="Jayani Anuththara"
                      className="w-full h-full object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* overlay the open-to-work tag on the image */}
                    <motion.div
                      className="absolute bottom-4 right-4 z-40 flex items-center gap-2 px-3 py-1.5 bg-base-100/90 backdrop-blur-sm rounded-full border/90 border-base-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <motion.span
                        className="w-2.5 h-2.5 bg-success rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium text-base-content">
                        Open to work
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── KEYFRAMES ─── */}
      <style>{`
        /* decorative parallelogram removed */

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
