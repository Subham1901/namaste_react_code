import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Img,
  useColorMode,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import logo from "../assets/food.webp";
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"container.xl"}>
      <Box
        pos="relative"
        position={"static"}
        boxShadow={"lg"}
        padding="2"
        display={"flex"}
        justifyContent="space-evenly"
      >
        <Box
          cursor={"pointer"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img height={70} width={70} mr={2} src={logo} />
          <Heading fontSize={"xl"} textTransform={"uppercase"}>
            Food247
          </Heading>
        </Box>
        <HStack>
          <Button
            css={{
              "&:hover": {
                color: "orange",
              },
            }}
            variant={"unstyled"}
            mr={2}
          >
            Home
          </Button>
          <Button
            css={{
              "&:hover": {
                color: "orange",
              },
            }}
            variant={"unstyled"}
            mr={10}
          >
            About{" "}
          </Button>

          <Button variant={"unstyled"} p={0} onClick={toggleColorMode}>
            {colorMode === "light" ? <RiMoonClearLine /> : <BsFillSunFill />}
          </Button>

          <Button variant={"unstyled"}>
            <Avatar
              bgColor={"orange"}
              size={"sm"}
              icon={<MdOutlineShoppingCart size={20} />}
            >
              <AvatarBadge boxSize="1.5em" bg="green.500">
                0
              </AvatarBadge>
            </Avatar>
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default Header;
