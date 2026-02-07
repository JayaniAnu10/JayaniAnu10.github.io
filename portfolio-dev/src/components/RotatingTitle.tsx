import { useEffect, useState } from "react";

const RotatingTitle = () => {
  const titles = ["Software Engineer", "Full Stack"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
      <span className="relative inline-block">
        {titles.map((title, index) => (
          <span
            key={index}
            className={`block transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            {title}
          </span>
        ))}
      </span>
    </h2>
  );
};

export default RotatingTitle;
