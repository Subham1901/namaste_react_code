import { Container } from "@chakra-ui/react";
import React from "react";
import { RESTAURANT_LIST } from "./config";
import RestauranCard from "./RestauranCard";
import Search from "./Search";

export default function RestaurantList() {
  return (
    <Container maxW={"container.xl"}>
      <Search />
      <RestauranCard restaurant={RESTAURANT_LIST} />
    </Container>
  );
}
