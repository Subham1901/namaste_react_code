import { Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { RESTAURANT_LIST } from "./config";
import RestauranCard from "./RestauranCard";

export default function RestaurantList() {
  return (
    <Container maxW={"container.xl"}>
      <RestauranCard restaurants={RESTAURANT_LIST} />
    </Container>
  );
}
