var AddPost = React.createClass ({
  getInitialState() { 
    return { 
      newPost: [] 
    } 
  },

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newPost:{
        title: this.refs.title.value,
        body: this.refs.body.value
      }}, function(){
        //console.log(this.state);
        this.props.addPost(this.state.newPost);
      });
    }
    e.preventDefault();
  },

  render() {
    return (
      <div>
        <h3>Add Post</h3>
        <form>
          <div>
            <label> Title </label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label> Content </label>
            <input type="text" ref="body" />
          </div>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
});
