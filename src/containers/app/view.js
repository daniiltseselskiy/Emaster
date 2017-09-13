import React from 'react';
import './styles.css';
import { Route, Link } from 'react-router-dom';
import logo from '../../logo.svg';

import Home from '../home';
import Team from '../team';
import FAQ from '../FAQ';
import Terms from '../terms';
var view = function(){
	return (
		<div className="App animated fadeIn">
			<main>
				<Route exact path="/" component={Home} />
				<Route exact path="/team" component={Team} />
				<Route exact path="/faq" component={FAQ} />
				<Route exact path="/terms" component={Terms} />
			</main>
		</div>
	)
}
export default view;
