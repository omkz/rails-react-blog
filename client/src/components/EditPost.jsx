import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Form, Grid, Container, Segment } from "semantic-ui-react";

class EditPost extends React.Component {
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

  componentDidMount() {
    axios
      .get("/api/v1/posts/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          description: response.data.description,
          content: response.data.content
        });
      })
      .catch(function(error) {
        toast.error(JSON.stringify(error.response.data));
      });
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
      .put("/api/v1/posts/" + this.props.match.params.id + "/", {
        title: this.state.title,
        description: this.state.description,
        content: this.state.content
      })
      .then(res => {
        const { from } =
          { from: { pathname: "/posts/" + res.data.id + "/detail" } } ||
          this.props.history.push("/");
        this.props.history.push(from);
        toast.success("Post successfully updated");
      })
      .catch(function(error) {
        toast.error(JSON.stringify(error.response.data));
      });
  }

  render() {
    return (
      <Container style={{ marginTop: "7em" }}>
        <Grid style={{ height: "100vh" }}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  label="Title"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
                <Form.TextArea
                  label="Description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
                <Form.TextArea
                  label="Content"
                  style={{ minHeight: 150 }}
                  value={this.state.content}
                  onChange={this.onChangeContent}
                />
                <Button type="submit">Submit</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default EditPost;
