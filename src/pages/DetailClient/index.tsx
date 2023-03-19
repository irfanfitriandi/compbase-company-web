import Layout from "components/Layout";
import ImgProgress from "assets/in-progress.jpg";

function DetailClient() {
  return (
    <Layout>
      <section className="min-h-[65vh] my-24">
        <div className="flex flex-col justify-center items-center gap-20 pt-14">
          <img className="w-96" src={ImgProgress} alt="in-progress" />
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#FF1F57]">
            --Under Construction--
          </h1>
        </div>
      </section>
    </Layout>
  );
}

export default DetailClient;
