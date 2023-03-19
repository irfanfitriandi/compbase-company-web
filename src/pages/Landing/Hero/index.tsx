import BgHero from "assets/bg.jpg";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";

function Hero() {
  return (
    <section
      id="hero"
      className="h-[100vh] w-full flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgHero})`,
        backgroundSize: `cover`,
      }}
    >
      <h1 className="text-xl md:text-4xl antialiased text-white tracking-wide">
        Providing the simplest solution
      </h1>
      <p className="text-md md:text-xl antialiased text-white pt-2">
        for the most complex problem
      </p>
      <a href="#services">
        <ArrowDownIcon className="w-10 md:w-14 pt-4 cursor-pointer hover:scale-125 duration-500" />
      </a>
    </section>
  );
}

export default Hero;
