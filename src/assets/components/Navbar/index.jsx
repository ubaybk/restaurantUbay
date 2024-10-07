import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-around p-3">
        <Link to={"/"}>
          <div className="flex w-8 h-8">
            <img src="./asset/img/1.png" alt="gbr1" />
            <img src="./asset/img/2.png" alt="" />
          </div>
        </Link>
        <div className="flex gap-3">
          <Link to={"/menu"}>
            <h1>Menu</h1>
          </Link>

          {token ? (
            <h1 onClick={handleLogout} className="cursor-pointer">
              {" "}
              Logout
            </h1>
          ) : (
            <div className="flex gap-3">
              <Link to={"/login"}>
                <h1>Login</h1>
              </Link>
              <Link to={"/register"}>
                <h1>Register</h1>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
