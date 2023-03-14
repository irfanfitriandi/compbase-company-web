import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import img from "../../../assets/profile.jpg";
import ClientCard from "../../../components/ClientCard";
import { ClientsTypes } from "../../../shared/types/clients";
import { setBookmarks } from "../../../shared/utils/ReduxReducer";
import { RootState } from "../../../shared/types/redux";

const Clients = () => {
  const dispatch = useDispatch();
  const [clients, setClients] = useState<ClientsTypes[]>([]);
  const savedClient = useSelector((state: RootState) => state.data.bookmarks);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setClients(res.data);
    });
  };

  const handleBookmark = (data: ClientsTypes) => {
    const checkExist = localStorage.getItem("SavedClient");

    if (checkExist) {
      let parseClient: ClientsTypes[] = JSON.parse(checkExist);
      let exist = parseClient.filter((item) => item.id === data.id);
      let inExist = exist[0];

      if (inExist !== undefined) {
        alert("Failed: Movie already added in saved clients!");
        return;
      }
      parseClient.push(data);
      localStorage.setItem("SavedClient", JSON.stringify(parseClient));
      dispatch(setBookmarks(parseClient));
    } else {
      localStorage.setItem("SavedClient", JSON.stringify([data]));
    }
    alert("Success: Movie added to saved clients!");
  };

  const newClients: ClientsTypes[] = clients.map((u: any) => ({
    ...u,
    image: { img },
  }));

  return (
    <section
      id="clients"
      className="flex flex-col items-center bg-gray-100 px-4 py-16 min-h-[100vh]"
    >
      <div className="flex flex-col items-center pb-16" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl antialiased">Our Clients</h1>
        <span className="w-32 border-t-[3px] md:w-44 md:border-t-4 border-[#FF1F57] mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto px-10 md:px-24 w-full">
        {newClients.map((data, idx) => {
          const isSaved = savedClient.find((item) => item.id === data.id);

          return (
            <ClientCard
              data-aos="fade-up"
              key={idx}
              id={data.id}
              name={data.name}
              compname={data.company.name}
              img={data.image.img}
              color={isSaved ? "#FF1F57" : "white"}
              onClickBookmark={() => handleBookmark(data)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
