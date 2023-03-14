import FormUs from "../../../components/Form";
import map from "../../../assets/map.jpg";

const GetInTouch = () => {
  return (
    <section
      id="product"
      className="flex flex-col items-center px-4 py-16 min-h-[100vh] bg-gray-100"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center pb-16" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl antialiased">Get In Touch</h1>
        <span className="w-32 border-t-[3px] md:w-44 md:border-t-4 border-[#FF1F57] mt-2" />
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full flex flex-col justify-center items-center bg-[#A5CDCD] md:rounded-l-lg">
          <img className="h-32 md:rounded-l-lg" src={map} alt="map" />
          <h1 className="text-white antialiased">--Coming Soon--</h1>
        </div>
        <FormUs />
      </div>
    </section>
  );
};

export default GetInTouch;
