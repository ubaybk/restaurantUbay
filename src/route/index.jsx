import Home from "../assets/page/Home";
import Login from "../assets/page/Login";
import Register from "../assets/page/Register";
import Menu from "../assets/page/Menu";
import DetailMenu from "../assets/page/DetailMenu";
import ProtectedRoute from "./ProtectedRoute";
import AddMenu from "../assets/page/AddMenu";
import EditMenu from "../assets/page/EditMenu/Index";

export const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/addmenu",
    element:<AddMenu/>
  },
  {
    path:"/editmenu/:id",
    element:<EditMenu />
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/detailmenu/:id",
    element: (
      <ProtectedRoute>
        <DetailMenu />
      </ProtectedRoute>
    ),
  },
];
