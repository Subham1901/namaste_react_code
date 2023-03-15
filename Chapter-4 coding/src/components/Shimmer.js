import {
  Card,
  Container,
  HStack,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

function Shimmer({ list }) {
  return (
    <Container maxW={"container.xl"}>
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
    </Container>
  );
}

export default Shimmer;
