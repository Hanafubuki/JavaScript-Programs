import React, { Component } from 'react';
import './public/posts.css';

class AddPost extends Component {
  constructor(){
    super();
    this.state = {
      newPost: [],
      cat: ''
    }
  }

  handleChange(e){
    this.setState({cat: e.target.value});
  }

  handleSubmit(e){
    if(this.refs.title.value === '' || this.state.cat === '' || this.refs.content.value === ''){
      alert('Title, details and category are required');
    } else {
      this.setState({newPost:{
        title: this.refs.title.value,
        content: this.refs.content.value,
        category: this.state.cat,
        solved: 'Unsolved'
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
            <input type="text" className="title" ref="title" placeholder="Title" /><br />
            <textarea rows="5" className="content" ref="content" placeholder="Details"></textarea><br />
            <select className="category" onChange={this.handleChange.bind(this)}>
              <option value="category" selected disabled hidden><b>Choose Category</b></option>
              <option value="El Psy Congroo">El Psy Congroo</option>
              <option value="Programming Unlogically">Programming</option>
              <option value="Quantum Physics">Quantum Physics</option>
              <option value="Rick and Morty">Rick and Morty</option>
              <option value="Theories about life">Theories about life</option>
            </select>
            <button type="submit">Ask!</button>
        </form>
      </div>
      <h1 className="titleQuest">Questions</h1>
      </div>
    );
  }
}

export default AddPost;
