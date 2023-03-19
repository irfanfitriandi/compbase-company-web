import ReactIcon from "components/Icons/ReactIcon";

function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center px-4 py-16 min-h-[100vh]"
      data-aos="fade-up"
    >
      <h1 className="text-3xl md:text-4xl antialiased">Our Services</h1>
      <span className="w-32 border-t-[3px] md:w-44 md:border-t-4 border-[#FF1F57] mt-2" />
      <div className="flex flex-col md:flex-row justify-center text-center gap-20 pt-20">
        <div className="md:basis-1/3 flex flex-col gap-4">
          <ReactIcon className="w-24 mx-auto" />
          <h1 className="text-xl">Software Development</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo est non facilis deserunt provident porro quas doloribus,
            ipsum tempore?
          </p>
        </div>
        <div className="md:basis-1/3 flex flex-col gap-4">
          <ReactIcon className="w-24 mx-auto" />
          <h1 className="text-xl">Software Development</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo est non facilis deserunt provident porro quas doloribus,
            ipsum tempore?
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center text-center gap-20 pt-20">
        <div className="md:basis-1/3 flex flex-col gap-4">
          <ReactIcon className="w-24 mx-auto" />
          <h1 className="text-xl">Software Development</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo est non facilis deserunt provident porro quas doloribus,
            ipsum tempore?
          </p>
        </div>
        <div className="md:basis-1/3 flex flex-col gap-4">
          <ReactIcon className="w-24 mx-auto" />
          <h1 className="text-xl">Software Development</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            explicabo est non facilis deserunt provident porro quas doloribus,
            ipsum tempore?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
