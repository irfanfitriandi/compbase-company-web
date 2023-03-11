import Layout from "../../components/Layout";
import Clients from "./Clients";
import Hero from "./Hero";
import Services from "./Services";

function index() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
    </Layout>
  );
}

export default index;
