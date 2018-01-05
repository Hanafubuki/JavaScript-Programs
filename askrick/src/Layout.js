import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component{
	render(){
		return(
			<div>
				{this.props.children}
				<Link to="/">Home</Link>
				<Link to="login">Log In</Link>
				<Link to="contact">Contact</Link>
			</div>
		);
	}
}
export default Layout;