import axios from "axios";
import { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const [successLogin, setSuccessLogin] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
      
    });
   
  };

  const handleLogin = () => {
  

    axios
      .post("https://api.mudoapi.site/login", formLogin)
      .then((res) => {
        console.log(res);
        const token = res.data.data.token;
        localStorage.setItem("access_token", token);
        setSuccessLogin(true);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <>
      <div className="bg-blue-500 h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <Link to="/">
          <img src="./asset/img/logo.png" alt="" />
          </Link>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="text"
                onChange={handleChange}
                name="username"
                placeholder="Username"
                className="pl-10 bg-transparent border py-2 border-gray-400 text-white rounded-xl"
              />
              <IoIosPerson className="absolute left-3 text-white top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>
            <div className="relative">
              <input
                type="password"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                name="password"
                placeholder="Password"
                className="pl-10 bg-transparent border py-2 border-gray-400 text-white rounded-xl"
              />
              <RiLockPasswordFill className="absolute left-3 text-white top-1/2 transform -translate-y-1/2 w-5 h-5" />
            </div>
            <div className="bg-white text-center py-2 rounded-xl">
              <button onClick={handleLogin}>LOGIN</button>
            </div>
            <p className="text-end mt-[-10px] text-white font-semibold text-[12px]">
              Forgot Password
            </p>
           
           
              {successLogin && (
                 <div className="flex flex-col justify-center items-center gap-5">
                 <h1>Berhasil Login</h1>
                 <AiOutlineLoading3Quarters className="animate-spin" />
               </div>
              )}
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Login;
