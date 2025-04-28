import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import DoctorInformations from "../src/Doctor/DoctorPage.jsx";
import User from "./UserProfile/User.jsx";
import UserRegister from "../src/UserRegister/PatientRegister.jsx"
import LoginPage from "../src/UserLogin/LoginPage.jsx"
import SupervisorLogin from "../src/Supervisor/SuperviserLogin.jsx"
import LogoIcon from "../src/HeaderComponents/Logo/Logo.jsx"
import SignIn from "../src/HeaderComponents/SignIn/SignIn.jsx"
import Sup_Dashboard from "../src/Supervisor/ControllPannel/DashBoard.jsx"
import Sup_PatientData from "../src/Supervisor/ControllPannel/PatientData.jsx"
import Sup_DoctorData from "../src/Supervisor/ControllPannel/DoctorData.jsx"
import Sup_Appoinments from "../src/Supervisor/ControllPannel/Appoinments.jsx"
import Sup_Bills from "../src/Supervisor/ControllPannel/Bills.jsx"




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  }
  , {
    path: "/user-account",
    element: <User />,
  },
  {
    path: "/signUp",
    element: <UserRegister />,
  },
  {
    path: "/signIn",
    element: <LoginPage />, //initiall page for sign in
  },
  {
    path: "/doctor-information",
    element: <DoctorInformations />,

  }
  ,

  {
    path: "/signIn",
    element: <SignIn />, //when click sign in button whrere sign in it will redirect to this page
  },
  {
    path: "/",
    element: <LogoIcon />, //when click logo it will redirect to home page
  },
  {
    path: "/supervisor-signIn",
    element: <SupervisorLogin />,
  },
  {
    path: "/supervisor-dashboard",
    element: <Sup_Dashboard />,
  },
  {
    path: "/supervisor/patient-deatails",
    element: <Sup_PatientData />,
  },
  {
    path: "/supervisor/doctor-deatails",
    element: <Sup_DoctorData />,
  },
  {
    path: "/supervisor/appoinments",
    element: <Sup_Appoinments />,
  },
  {
    path: "/supervisor/bills",
    element: <Sup_Bills />,
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
