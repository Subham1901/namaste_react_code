import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./src/components/Footer";
import Header from "./src/components/Header";
import RestaurantList from "./src/components/RestaurantList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import { RestaurantDetails } from "./src/components/RestaurantDetails";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <RestaurantList /> */}
      {/* Outlet */}
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantList />,
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
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const theme = extendTheme({
  config,
});
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={appRouter} />
  </ChakraProvider>
);
