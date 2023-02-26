import { Box, Input, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function Search() {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Box alignItems="center" display={"flex"} justifyContent="center" p={5}>
      <Input
        w={"md"}
        focusBorderColor="#FF0000"
        bgColor={colorMode === "light" ? "gray.50" : "gray.700"}
        border={"1px solid orange"}
        type={"search"}
        placeholder="Search restaurant"
      />
    </Box>
  );
}
