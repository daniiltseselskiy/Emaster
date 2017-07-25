import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import user1 from './assets/user1.png';
import user2 from './assets/user2.png';
import user3 from './assets/user3.png';
var className = "";
var view = function(){
    let {translate,elementIsInView} = this.props;

    if(elementIsInView){
        className = "visibleDiv animated fadeIn"
    }
	return (
		<div  className={"testimonials background hiddenDiv "+ className}>
      <div className="responsive">
  			<p className="title extra-large-text titillium-regular letter-spacing"><span className="brand-white">{translate("testimonial.title").props.children.charAt(0)}</span>{translate("testimonial.title").props.children.substr(1)}</p>
  			<p className="subtitle titillium-regular medium-text">{translate("testimonial.description")}</p>
  			<Grid className="content">
  				<Row>
  					<Col sm={12} md={4} className="column">
  						<div className="testimonial"><p>{translate("testimonial.item1Description")}</p></div>
  						<img src={user1} alt="User" className="user-image"/>
  						<p className="user-name titillium-regular">{translate("testimonial.item1Fullname")}</p>
  						<p className="user-handle titillium-regular">{translate("testimonial.item1Username")}</p>
  					</Col>
  					<Col sm={12} md={4} className="column">
  						<div className="testimonial"><p>{translate("testimonial.item2Description")}</p></div>
  						<img src={user2} alt="User" className="user-image"/>
  						<p className="user-name titillium-bold">{translate("testimonial.item2Fullname")}</p>
  						<p className="user-handle titillium-regular">{translate("testimonial.item2Username")}</p>
  					</Col>
  					<Col sm={12} md={4} className="column">
  						<div className="testimonial"><p>{translate("testimonial.item3Description")}</p></div>
  						<img src={user3} alt="User" className="user-image"/>
  						<p className="user-name titillium-bold">{translate("testimonial.item3Fullname")}</p>
  						<p className="user-handle titillium-regular">{translate("testimonial.item3Username")}</p>
  					</Col>
  				</Row>
  			</Grid>
  			<button className="brand-button white button" onClick={()=>{this.props.openModal?this.props.openModal():null}}>
  				<span className="brand-button-text">{translate("testimonial.signupBtn")}</span>
  			</button>
      </div>
		</div>
	)
}
export default view;
