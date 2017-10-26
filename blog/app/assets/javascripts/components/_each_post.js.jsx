var EachPost = React.createClass ({
	deletePost(id){
		this.props.onDelete(id);
	},

  render() {
    return (
      <li className="EachPost">
        {this.props.post.title} <br />
        {this.props.post.body} <a href = "#" onClick={this.deletePost.bind(this, this.props.post.id)}>X</a>
      </li>
    );
  }
});
