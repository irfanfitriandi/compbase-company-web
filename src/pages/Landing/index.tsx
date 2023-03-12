import { FloatButton } from "antd";
import Layout from "../../components/Layout";
import Clients from "./Clients";
import Hero from "./Hero";
import Services from "./Services";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
      <FloatButton.BackTop />
    </Layout>
  );
};

export default index;
