import React, { Component } from 'react';
import './public/posts.css';

class AddPost extends Component {
  constructor(){
    super();
    this.state = {
      newPost: []
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newPost:{
        title: this.refs.title.value,
        content: this.refs.content.value
      }}, function(){
        //console.log(this.state);
        this.props.addPost(this.state.newPost);
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <div className="ask">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" class="title" ref="title" placeholder="Title" /><br />
            <textarea rows="5" class="content" ref="content" placeholder="Details"></textarea><br />
            <button type="submit">Ask!</button>
        </form>
      </div>
      <h1 className="titleQuest">Questions</h1>
      </div>
    );
  }
}

export default AddPost;
