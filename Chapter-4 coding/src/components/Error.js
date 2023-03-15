import { Box, Heading, Img } from "@chakra-ui/react";
import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorImg from "../assets/error.jpg";

export default function Error() {
  const routeError = useRouteError();
  console.trace(routeError);
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent="center"
      alignItems={"center"}
      mt="10"
    >
      {/* <Img src={ErrorImg} /> */}
      <Heading color={"orange.500"} fontSize="8xl">
        {routeError.status}
      </Heading>
      <Heading color={"orange.500"} fontSize="6xl">
        {" "}
        {routeError.statusText}
      </Heading>
    </Box>
  );
}
