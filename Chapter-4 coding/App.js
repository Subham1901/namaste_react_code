import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./src/components/Footer";
import Header from "./src/components/Header";
import RestaurantList from "./src/components/RestaurantList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import { RestaurantDetails } from "./src/components/RestaurantDetails";
import Profile from "./src/components/Profile";
import ShimmerLoad from "./src/components/Shimmer";
import SignIn from "./src/components/SignIn";
import { Provider } from "react-redux";
import Store from "./src/utils/Store";
import Cart from "./src/components/Cart";

const About = lazy(() => import("./src/components/About"));
const Contact = lazy(() => import("./src/components/Contact"));

const AppLayout = () => {
  return (
    <>
      <Provider store={Store}>
        <Header />
        {/* <RestaurantList /> */}
        {/* Outlet */}
        <Outlet />
        <Footer />
      </Provider>
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
        element: (
          <Suspense fallback={<ShimmerLoad type={"menu"} />}>
            {" "}
            <About />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<ShimmerLoad type={"menu"} />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <RouterProvider router={appRouter} />
  </ChakraProvider>
);
