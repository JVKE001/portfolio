import Typewriter from "typewriter-effect";
import Github from "../assets/github-icon-1-logo-svgrepo-com.svg";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10"
      id="hero"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700">
        Hello, I'm Shubham (JVKE)
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-pink-600 pt-6 font-mono max-w-3xl">
        <Typewriter
          options={{
            strings: [
              "Full Stack Developer",
              "Transforming Ideas into Full Stack Solutions",
              "Passionate about Code, Design & Innovation",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-10">
        <a href="/resume.pdf" download>
          <button className="border min-w-[200px] cursor-pointer border-blue-300 text-sm sm:text-base px-6 py-3 rounded hover:shadow-xl hover:bg-blue-100 transition">
            Download My Resume
          </button>
        </a>

        <a
          href="https://github.com/JVKE001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border min-w-[200px] cursor-pointer border-blue-300 text-sm sm:text-base px-6 py-3 rounded hover:shadow-xl hover:bg-blue-100 transition flex items-center justify-center">
            GitHub
            <img src={Github} className="ml-2 w-6 h-6" alt="GitHub logo" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
