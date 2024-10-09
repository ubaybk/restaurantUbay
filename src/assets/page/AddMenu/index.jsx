import axios from "axios";
import { useState } from "react";

const AddMenu = () => {
  const [formAddMenu, setFormAddMenu] = useState({
    name: "",
    description: "",
    type: "",
    imageUrl: "",
    price: "",
  });

  const handleChange = (e) => {
    // handle change event
    setFormAddMenu({
        ...formAddMenu,
        [e.target.name]: e.target.value, 
    })
    console.log(e.target.value)
  }

  const handleSubmit = () => {
    const token = localStorage.getItem("access_token")
    const payload = ({
        ...formAddMenu,
        price: parseInt(formAddMenu.price)
    })
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

   

    axios
        .post('https://api.mudoapi.site/menu',payload,config)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
  }



  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col mt-9 border-4 p-3 border-yellow-300 rounded-xl gap-2">
            <input type="text" onChange={handleChange} name="name" placeholder="name" className="border-2" />
            <input type="text" onChange={handleChange} name="description" placeholder="description" className="border-2"/>
            <input type="text" onChange={handleChange} name="type" placeholder="type" className="border-2" />
            <input type="text" onChange={handleChange} name="imageUrl" placeholder="imageUrl" className="border-2" />
            <input type="text" onChange={handleChange} name="price" placeholder="price" className="border-2" />
          </div>
          <button onClick={handleSubmit} className="bg-red-400 px-2 rounded-lg font-bold mt-5">submit</button>
        </div>
      </div>
    </>
  );
};

export default AddMenu;
