var Posts = React.createClass ({
  deletePost(id){
    this.props.onDelete(id);
  },

  render() {
    let postsList;
    postsList = this.props.posts.map(post => {
      return(
        <EachPost onDelete={this.deletePost} key={post.title} post={post} />
      );
    });

    return (
      <div className="Posts">
        {postsList}
      </div>
    );
  }
});
