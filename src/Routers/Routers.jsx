import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import HOme from "../Pages/Home/Home/HOme";


  const router =createBrowserRouter ([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<HOme></HOme>
        }
      ]
    }
  ])



  export default router;