import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { RESTAURANT_LIST } from "./config";
import RestauranCard from "./RestauranCard";
import Shimmer from "./Shimmer";

//!filter
function filterRestauant(searchData, restaurant) {
  const filter = restaurant.filter((res) => {
    return res.data.name.toLowerCase().includes(searchData.toLowerCase());
  });

  return filter;
}
export default function RestaurantList() {
  const { colorMode } = useColorMode();
  const [searchText, setSearchText] = useState();
  const [loading, setLoading] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const submitData = (event) => {
    event.preventDefault();
    if (searchText) {
      const filterData = filterRestauant(searchText, allRestaurants);
      setFilteredRestaurant(filterData);
    }
  };

  useEffect(() => {
    if (!searchText) {
      setFilteredRestaurant(allRestaurants);
    }
  }, [searchText]);
  console.log("render");
  useEffect(() => {
    //API Call
    console.log("inside useeffect");
    getRestaurants();
  }, []);

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

  //early return
  if (!filteredRestaurant) {
    return null;
  }
  return loading ? (
    <>
      <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
        <form onSubmit={submitData}>
          <Input
            w={"sm"}
            focusBorderColor="#FF0000"
            bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
            border={"1px solid orange"}
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"search"}
            placeholder="Search restaurant"
          />
          <Button ml={4} w={["full", "70"]} type="submit">
            Search
          </Button>
        </form>
      </Box>
      <Shimmer list={15} />
    </>
  ) : (
    <Container maxW={"container.xl"}>
      <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
        <form onSubmit={submitData}>
          <Input
            w={"sm"}
            focusBorderColor="#FF0000"
            bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
            border={"1px solid orange"}
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"search"}
            placeholder="Search restaurant"
          />
          <Button ml={4} w={["full", "70"]} type="submit">
            Search
          </Button>
        </form>
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
