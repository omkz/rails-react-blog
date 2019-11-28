import React from "react";
import { Container } from "semantic-ui-react";
import AllPosts from "../components/AllPosts";

class HomePage extends React.Component {
  render() {
    return (
      <Container text style={{ marginTop: "7em" }}>
        <AllPosts />
      </Container>
    );
  }
}

export { HomePage };
