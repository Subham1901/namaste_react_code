import { Box, HStack, Text } from "@chakra-ui/react";
import { MdCircle } from "react-icons/md";

export const Footer = () => {
  return (
    <Box p={5} mt={20} display={"flex"} justifyContent={"center"}>
      <HStack alignItems={"center"} justifyContent="center">
        <Text fontSize={["10", "10", "12", "14"]}>Copyright@Food247</Text>
        <MdCircle size={6} />
        <Text fontSize={["10", "10", "12", "14"]}>
          Created by <span>SubhamPanda</span>
        </Text>
        <MdCircle size={6} />
        <Text fontSize={["10", "10", "12", "14"]}>FOOD24*7</Text>
      </HStack>
    </Box>
  );
};
