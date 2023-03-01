import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
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

function RestauranCard({ restaurant }) {
  return (
    <Card
      m={(0, "2rem !important")}
      w={"xs"}
      transition={"all 0.5s"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      padding={2}
      key={restaurant.data.id}
    >
      <Image
        objectFit={"cover"}
        alt="image"
        src={`${IMG_CDN_URL}${restaurant.data.cloudinaryImageId}`}
      />
      <CardHeader>
        {restaurant.data?.name}{" "}
        <Text color={"gray.500"} fontSize={12}>
          {...restaurant.data?.cuisines.join(", ")}
        </Text>
      </CardHeader>
      <HStack justifyContent={"space-evenly"}>
        <Code
          w={8}
          bgColor={
            restaurant.data?.avgRating >= 4.0 ? "green.400" : "orange.300"
          }
        >
          {restaurant.data?.avgRating}
        </Code>
        <Text color={"gray.500"} fontSize={12}>
          {restaurant.data?.slaString}
        </Text>
        <Text color={"gray.500"} fontSize={12}>
          {restaurant.data?.costForTwoString}
        </Text>
      </HStack>
      <Divider mt={5} color={"gray.400"} />
      <Text color={"#CC5500"} display={"flex"} alignItems="center" mt={5}>
        <MdLocalOffer color="#CC5500" style={{ marginRight: "4px" }} />

        {restaurant.data?.aggregatedDiscountInfo?.header}
      </Text>
    </Card>
  );
}

export default RestauranCard;
