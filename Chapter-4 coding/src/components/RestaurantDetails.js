import {
  Box,
  Container,
  Divider,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import Shimmer from "./Shimmer";
import { FaRupeeSign } from "react-icons/fa";
import MenuItems from "./MenuItems";

export const RestaurantDetails = () => {
  const [loading, setLoading] = useState(false);
  const { id: ResturantId } = useParams();
  const [headerInfo, setHeaderInfo] = useState({});
  const [menuDetails, setMenuDetails] = useState([]);
  const getMenuDetails = async () => {
    setLoading(true);
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4698577&lng=78.3578246&restaurantId=${ResturantId}`
    );
    const menu = await data.json();

    setHeaderInfo(menu?.data?.cards[0]?.card?.card?.info);
    setMenuDetails(
      menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setLoading(false);
  };
  console.log("menu", menuDetails);
  useEffect(() => {
    getMenuDetails();
  }, []);

  return loading ? (
    <Shimmer />
  ) : (
    <Container maxW={"container.md"} mt={10}>
      {headerInfo && (
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"xl"} fontWeight={"semibold"}>
              {headerInfo.name}
            </Text>

            {headerInfo?.cuisines && (
              <Text fontSize={"sm"} color={"gray.400"}>
                {...headerInfo?.cuisines?.join(", ")}
              </Text>
            )}
          </VStack>

          <Box
            borderRadius={"md"}
            p={2}
            shadow={"lg"}
            alignItems="center"
            display="flex"
            flexDirection={"column"}
          >
            <HStack>
              <AiTwotoneStar
                color={headerInfo?.avgRating >= 4 ? "green" : "orange"}
              />
              <Text
                fontWeight={"bold"}
                color={headerInfo?.avgRating >= 4 ? "green.600" : "orange.300"}
              >
                {headerInfo?.avgRating}
              </Text>
            </HStack>
            <Divider />
            <Text fontSize={"xs"} fontWeight={"bold"} color="gray.400">
              {headerInfo?.totalRatingsString}
            </Text>
          </Box>
        </HStack>
      )}
      <Divider m={5} />
      <Box mb={5} display={"flex"} alignItems="center">
        <Text fontWeight={"bold"}>{headerInfo.costForTwoMessage}</Text>
      </Box>
      <HStack>
        {headerInfo?.aggregatedDiscountInfo?.descriptionList.map((data) => (
          <Box
            key={data.meta}
            borderRadius={"md"}
            borderColor="gray.100"
            border={"1px"}
            p={2}
          >
            <Text color={"gray.500"} fontSize={"md"} fontWeight="semibold">
              {data.meta}
            </Text>
          </Box>
        ))}
      </HStack>

      <Box>
        <VStack>
          {menuDetails.map((menu) => (
            <MenuItems
              carousel={menu?.card?.card?.carousel}
              catgories={menu?.card?.card?.categories}
              menu={menu?.card?.card?.itemCards}
              key={menu?.card?.card?.title}
              title={menu?.card?.card?.title}
            />
          ))}
        </VStack>
      </Box>
    </Container>
  );
};
