import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import RestauranCard from "./RestauranCard";
import Shimmer from "./Shimmer";
import { filterRestauant } from "../utils/Common";
import useOnline from "../utils/useOnline";
import { AiOutlineWarning } from "react-icons/ai";
import useApi from "../utils/useApi";

export default function RestaurantList() {
  const { colorMode } = useColorMode();
  const [searchText, setSearchText] = useState();
  //custom hook
  const [allRestaurants, filteredRestaurant, setFilteredRestaurant, loading] =
    useApi();
  const isOnline = useOnline();

  const getFilteredRestuarnts = (e) => {
    setSearchText(e.target.value);
    const filterData = filterRestauant(e.target.value, allRestaurants);
    setFilteredRestaurant(filterData);
  };

  useEffect(() => {
    if (!searchText) {
      setFilteredRestaurant(allRestaurants);
    }
  }, [searchText]);

  //check internet connection
  if (!isOnline) {
    return (
      <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Box alignItems={"center"} display={"flex"} flexDirection="column">
          <AiOutlineWarning size={60} color="red" />
          <Heading fontSize={"4xl"} fontWeight="semibold">
            Check your connection!!
          </Heading>
        </Box>
      </Box>
    );
  }
  //early return
  if (!filteredRestaurant) {
    return null;
  }
  return loading ? (
    <>
      <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
        {/* <form onSubmit={submitData}> */}
        <Input
          w={"sm"}
          borderRadius="full"
          focusBorderColor="#FC8019"
          border={"1px solid orange"}
          defaultValue={searchText}
          onChange={(e) => getFilteredRestuarnts(e)}
          type={"search"}
          placeholder="Search restaurant"
        />

        {/* </form> */}
      </Box>
      <Shimmer type={"home"} />
    </>
  ) : (
    <Container maxW={"container.xl"}>
      <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
        {/* <form onSubmit={submitData}> */}
        <Input
          w={"sm"}
          borderRadius="full"
          focusBorderColor="#FC8019"
          border={"1px solid #FC8019"}
          defaultValue={searchText}
          onChange={(e) => getFilteredRestuarnts(e)}
          type={"search"}
          placeholder="Search restaurant"
        />

        {/* </form> */}
      </Box>
      <HStack
        flexWrap={"wrap"}
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
      >
        {filteredRestaurant.length === 0 ? (
          <Text
            textAlign={"center"}
            m={"auto"}
            color={"red.400"}
            fontWeight={"semibold"}
            fontSize="2xl"
          >
            Sorry! Couldn't found restaurant with name "{searchText}" ☹️
          </Text>
        ) : (
          filteredRestaurant.map((restaurn) => (
            <RestauranCard key={restaurn?.data?.uuid} restaurant={restaurn} />
          ))
        )}
      </HStack>
    </Container>
  );
}
