import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import fb from './assets/facebook.png';
import tw from './assets/tw.png';
import insta from './assets/instagram.png';
import youtube from './assets/youtube.png';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="community background brand-white">
      <div className="responsive">
  			<p className="title titillium-regular letter-spacing"><span className="brand-yellow">{translate("teamPage.community.title").props.children.charAt(0)}</span>{translate("teamPage.community.title").props.children.substr(1)}</p>
  			<div className="text-box">
  				<p className="small-text titillium-thin letter-spacing-2">{translate("teamPage.community.description1")}</p>
  				<p className="small-text titillium-regular letter-spacing-2 bold">{translate("teamPage.community.description2")}</p>
  			</div>
  			<div className="social">
  				<Grid>
  					<Row>
  						<Col xs={1} sm={1} md={1}>
  							<a><img src={fb} alt="Facebook"/></a>
  						</Col>
  						<Col xs={1} sm={1} md={1}>
  							<a><img src={insta} alt="Instagram"/></a>
  						</Col>
  						<Col xs={1} sm={1} md={1}>
  							<a><img src={tw} alt="Twitter"/></a>
  						</Col>
  						<Col xs={1} sm={1} md={1}>
  							<a><img src={youtube} alt="Youtube"/></a>
  						</Col>
  					</Row>
  				</Grid>
  			</div>
      </div>
		</div>
	)
}
export default view;
