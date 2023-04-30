import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/LoginLayout/Login/Login/Login";
import Register from "../Pages/LoginLayout/Login/Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";



  const router =createBrowserRouter ([
    {
      path:'/',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'/',
          element:<Navigate to='/category/0'></Navigate>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]

    },
    {
      path:'/category',
      element:<Main></Main>,
      children:[
        {
          path:':id',
         element:<Category></Category>,
         loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<PrivetRouter><News></News></PrivetRouter>,
          loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ])



  export default router;