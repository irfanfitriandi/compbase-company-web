import CarouselProduct from "../../../components/Carousel";

const Product = () => {
  return (
    <section
      id="product"
      className="flex flex-col items-center px-4 py-16 min-h-[100vh] overflow-x-hidden"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center pb-16" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl antialiased">Our Product</h1>
        <span className="w-32 border-t-[3px] md:w-44 md:border-t-4 border-[#FF1F57] mt-2" />
      </div>
      <CarouselProduct />
    </section>
  );
};

export default Product;
