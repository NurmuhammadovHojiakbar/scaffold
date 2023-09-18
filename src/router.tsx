import { useRoutes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import CaseStudy from "./pages/case-study";
import Blog from "./pages/blog";
import Services from "./pages/services";
import Home from "./pages/home";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/case-study",
      element: <CaseStudy />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
};

export default Router;
