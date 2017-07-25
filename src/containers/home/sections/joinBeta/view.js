import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
var className = "";
var view = function(){
    let {translate,elementIsInView} = this.props;

    if(elementIsInView){
        className = "visibleDiv animated fadeIn"
    }
	return (
		<div className="joinBeta background brand-white">
      <div className="responsive">
  			<p className="title titillium-regular letter-spacing">{translate("joinBeta.titlePart1")}<span className="brand-yellow">{translate("joinBeta.titlePart2")}</span>{translate("joinBeta.titlePart3")}</p>
  			<button className="brand-button button" onClick={()=>{this.props.openModal?this.props.openModal():null}}>
  				<span className="brand-button-text">{translate("joinBeta.signupBtn")}</span>
  			</button>
      </div>
		</div>
	)
}
export default view;
