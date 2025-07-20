import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:"/", element: <Home/>
        },
        {
            path:"/about", element:<About/>
        }
    ]
  },
]);
