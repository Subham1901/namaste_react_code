import React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Code,
  Container,
  Heading,
  HStack,
  Img,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import logo from "../assets/food.webp";
import { Link } from "react-router-dom";
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"container.xl"}>
      <Box
        alignItems={"center"}
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
        <Box
          w={"sm"}
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Button
            css={{
              "&:hover": {
                color: "#fc8019",
              },
            }}
            variant={"unstyled"}
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            css={{
              "&:hover": {
                color: "#fc8019",
              },
            }}
            variant={"unstyled"}
          >
            <Link to="/about">About</Link>
          </Button>
          <Button
            css={{
              "&:hover": {
                color: "#fc8019",
              },
            }}
            variant={"unstyled"}
          >
            <Link to="/contact">Contact</Link>
          </Button>
          <Button
            css={{
              "&:hover": {
                color: "#fc8019",
              },
            }}
            variant={"unstyled"}
          >
            <Link to="/">Sign In</Link>
          </Button>

          <Button
            css={{
              "&:hover": {
                color: "#fc8019",
              },
            }}
            variant={"unstyled"}
          >
            <Link to="/">
              <Code colorScheme={"green"}>0</Code> Cart
            </Link>
          </Button>

          {/* <Button variant={"unstyled"} p={0} onClick={toggleColorMode}>
            {colorMode === "light" ? <RiMoonClearLine /> : <BsFillSunFill />}
          </Button> */}

          {/* <Button variant={"unstyled"}>
            <Avatar
              bgColor={"orange"}
              size={"sm"}
              icon={<MdOutlineShoppingCart size={20} />}
            >
              <AvatarBadge boxSize="1.5em" bg="green.500">
                0
              </AvatarBadge>
            </Avatar>
          </Button> */}
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
