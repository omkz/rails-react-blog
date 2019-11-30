import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

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

  deletePost(id) {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`/api/v1/posts/${id}`)
        .then(res => {
          toast.error("Post successfully deleted");
          this.props.history.push("/");
        }).catch(function(error) {
          toast.error(JSON.stringify(error.response.data));
        });
    }
  }

  render() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            {this.state.title}
          </Header>
          <p style={{ fontSize: "1.33em" }}>{this.state.content}</p>
          <Link
            to={"/posts/" + this.props.match.params.id + "/edit/"}
            className="ui button"
          >
            Edit
          </Link>
          <Link
            to={"#"}
            onClick={() => this.deletePost(this.props.match.params.id)}
            className="ui button"
          >
            Delete
          </Link>
        </Container>
      </Segment>
    );
  }
}

export default DetailPost;
