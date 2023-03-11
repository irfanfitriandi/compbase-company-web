import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 300,
    });
  }, []);

  return (
    <section
      id="clients"
      className="flex flex-col items-center px-4 py-14 min-h-[100vh]"
      data-aos="fade-up"
    >
      <h1 className="text-3xl md:text-4xl antialiased">Our Clients</h1>
      <span className="w-32 border-t-[3px] md:w-44 md:border-t-4 border-[#FF1F57] mt-2" />
    </section>
  );
};

export default Clients;
