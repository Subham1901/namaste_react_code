import { Box, Heading, Img } from "@chakra-ui/react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

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
      <Heading color={"red.500"} fontSize="8xl">
        {routeError.status}
      </Heading>
      <Heading fontWeight={"semibold"} color={"red.500"} fontSize="3xl">
        {" "}
        Oops! The page you requested was {routeError.statusText}
      </Heading>
      <Link to={window.location.origin}>Goto</Link>
    </Box>
  );
}
