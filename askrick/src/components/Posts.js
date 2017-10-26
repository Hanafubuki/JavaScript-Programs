import React, { Component } from 'react';
import EachPost from './EachPost.js'

class Posts extends Component {
  render() {
    let postsList;
    postsList = this.props.posts.map(post => {
      return(
        <EachPost key={post.title} post={post} />
      );
    });

    return (
      <div className="Posts">
        {postsList}
      </div>
    );
  }
}

export default Posts;
