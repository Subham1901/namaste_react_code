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
import useRestaurant from "../utils/useRestaurant";

export const RestaurantDetails = () => {
  const { id: ResturantId } = useParams();

  //Custom Hook
  const [headerInfo, menuDetails] = useRestaurant(ResturantId);

  return menuDetails.length === 0 ? (
    <Shimmer type={"menu"} />
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
            bgColor={"#FC8019"}
            borderRadius={"md"}
            w={["xs", "sm", "md"]}
            p={2}
          >
            <Text
              color={"white"}
              textAlign="center"
              fontSize={"md"}
              fontWeight="semibold"
            >
              {data.meta.split("|")[0]}
            </Text>
          </Box>
        ))}
      </HStack>

      <Box>
        <VStack>
          {menuDetails.map((menu, index) => (
            <MenuItems
              carousel={menu?.card?.card?.carousel}
              catgories={menu?.card?.card?.categories}
              menu={menu?.card?.card?.itemCards}
              key={menu?.card?.card?.title || index}
              title={menu?.card?.card?.title}
            />
          ))}
        </VStack>
      </Box>
    </Container>
  );
};
