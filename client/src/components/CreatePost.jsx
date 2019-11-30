import React from "react";
import { Button, Form, Grid, Container } from "semantic-ui-react";
import { toast } from "react-toastify";
import axios from "axios";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);

    this.state = {
      title: "",
      description: "",
      content: ""
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/v1/posts", {
        title: this.state.title,
        description: this.state.description,
        content: this.state.content
      })
      .then(res => {
        toast.success("Post successfully created");
        this.props.history.push("/");
      })
      .catch(function(error) {
        toast.error(JSON.stringify(error.response.data));
      });

    this.setState({
      title: "",
      body: "",
      is_public: ""
    });
  }

  render() {
    return (
      <Container style={{ marginTop: "7em" }}>
        <Grid style={{ height: "100vh" }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form onSubmit={this.onSubmit}>
              <Form.Input
                fluid
                label="Title"
                placeholder="Title "
                onChange={this.onChangeTitle}
              />
              <Form.TextArea
                label="Description"
                placeholder="Description to show on the home page..."
                onChange={this.onChangeDescription}
              />
              <Form.TextArea
                label="Content"
                placeholder="Full Content..."
                onChange={this.onChangeContent}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default CreatePost;
