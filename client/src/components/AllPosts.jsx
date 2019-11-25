import React from "react";
import axios from "axios";

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
      <div>
        {this.state.posts.map(post => {
          return (
            <div className="posts" key={post.id}>
              <p>{post.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllPosts;
