import Layout from "components/Layout";
import Clients from "./Clients";
import GetInTouch from "./GetInTouch";
import Hero from "./Hero";
import Product from "./Product";
import Services from "./Services";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
      <Product />
      <GetInTouch />
    </Layout>
  );
};

export default index;
