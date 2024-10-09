import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";


const DetailMenu = () => {
  const { id } = useParams();
  const [dataDetailMenu, setDataDetailMenu] = useState([]);

  const getDetailMenu = () => {
    axios
      .get(`https://api.mudoapi.site/menu/${id}`)
      .then((res) => setDataDetailMenu(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetailMenu();
  }, []);
  return (
    <>
      <Navbar />
      <div h-screen>
        <div className="flex flex-col items-center justify-center ">
          <div className=" flex flex-col items-center gap-3 border-2 p-2 text-center">
            <h1>{dataDetailMenu.name}</h1>
            <img src={dataDetailMenu.imageUrl} className="w-56" alt="" />
            <p>{dataDetailMenu.description}</p>
            <p>{dataDetailMenu.type}</p>
            <p>{dataDetailMenu.price}</p>
            <Link to={`/editmenu/${id}`}>
              <button className="bg-yellow-500 px-3 rounded-lg w-fit">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailMenu;
