import { MoveUp } from "lucide-react";
// footer small icons removed — keep import commented out in case we re-add later
// import SmallTechIcons from "./SmallTechIcons";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-100 text-base-content mt-12 border-t border-gray-700/20 shadow-2xl">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 pb-10 pt-10">
          <div className="grid grid-cols-3 items-center">
            <div className="flex items-center">
              <div>
                <h6 className="footer-title">Thank you</h6>
                <p className="text-sm">Copyright © 2026 - Jayani Anuthtara</p>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="#hero"
                className="text-teal-500 cursor-pointer font-bold animate-pulse flex gap-2 items-center"
                aria-label="Back to top"
              >
                <MoveUp size={16} />
                <span className="hover:scale-105 transition-transform duration-300">
                  Back to Top
                </span>
              </a>
            </div>

            <div className="flex justify-end">
              <p className="text-sm"></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
