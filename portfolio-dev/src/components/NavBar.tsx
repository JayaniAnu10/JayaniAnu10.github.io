import ThemeController from "./ThemeController";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 border-b border-black/5 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-200 rounded-box z-20 mt-3 w-52 p-2 shadow">
              <li>
                <a href="#hero">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="text-md ml-5 font-medium tracking-wider ">
            Jayani Anuththara
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeController />
          <a
            href="#contact"
            className="ml-4 inline-flex items-center gap-2 bg-teal-500 text-base-content px-4 py-2 rounded-xl text-sm font-semibold hover:bg-teal-400 transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
