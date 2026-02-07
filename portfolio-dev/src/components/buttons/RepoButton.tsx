import { ArrowUpRight } from "lucide-react";
import githubIcon from "/public/icons/github.svg";

interface Props {
  text: string;
  link: string;
}

const RepoButton = ({ text, link }: Props) => {
  return (
    <>
      <a
        href={link}
        className="inline-flex 
              items-center 
              gap-2 
              bg-base-300/70
              border 
              border-gray-500/50
              hover:border-gray-500
              text-xs
              font-semibold 
              px-4 
              py-2 
              rounded-full 
              w-fit 
              group
              text-base-content/70
              hover:text-base-content
              hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5
              "
      >
        <img src={githubIcon} alt="GitHub" className="w-3.5 h-3.5" />
        {text}
        <ArrowUpRight
          size={14}
          className="ml-2 text-gray-500 group-hover:text-teal-400 transition-colors duration-200"
        />
      </a>
    </>
  );
};

export default RepoButton;
