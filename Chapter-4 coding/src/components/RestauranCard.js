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
import { MdCircle, MdLocalOffer } from "react-icons/md";
import { IMG_CDN_URL } from "./config";
import { Link } from "react-router-dom";

function RestauranCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.data.id}`}>
      <Card
        m={(0, "1rem !important")}
        w={["xs", "250px"]}
        transition={"all 0.5s"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
            backgroundColor: "#FAF9F6",
          },
        }}
        padding={2}
        key={restaurant.data.id}
      >
        <Image
          borderRadius={"md"}
          objectFit={"cover"}
          alt="image"
          src={`${IMG_CDN_URL}${restaurant.data.cloudinaryImageId}`}
        />
        <CardHeader>
          <Text fontWeight={"semibold"}> {restaurant.data?.name} </Text>

          <Text color={"gray.500"} fontSize={12}>
            {...restaurant.data?.cuisines.join(", ")}
          </Text>
        </CardHeader>
        <HStack
          display={"flex"}
          alignItems={"center"}
          alignContent="center"
          justifyContent={"space-evenly"}
        >
          <Code
            w={8}
            bgColor={
              restaurant.data?.avgRating >= 4.0 ? "green.500" : " #FC8019"
            }
          >
            {restaurant.data?.avgRating}
          </Code>
          <MdCircle size={5} color="gray" />
          <Text color={"gray.500"} fontSize={12}>
            {restaurant.data?.slaString}
          </Text>
          <MdCircle size={5} color="gray" />
          <Text color={"gray.500"} fontSize={12}>
            {restaurant.data?.costForTwoString}
          </Text>
        </HStack>

        {restaurant.data?.aggregatedDiscountInfo?.header && (
          <>
            <Divider mt={5} color={"gray.400"} />
            <Text color={"#CC5500"} display={"flex"} alignItems="center" mt={5}>
              <MdLocalOffer color="#CC5500" style={{ marginRight: "4px" }} />

              {restaurant.data?.aggregatedDiscountInfo?.header}
            </Text>
          </>
        )}
      </Card>
    </Link>
  );
}

export default RestauranCard;
