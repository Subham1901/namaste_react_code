import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import food from "../assets/about.jpg";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parenrt render");
    return (
      <Container maxW={"container.xl"} mt={5}>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "column", "row"]}
          borderRadius={"md"}
          justifyContent="space-between"
          alignItems={"center"}
          bgColor={"red.50"}
        >
          <Box
            p={3}
            ml={["0", "0", "0", "10"]}
            display={"flex"}
            flexDirection="column"
          >
            <Text fontSize={"3xl"} fontWeight="bold">
              Meet, Eat & Enjoy
            </Text>
            <Text color={"#FC8019"} fontSize={"3xl"} fontWeight="bold">
              the true test
            </Text>
            <Text fontSize={"12"} color="gray.500">
              Making a reservation at delicious restaurant is easy and takes
              just a couple of minutes
            </Text>

            <Button
              mt={3}
              css={{
                "&:hover": {
                  backgroundColor: "#FC8019",
                  color: "white",
                },
              }}
              borderRadius="full"
              bgColor={"#FC8019"}
              w={"xs"}
            >
              <Link to={"/"}>Explore Restaurants</Link>
            </Button>
          </Box>
          <Img
            borderRightRadius={"md"}
            w={600}
            h={500}
            src={food}
            objectFit="cover"
          />
        </Box>
      </Container>
    );
  }
}

export default About;
