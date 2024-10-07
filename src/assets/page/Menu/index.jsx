import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Home = () => {
  const [dataMenu, setDataMenu] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 20,
    total: null,
    prevPage: null,
    nextPage: null,
  });

  const getData = () => {
    axios
      .get(
        `https://api.mudoapi.site/menus?page=${pagination.page}&perPage=${pagination.perPage}`
      )
      .then((res) => {
        setDataMenu(res.data.data.Data);
        setPagination({
          page: res.data.data.currentPage,
          perPage: res.data.data.perPage,
          total: res.data.data.total,
          prevPage: res.data.data.previosPage,
          nextPage: res.data.data.nextPage,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [pagination.page]);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.delete(
        `https://api.mudoapi.site/menu/${id}`,
        config
      );
      getData();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-center m-10">
        <h1>Menu Makanan</h1>
      </div>
      <div className="mx-52 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <h1 className="bg-blue-400 px-2 rounded-2xl">Back</h1>
            <h1 className="bg-blue-400 px-2 rounded-2xl">Next</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="seacrh"
              className="bg-gray-300 pl-5 rounded-3xl"
            />
          </div>
        </div>
        <div className="bg-orange-300  rounded-md">
          <div className=" grid grid-cols-3 p-3 gap-5">
            {dataMenu.map((item, index) => (
              <div
                key={index}
                className="border border-gray-400   p-2 rounded-xl"
              >
                <img
                  src={item.imageUrl}
                  className="w-[500px] h-[300px]"
                  alt=""
                />
                <h1>{item.name}</h1>
                <p>{item.price}</p>
                <p>{item.type}</p>
                <div className="flex justify-between">
                  <Link to={`/detailmenu/${item.id}`}>
                    <button className="bg-yellow-200 px-2 rounded-lg">
                      detail
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-200 px-2 rounded-lg"
                  >
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
