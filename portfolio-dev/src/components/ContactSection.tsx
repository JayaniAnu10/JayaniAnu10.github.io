import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jayanianuththara10@gmail.com",
    href: "mailto:jayanianuththara10@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 72 113 0036",
    href: "tel:+94721130036",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirigama, Gampaha",
    href: null,
  },
];

interface MailFormData {
  senderName: string;
  senderEmail: string;
  text: string;
}

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jayani-dahanayaka",
    textColor: "text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/JayaniAnu10",
    textColor: "text-base-content",
  },
];

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<MailFormData>();

  const submitHandler = async (data: MailFormData) => {
    const time = new Date().toLocaleString();

    try {
      const result = await emailjs.send(
        "service_e1sbb75", // SERVICE ID
        "template_wsedgua", // TEMPLATE ID
        {
          senderName: data.senderName,
          email: data.senderEmail,
          text: data.text,
          time: time,
        },
        "4kuRe8f7rlryMzeBV",
      );

      console.log("Email sent:", result.text);
      // clear the form inputs after successful submit
      reset();
    } catch (error) {
      console.error("Email error:", error);
    }
  };

  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="mx-auto w-full max-w-6xl" id="contact">
        {/* ─── SECTION HEADING ─── */}
        <SectionHeading
          preHeading="Get in Touch"
          heading_1="Let's"
          heading_2="Connect"
          subTitle="Have a project in mind or want to collaborate? Feel free to reach
            out — I'd love to hear from you."
        />

        {/* ─── MAIN GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* ════════════ LEFT COLUMN (2/5) ════════════ */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* ── info card ── */}

            <div className="relative bg-base-200/60 border border-teal-500/40 backdrop-blur-sm rounded-2xl overflow-hidden">
              <div className="relative z-10 p-5 flex flex-col gap-4">
                {/* tiny badge */}
                <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full w-fit mb-3">
                  <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Available
                </span>

                {/* info rows */}
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 group/row py-2.5  last:border-0">
                      {/* icon shell */}
                      <div
                        className="
                          mt-0.5 
                          size-8 
                          rounded-lg 
                          bg-base-300/60 
                          border 
                          border-white/8 
                          flex 
                          items-center 
                          justify-center 
                          shrink-0 
                          group-hover/row:border-teal-500/30 
                          group-hover/row:bg-teal-500/10 
                          transition-colors 
                          duration-200"
                      >
                        <Icon className="size-3.5 group-hover/row:text-teal-400 transition-colors duration-200" />
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold uppercase tracking-wide text-base-content/50">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium truncate">
                          {item.value}
                        </p>
                      </div>

                      {item.href && (
                        <ArrowUpRight className="size-3.5 text-gray-600 ml-auto mt-1 opacity-0 group-hover/row:opacity-100 group-hover/row:text-teal-400 transition-all duration-200" />
                      )}
                    </div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="group/row">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* ── social pills ── */}
            <div className="bg-base-200/40 border border-teal-500/40 backdrop-blur-sm rounded-xl p-4">
              <span className="inline-flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full w-fit mb-3">
                <span className="size-1.5 rounded-full bg-teal-400 animate-pulse" />
                Follow me
              </span>
              <div className="flex gap-4">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className={`
                        group 
                        flex 
                        items-center 
                        bg-base-300/50 
                        border 
                        ${s.textColor}
                        border-teal-500/30 
                        bg-teal-500/10 
                        font-semibold 
                        p-4 
                        rounded-full 
                        transition-all 
                        duration-200
                        `}
                    >
                      <Icon className="size-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ════════════ RIGHT COLUMN – FORM (3/5) ════════════ */}
          <div className="lg:col-span-3">
            <div className="relative bg-base-200/60 border border-teal-500/40 backdrop-blur-sm rounded-2xl overflow-hidden h-full">
              <div className="relative z-10 p-5 sm:p-7 flex flex-col gap-5 h-full">
                <div>
                  <h3 className="text-base text-base-content/80 font-bold tracking-tight">
                    Send a Message
                  </h3>
                </div>

                {/* ── success banner ── */}
                {/* {sent && (
                  <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/25 rounded-lg px-4 py-2.5">
                    <svg
                      className="size-4 text-green-400 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-green-400 font-semibold">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )} */}

                {/* ── form ── */}
                <form
                  className="flex flex-col gap-4 flex-1"
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        {...register("senderName")}
                        type="text"
                        placeholder="Jayani Anuththara"
                        required
                        className="
                            w-full bg-base-300/50 border border-white/10
                            text-sm text-gray-200 placeholder-base-content/30
                            rounded-lg px-3.5 py-2.5
                            focus:outline-none focus:border-teal-500/40 focus:bg-base-300/70
                            transition-colors duration-200
                          "
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        {...register("senderEmail")}
                        type="email"
                        placeholder="example@gmail.com"
                        required
                        className="
                            w-full bg-base-300/50 border border-white/10
                            text-sm text-gray-200 placeholder-base-content/30
                            rounded-lg px-3.5 py-2.5
                            focus:outline-none focus:border-teal-500/40 focus:bg-base-300/70
                            transition-colors duration-200
                          "
                      />
                    </div>
                  </div>

                  {/* message */}
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      {...register("text")}
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={3}
                      className="
                        w-full flex-1 bg-base-300/50 border border-white/10
                        text-sm text-base-content/80 placeholder-base-content/30
                        rounded-lg px-3.5 py-2.5 resize-none
                        focus:outline-none focus:border-teal-500/40 focus:bg-base-300/70
                        transition-colors duration-200
                      "
                    />
                  </div>

                  {/* submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      inline-flex items-center justify-center gap-2
                      bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed
                      text-white text-sm font-semibold
                      px-6 py-2.5 rounded-full
                      shadow-md shadow-teal-500/25 hover:shadow-teal-500/40
                      transition-all duration-200 hover:-translate-y-0.5
                      self-start
                    "
                  >
                    <Send className="size-4" />
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
