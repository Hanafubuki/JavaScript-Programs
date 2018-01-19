import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './public/posts.css';

class EachPost extends Component {
  render() {
    return (
      <div className="box">
        <h1>{this.props.post.title}</h1> <br />
        <div className="box-content">{this.props.post.content}</div>
        <p className="box-details">{this.props.post.solved} <span></span> {this.props.post.category} <span></span> 1 Hours ago <span></span> 5 Answers</p>
        <a href={'/questions/' + this.props.post.title}>Read more</a>
      </div>
    );
  }
}

export default EachPost;
