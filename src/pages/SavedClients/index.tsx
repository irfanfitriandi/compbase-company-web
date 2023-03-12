import { useSelector, useDispatch } from "react-redux";

import Layout from "../../components/Layout";
import ClientCard from "../../components/ClientCard";

import { ClientsTypes } from "../../shared/types/clients";
import { RootState } from "../../shared/types/redux";
import { setBookmarks } from "../../shared/utils/ReduxReducer";

const SavedClients = () => {
  const dispatch = useDispatch();
  const savedClient = useSelector((state: RootState) => state.data.bookmarks);

  const handleRemove = (data: ClientsTypes) => {
    let dupesavedClient: ClientsTypes[] = savedClient.slice();
    const filterData = dupesavedClient.filter((item) => item.id !== data.id);
    localStorage.setItem("SavedClient", JSON.stringify(filterData));
    dispatch(setBookmarks(filterData));
    alert("Success: Client deleted from saved clients");
  };

  return (
    <Layout>
      <section className="min-h-[100vh] my-24">
        <div className="flex flex-col items-center pb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl antialiased">Saved Clients</h1>
          <span className="w-32 border-t-[3px] md:w-44 md:border-t-4 border-[#FF1F57] mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto px-10 md:px-24 w-full">
          {savedClient.map((data, idx) => (
            <ClientCard
              data-aos="fade-up"
              key={idx}
              id={data.id}
              name={data.name}
              compname={data.company.name}
              img={data.image.img}
              color={`#FF1F57`}
              onClickBookmark={() => handleRemove(data)}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default SavedClients;
