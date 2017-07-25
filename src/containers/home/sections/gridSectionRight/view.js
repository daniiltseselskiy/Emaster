import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import sports from './assets/sports.png';
var className = "";
var view = function(){
    let {translate,elementIsInView} = this.props;

    if(elementIsInView){
        className = "visibleDiv animated fadeIn"
    }
	return (
		<div className="grid-section">
      <div className="responsive">
  			<Grid>
  				<Row className={"show-grid hiddenDiv "+ className}>
  					<Col sm={12} md={6} className="grid-content">
  						<p className="extra-large-text titillium-regular letter-spacing text-left"><span className="brand-yellow">{translate("gridRightSection.title").props.children.charAt(0)}</span>{translate("gridRightSection.title").props.children.substr(1)}</p>
  						<p className="grid-text medium-text titillium-regular text-left">{translate("gridRightSection.description1Part1")}<span className="brand-yellow">{translate("gridRightSection.description1Part2")}</span>{translate("gridRightSection.description1Part3")}</p>
  						<p className="grid-text medium-text titillium-regular text-left">{translate("gridRightSection.description2Part1")}<span className="brand-yellow">{translate("gridRightSection.description2Part2")}</span></p>
  					</Col>
  					<Col sm={12} md={6}>
  						<img src={sports} alt="Sports" className="grid-image"/>
  					</Col>
  				</Row>
  			</Grid>
      </div>
		</div>
	)
}
export default view;
