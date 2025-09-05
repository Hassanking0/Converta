import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutUs from "./features/about-us/AboutUs";
import HomePage from "./features/home/landing/BusinessLandingPage";
import Footer from "./features/home/landing/components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Footer />,
    children: [
      {
        index: true, // ✅ when visiting `/`
        element: <Navigate to="/business" replace />,
      },
      {
        path: "business",
        element: <HomePage />,
      },
      {
        path: "business/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
