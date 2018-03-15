import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import './styles.css';
import logo from './assets/logo.png';
import button from './assets/button.png';
import fb from './assets/facebook_small.png';
import tw from './assets/insta_small.png';
import insta from './assets/tw_small.png';
import youtube from './assets/youtube_small.png';
import { Route, Link } from 'react-router-dom';
var view = function(){
	let {translate} = this.props;
	return (
		<div className="responsive">
			<Navbar className="header">
				<Navbar.Header>
					<Navbar.Brand>
						<a className="logo" href="/"><img src={logo} alt="logo"/></a>
					</Navbar.Brand>
					<a className="headerButton" href="/download">{translate("header.download")}</a>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>

                        {/*<NavItem eventKey={1} active = {this.isActive("/team")} href="/team" className="text">{translate("header.team")}</NavItem>*/}
                        {/*<NavItem eventKey={2} active = {this.isActive("/faq")} href="/faq" className="text">{translate("header.faq")}</NavItem>*/}
						<NavItem eventKey={3} href="#"><button onClick={()=>{this.props.openModal?this.props.openModal():null}} className="brand-button button"><span className="brand-button-text">{translate("header.signupBtn")}</span></button></NavItem>

						<NavItem  target="_blank" href="https://www.facebook.com/emastersapp/"><img src={fb} alt="" className="social fb"/></NavItem>
						<NavItem target="_blank"  href="https://www.instagram.com/emastersapp/"><img src={tw} alt="" className="social"/></NavItem>
						<NavItem  target="_blank" href="https://twitter.com/emastersapp"><img src={insta} alt="" className="social"/></NavItem>
						<NavItem  target="_blank" href="https://www.youtube.com/channel/UCrQsnAmn33j6MWQiRVtpyzA"><img src={youtube} alt="" className="social youtube"/></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}
export default view;
