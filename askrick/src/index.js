import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import Layout from './Layout';
import Login from './Login';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
	<div>
		<Route path="/" component={Layout} />
		<section className="stretch">
		 <div className="questions">
			<Route exact path="/" component={App} />
			<Route path="/login" component={Login} />
			<Route path="/contact" component={Contact} />
		 </div>
		</section>
	</div>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
