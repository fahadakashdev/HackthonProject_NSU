import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Otp from "../pages/Otp/Otp";
import ReportDetails from "../pages/ReportDetails/ReportDetails";
import UserProfile from "../pages/UserProfile/UrerProfile";

  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/otp",
                element: <Otp></Otp>
            },
            {
                path: "/report-details",
                element: <ReportDetails></ReportDetails>
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            }
            
        ]}


  ]);