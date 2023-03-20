import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

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
      <Container>
        <Heading>About us</Heading>
        <ProfileClass name="subham" />
      </Container>
    );
  }
}

export default About;
