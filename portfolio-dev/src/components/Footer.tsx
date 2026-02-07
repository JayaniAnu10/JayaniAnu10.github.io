import { MoveUp } from "lucide-react";
import SmallTechIcons from "./SmallTechIcons";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10 border-t border-black/10">
        <aside className="flex flex-col">
          <p className="ml-3 font-semibold">This webiste developed using</p>
          <div>
            <SmallTechIcons iconName="react" techName="React 19" />
            <SmallTechIcons iconName="daisyui" techName="Daisy UI" />
            <SmallTechIcons iconName="vite" techName="Vite" />
            <SmallTechIcons iconName="github/black/white" techName="GitHub" />
          </div>
        </aside>

        <div>
          <a
            href="#hero"
            className="text-blue-500 
                        cursor-pointer 
                        font-bold 
                        animate-pulse 
                        mt-2.5
                        flex gap-2 items-center
                        "
          >
            <MoveUp className="size-3" />{" "}
            <p className="hover:scale-105 transition-transform duration-300">
              Back to Top
            </p>
          </a>
        </div>

        <nav>
          <h6 className="footer-title">Thank you</h6>
          <div className="grid grid-flow-col gap-4">
            <p>Copyright © 2026 - Adithya Shenal</p>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
