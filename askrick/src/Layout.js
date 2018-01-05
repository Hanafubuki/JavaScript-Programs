import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component{
	render(){
		return(
			<div>
				<header className="large">
				  <div className="container">
				    <nav className="top" id="toggleNav">
				      <ul>
				        <li><Link to="/" className="topmenu">Home</Link></li>
						<li><Link to="login" className="topmenu">Log In</Link></li>
						<li><Link to="contact" className="topmenu">Contact</Link></li>
				      </ul>
				    </nav>
				    <a href="javascript:void(0);" className="icon" onclick="menuFunction()"><i className="fa fa-bars"></i></a>
				  </div>
				</header>
				 <section className="imgback">
			          <p>Ask <span>Anything</span></p>
		       	 </section>
				{this.props.children}
			</div>
		);
	}
}
export default Layout;