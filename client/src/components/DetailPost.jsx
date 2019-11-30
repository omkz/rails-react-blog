import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Header, Segment } from "semantic-ui-react";

class DetailPost extends React.Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            {this.state.title}
          </Header>
          <p style={{ fontSize: "1.33em" }}>{this.state.content}</p>
        </Container>
      </Segment>
    );
  }
}

export default DetailPost;
