import React from "react";
import axios from "axios";
import {
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";
import {Link} from 'react-router-dom';

class AllPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get("/api/v1/posts").then(response => {
      this.setState({ posts: response.data });
    });
  }

  render() {
    return (
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          {this.state.posts.map(post => {
            return (
              <div className="posts" key={post.id}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  {post.title}
                </Header>
                <p style={{ fontSize: "1.33em" }}>{post.description}</p>
                <Link to={"/posts/" + post.id + "/detail"} className="ui button">Read More..</Link>
                <Divider
                  as="h4"
                  className="header"
                  horizontal
                  style={{ margin: "3em 0em", textTransform: "uppercase" }}
                >
                  <a href="#">OR</a>
                </Divider>
              </div>
            );
          })}
        </Container>
      </Segment>
    );
  }
}

export default AllPosts;
