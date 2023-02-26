import React from "react";
import {
  Card,
  CardHeader,
  Code,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { MdLocalOffer } from "react-icons/md";
import { IMG_CDN_URL } from "./config";

function RestauranCard({ restaurant }) {
  if (restaurant?.maindata.length === 0) {
    return <Heading textAlign={"center"}>No restaraunt found</Heading>;
  }
  return (
    <>
      <SimpleGrid
        mt={10}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 2fr))"
      >
        {restaurant.maindata.map((restaurn) => (
          <Card
            transition={"all 0.5s"}
            css={{
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            padding={2}
            key={restaurn.data.data.id}
          >
            <Image
              objectFit={"cover"}
              alt="image"
              src={`${IMG_CDN_URL}${restaurn.data.data.cloudinaryImageId}`}
            />
            <CardHeader>
              {restaurn.data?.data?.name}{" "}
              <Text color={"gray.500"} fontSize={12}>
                {...restaurn.data?.data?.cuisines.join(", ")}
              </Text>
            </CardHeader>
            <HStack justifyContent={"space-evenly"}>
              <Code
                w={8}
                bgColor={
                  restaurn.data?.data?.avgRating >= 4.0
                    ? "green.400"
                    : "orange.300"
                }
              >
                {restaurn.data?.data?.avgRating}
              </Code>
              <Text color={"gray.500"} fontSize={12}>
                {restaurn.data?.data?.slaString}
              </Text>
              <Text color={"gray.500"} fontSize={12}>
                {restaurn.data?.data?.costForTwoString}
              </Text>
            </HStack>
            <Divider mt={5} color={"gray.400"} />
            <Text color={"#CC5500"} display={"flex"} alignItems="center" mt={5}>
              <MdLocalOffer color="#CC5500" style={{ marginRight: "4px" }} />

              {restaurn.data?.data?.aggregatedDiscountInfo?.header}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}

export default RestauranCard;
