import {
  Box,
  Card,
  Container,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const Shimmer = ({ type }) => {
  return (
    <Container
      display={"flex"}
      flexDir="column"
      justifyContent={"center"}
      alignItems="center"
      maxW={"container.xl"}
    >
      {type == "home" && (
        <HStack
          flexWrap={"wrap"}
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
        >
          {Array(6)
            .fill("")
            .map((data, index) => (
              <Card m={(0, "2rem !important")} w={"xs"} p={2} key={index}>
                <Skeleton height={140} />
                <SkeletonText
                  mt="4"
                  noOfLines={5}
                  spacing="4"
                  skeletonHeight="2"
                />
              </Card>
            ))}
        </HStack>
      )}
      {type == "menu" &&
        Array(3)
          .fill("")
          .map((data, index) => (
            <Box
              m={(0, "2rem !important")}
              w={["xs", "md", "xl"]}
              p={2}
              key={index}
            >
              <SkeletonText
                mt="4"
                noOfLines={5}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          ))}
    </Container>
  );
};

export default Shimmer;
