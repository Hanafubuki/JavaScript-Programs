var App = React.createClass({
  getInitialState() { 
    return { 
      posts: [] 
    } 
  },

  componentWillMount(){
      $.getJSON('/api/posts.json', (response) => { this.setState({ posts: response }) });
  },

  handleAddPost(postNew){
    $.ajax({ 
      url: '/api/posts', 
      type: 'POST', 
      data: { post: { title: postNew.title, body: postNew.body } }, 
      //success: (response) => { 
      //  console.log('it worked!', response); 
      //} 
    });
    //Adicionar na hora na tela (sem o cod abaixo teria que atualizar a pagina para ver o novo post)
    let posts = this.state.posts;
    posts.push(postNew);
    this.setState({posts:posts});
  },

  handleDeletePost(id){
    $.ajax({ 
      url: `/api/posts/${id}`, 
      type: 'DELETE', 
      //success(response) { 
      //  console.log('successfully removed item') 
      //} 
    });
    let posts = this.state.posts;
    let index = posts.findIndex(x => x.id === id);
    posts.splice(index, 1);
    this.setState({posts: posts});
  },

  render() {
    return (
      <div className="App">
        <AddPost addPost = {this.handleAddPost} />
        <Posts posts={this.state.posts} onDelete={this.handleDeletePost} />
      </div>
    );
  }
});
