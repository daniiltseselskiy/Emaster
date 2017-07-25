import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import dota1 from './assets/dotta1.png';
import dota2 from './assets/dotta2.png';
var className = "";
var view = function(){
    let {translate,elementIsInView} = this.props;

    if(elementIsInView){
        className = "visibleDiv animated fadeIn"
    }
    return (
		<div className="favorites background">
      <div className="responsive">
  			<p className="title extra-large-text titillium-regular letter-spacing brand-white"><span className="brand-yellow">{translate("favorites.title").props.children.charAt(0)}</span>{translate("favorites.title").props.children.substr(1)}</p>
  			<Grid className={"content hiddenDiv "+ className}>
  				<Row className="row-one">
  					<Col sm={12} md={6} className="column">
  						<img src={dota1} alt="dota1" className="grid-image"/>
  						<p className="grid-title titillium-regular brand-yellow">{translate("favorites.game1Title")}</p>
  						<p className="grid-text titillium-thin brand-white">{translate("favorites.game1Description")}</p>
  					</Col>
  					<Col sm={12} md={6} className="column">
  						<img src={dota2} alt="dota1" className="grid-image"/>
  						<p className="grid-title titillium-regular brand-yellow">{translate("favorites.game2Title")}</p>
  						<p className="grid-text titillium-thin brand-white">{translate("favorites.game2Description")}</p>
  					</Col>
  				</Row>
  			</Grid>
  			<div className="highlight">
  				<p className="highlight-title titillium-regular brand-yellow large-text">{translate("favorites.footerTitle")}</p>
  				<p className="highlight-text titillium-light brand-white">{translate("favorites.footerDescription")}</p>
  			</div>
      </div>
		</div>
    )
}
export default view;
