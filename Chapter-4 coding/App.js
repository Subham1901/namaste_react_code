import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./src/components/Footer";
import Header from "./src/components/Header";
import RestaurantList from "./src/components/RestaurantList";

const AppLayout = () => {
  return (
    <>
      <Header />
      <RestaurantList />
      <Footer />
    </>
  );
};

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
    <AppLayout />
  </ChakraProvider>
);
