import React, { useEffect } from "react";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
export default function Profile() {
  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(() => {
      console.log("Swiggy CLONE");
    }, 1000);

    return () => {
      console.log("return useEffect");
      clearInterval(interval);
    };
  }, []);
  console.log("render");
  return (
    <Container>
      <Heading>Hello</Heading>
    </Container>
  );
}
