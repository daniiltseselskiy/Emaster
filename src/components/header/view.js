import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './styles.css';
import logo from './assets/logo.png';
import fb from './assets/facebook_small.png';
import tw from './assets/insta_small.png';
import insta from './assets/tw_small.png';
import youtube from './assets/youtube_small.png';
import { Route, Link } from 'react-router-dom';

var view = function(){
	let {translate} = this.props;
	return (
		<div className="responsive">
			<Navbar className="header" collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a className="logo" href="/"><img src={logo} alt="logo"/></a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight className="navRight">
                    <NavItem href="#"><button onClick={()=>{this.props.openModal?this.props.openModal():null}} className="brand-button button"><span className="brand-button-text">{translate("header.signupBtn")}</span></button></NavItem>
                    <NavItem target="_blank" href="/download"><button onClick={()=>{document.location='/download'}} className="brand-button button"><span className="brand-button-text">{translate("header.download")}</span></button></NavItem>
					<NavItem target="_blank" href="https://www.facebook.com/emastersapp/"><img src={fb} alt="" className="social fb"/></NavItem>
					<NavItem target="_blank" href="https://www.instagram.com/emastersapp/"><img src={tw} alt="" className="social"/></NavItem>
					<NavItem target="_blank" href="https://twitter.com/emastersapp"><img src={insta} alt="" className="social"/></NavItem>
					<NavItem target="_blank" href="https://www.youtube.com/channel/UCrQsnAmn33j6MWQiRVtpyzA"><img src={youtube} alt="" className="social youtube"/></NavItem>
				</Nav>
			</Navbar>
		</div>
	)
}
export default view;
