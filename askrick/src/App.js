import React, { Component } from 'react';
import Posts from './components/Posts.js'
import AddPost from './components/AddPost.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    this.setState({posts: [
      {
        title: 'Are we inside a computer simulation?',
        content: 'If you, me and every person and thing in the cosmos were actually characters in some giant computer game, we would not necessarily know it. The idea that the universe is a simulation sounds more like the plot of The Matrix, but it is also a legitimate scientific hypothesis. Moderator Neil deGrasse Tyson, director of the museums Hayden Planetarium',
        category: 'Theories about life',
        solved: 'Unsolved'
      },
      {
        title: 'Why Evil Morty might be the Original Morty?',
        content: 'The piece de evidence comes from the episode when Evil Rick was zooming through all of Original Rick’s memories, one of which was actually Morty when he was a baby. There’s another quick reference of Rick with a Baby Morty in the season-two episode “Get Schwifty,” where Morty sees a photo of Rick holding a Baby Morty on Bird Person’s wall. The reason why this is a big deal is that the show’s logline was that Rick has returned to his family after 20 years. Morty is only 14 years old, which means that the timeline doesn’t work unless..',
        category: 'Rick and Morty',
        solved: 'Solved'
      }
    ]});
  }

  handleAddPost(post){
    let posts = this.state.posts;
    let allposts = [post].concat(posts);
    this.setState({posts:allposts});
  }


  render() {
    return (
      <div className="App">
        <AddPost addPost = {this.handleAddPost.bind(this)} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
