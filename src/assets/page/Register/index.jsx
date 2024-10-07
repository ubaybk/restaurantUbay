import { IoIosPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TfiControlEject } from "react-icons/tfi";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [successRegister, setSuccessRegister] = useState(false);
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    name: "",
    username: "",
    password: "",
    roleId: "",
  });

  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const payload = {
      ...formRegister,
      roleId: parseInt(formRegister.roleId),
    };

    axios
      .post("https://api.mudoapi.site/register", payload)
      .then((res) => {
        setSuccessRegister(true);

        setTimeout(() => {
          navigate("/login");
        }, 3000);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
        <div className="border-2 border-white rounded-lg p-5">
          <div className="flex flex-col justify-center items-center mb-8 gap-3">
            <Link to="/">
              <img src="./asset/img/logo.png" alt="" />
            </Link>
            <h1 className="text-white font-semibold">Register</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                className="pl-10 bg-transparent border py-2 border-gray-400 text-white rounded-xl"
              />
              <IoPersonCircleOutline className="absolute left-3 text-white top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>
            <div className="relative">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Username"
                className="pl-10 bg-transparent border py-2 border-gray-400 text-white rounded-xl"
              />
              <IoIosPerson className="absolute left-3 text-white top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="pl-10 bg-transparent border py-2 border-gray-400 text-white rounded-xl"
              />
              <RiLockPasswordFill className="absolute left-3 text-white top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>
            <div className="relative">
              <input
                type="text"
                name="roleId"
                onChange={handleChange}
                placeholder="Role"
                className="pl-10 bg-transparent border py-2 border-gray-400 text-white rounded-xl"
              />
              <TfiControlEject className="absolute left-3 text-white top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>

            <div className="bg-white text-center py-2 rounded-xl">
              <button onClick={handleSubmit}>Register</button>
            </div>
          </div>
        </div>

        {successRegister && <div>Register Berhasil</div>}
      </div>
    </>
  );
};
export default Register;
