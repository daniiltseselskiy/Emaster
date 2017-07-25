import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import girl from './assets/girl.png';
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
  					<Col sm={12} md={6} >
  						{/*<ScrollAnimation animateIn="fadeIn" offset={20} delay={500}><img src={girl} alt="Conquiste" className="grid-image"/></ScrollAnimation>*/}
						<img src={girl} alt="Conquiste" className="grid-image"/>
  					</Col>
  					<Col sm={12} md={6} className="grid-content">
  						<p className="extra-large-text titillium-regular letter-spacing text-left"><span className="brand-yellow">{translate("gridSection.title").props.children.charAt(0)}</span>{translate("gridSection.title").props.children.substr(1)}</p>
  						<p className="grid-text medium-text titillium-regular text-left">{translate("gridSection.description")}</p>
  					</Col>
  				</Row>
  			</Grid>
      </div>
		</div>
	)
}
export default view;
