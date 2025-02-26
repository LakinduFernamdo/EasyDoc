import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContactPage from "./Pages/ContactPage.jsx";  
import AboutPage from "./Pages/AboutPage.jsx";
import DoctorsPage from "./Doctor/DoctorPage.jsx";
import UserPage from "./Pages/UserAccount.jsx";
import UserRegister from "../src/UserRegister/PatientRegister.jsx"
import LoginPage from "../src/UserLogin/LoginPage.jsx"
import SupervisorLogin from "../src/Supervisor/SuperviserLogin.jsx"
import LogoIcon from "../src/HeaderComponents/Logo/Logo.jsx"
import SignIn from "../src/HeaderComponents/SignIn/SignIn.jsx"




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/contact",
    element:<ContactPage />,
  },
  {
    path: "/doctors",
    element:<DoctorsPage />,
  },
  {
    path: "/about",
    element:<AboutPage />,
  }
  ,{
    path: "/user-account",
    element:<UserPage />,
  },
  {
    path: "/signUp",
    element:<UserRegister /> , 
  },
  {
    path: "/signIn",
    element:<LoginPage />, //initiall page for sign in
  }

  ,{
    path: "/supervisorLogin",
    element:<SupervisorLogin />,
  }
  ,
  {
    path: "/signIn",
    element:<SignIn />, //when click sign in button whrere sign in it will redirect to this page
  },
  {
    path: "/",
    element:<LogoIcon />, //when click logo it will redirect to home page
  }
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
