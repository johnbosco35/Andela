/** @format */

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { lazy } from "react";

import LandingComp from "../LandingComp";
import TechnologyExpertsComp from "../TechnologyExpertsComp";
import BusinessComp from "../BusinessComp";
import AboutComp from "../AboutComp";
import Enterprise from "../Enterprise";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingComp />,
      },
      {
        path: "/expert",
        element: <TechnologyExpertsComp />,
      },
      {
        path: "/business",
        element: <BusinessComp />,
      },
      {
        path: "/about",
        element: <AboutComp />,
      },
      {
        path: "/enterprise",
        element: <Enterprise />,
      },
    ],
  },
]);
