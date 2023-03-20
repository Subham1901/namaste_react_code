import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    console.log(this.props);
    // place to initialize state variables
    this.state = {
      gitUser: this.props.name,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Subham1901");
    const user = await data.json();

    this.setState({
      gitUser: user,
    });
    console.log("componentDidMount");
    console.log(user);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return (
      <Container>
        <Box>
          <Text>{this.state.gitUser.name}</Text>
        </Box>
      </Container>
    );
  }
}

export default ProfileClass;
