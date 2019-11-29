import React from "react";
import {
  Button,
  Form,
  Grid,
  Container
} from "semantic-ui-react";

class CreatePost extends React.Component {
 
  render() {
    return (
      <Container style={{ marginTop: "7em" }}>
        <Grid style={{ height: "100vh" }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form>
              <Form.Input fluid label='Title' placeholder='Title ' />
              <Form.TextArea label='Description' placeholder='Description to show on the home page...' />
              <Form.TextArea label='Content' placeholder='Full Content...' />
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default CreatePost;
