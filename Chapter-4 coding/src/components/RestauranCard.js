import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  Code,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdLocalOffer } from "react-icons/md";
import { IMG_CDN_URL } from "./config";

//!filter
function filterRestauant(searchData, restaurant) {
  const filter = restaurant.filter((res) => {
    return res.data.name.toLowerCase().includes(searchData.toLowerCase());
  });

  return filter;
}

function RestauranCard({ restaurants }) {
  const { colorMode } = useColorMode();
  const [searchText, setSearchText] = useState();
  const [restaurant, setRestaurant] = useState(restaurants);

  const submitData = (event) => {
    event.preventDefault();
    const filterData = filterRestauant(searchText, restaurant);
    setRestaurant(filterData);
  };

  useEffect(() => {
    if (!searchText) {
      setRestaurant(restaurants);
    }
  }, [searchText]);

  return restaurant.length === 0 ? (
    <>
      <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
        <form onSubmit={submitData}>
          <Input
            w={"md"}
            focusBorderColor="#FF0000"
            bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
            border={"1px solid orange"}
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"search"}
            placeholder="Search restaurant"
          />
        </form>
      </Box>
      <Heading textAlign={"center"}>No restaraunt found</Heading>
    </>
  ) : (
    <>
      <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
        <form onSubmit={submitData}>
          <Input
            w={"md"}
            focusBorderColor="#FF0000"
            bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
            border={"1px solid orange"}
            defaultValue={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type={"search"}
            placeholder="Search restaurant"
          />
        </form>
      </Box>
      <SimpleGrid
        mt={10}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 2fr))"
      >
        {restaurant.map((restaurn) => (
          <Card
            transition={"all 0.5s"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            padding={2}
            key={restaurn.data.id}
          >
            <Image
              objectFit={"cover"}
              alt="image"
              src={`${IMG_CDN_URL}${restaurn.data.cloudinaryImageId}`}
            />
            <CardHeader>
              {restaurn.data?.name}{" "}
              <Text color={"gray.500"} fontSize={12}>
                {...restaurn.data?.cuisines.join(", ")}
              </Text>
            </CardHeader>
            <HStack justifyContent={"space-evenly"}>
              <Code
                w={8}
                bgColor={
                  restaurn.data?.avgRating >= 4.0 ? "green.400" : "orange.300"
                }
              >
                {restaurn.data?.avgRating}
              </Code>
              <Text color={"gray.500"} fontSize={12}>
                {restaurn.data?.slaString}
              </Text>
              <Text color={"gray.500"} fontSize={12}>
                {restaurn.data?.costForTwoString}
              </Text>
            </HStack>
            <Divider mt={5} color={"gray.400"} />
            <Text color={"#CC5500"} display={"flex"} alignItems="center" mt={5}>
              <MdLocalOffer color="#CC5500" style={{ marginRight: "4px" }} />

              {restaurn.data?.aggregatedDiscountInfo?.header}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default RestauranCard;
