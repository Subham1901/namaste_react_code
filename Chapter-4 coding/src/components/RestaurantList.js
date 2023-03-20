import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  HStack,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import RestauranCard from "./RestauranCard";
import Shimmer from "./Shimmer";
import { filterRestauant } from "../utils/Common";

export default function RestaurantList() {
  const { colorMode } = useColorMode();
  const [searchText, setSearchText] = useState();
  const [loading, setLoading] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // const submitData = (event) => {
  //   event.preventDefault();
  //   if (searchText) {
  //     const filterData = filterRestauant(searchText, allRestaurants);
  //     setFilteredRestaurant(filterData);
  //   }
  // };

  const getFilteredRestuarnts = (e) => {
    const filterData = filterRestauant(e.target.value, allRestaurants);
    setFilteredRestaurant(filterData);
  };

  //get restraurants
  const getRestaurants = async () => {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setLoading(false);
  };

  useEffect(() => {
    if (!searchText) {
      setFilteredRestaurant(allRestaurants);
    }
  }, [searchText]);

  useEffect(() => {
    //API Call
    console.log("inside useeffect");
    getRestaurants();
  }, []);

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
          focusBorderColor="#FF0000"
          bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
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
          focusBorderColor="#FF0000"
          bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
          border={"1px solid orange"}
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
            Oops! No restaurant found!!☹️
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
