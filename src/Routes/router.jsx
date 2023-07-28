import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Components/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);


  export default router;