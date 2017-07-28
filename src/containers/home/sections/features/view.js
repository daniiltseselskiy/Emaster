import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import invest from './assets/invest.png';
import reward from './assets/reward.png';
import security from './assets/security.png';
import game from './assets/game.png';
import evolucao from './assets/evolucao.png';
import ScrollAnimation from 'react-animate-on-scroll';

var className="";
var view = function(){
    let {translate,elementIsInView} = this.props;

    if(elementIsInView){
        className = "visibleDiv animated fadeIn"
    }
	return (
		<div className="features background">
      <div className="responsive">
  			<p className="title extra-large-text titillium-regular letter-spacing"><span className="brand-white">{translate("features.title").props.children.charAt(0)}</span>{translate("features.title").props.children.substr(1)}</p>
  			<Grid className={"content hiddenDiv "+ className}>
  				<Row className="row-one">
  					<Col sm={12} md={4} className="column">
  						<img src={invest} alt="Invest" className="grid-image"/>
  						<p className="grid-title titillium-bold">{translate("features.item1Title")}</p>
  						<p className="grid-text titillium-regular">{translate("features.item1Description")}</p>
  					</Col>
  					<Col sm={12} md={4} className="column">
  						<img src={evolucao} alt="Evolucao" className="grid-image"/>
  						<p className="grid-title titillium-bold">{translate("features.item2Title")}</p>
  						<p className="grid-text titillium-regular">{translate("features.item2Description")}</p>
  					</Col>
  					<Col sm={12} md={4} className="column">
  						<img src={reward} alt="Reward" className="grid-image"/>
  						<p className="grid-title titillium-bold">{translate("features.item3Title")}</p>
  						<p className="grid-text titillium-regular">{translate("features.item3Description")}</p>
  					</Col>
  				</Row>
  				<Row className="row">
  					<Col sm={12} md={4} className="column col-lg-offset-2 col-md-offset-2">
  						<img src={game} alt="Game" className="grid-image"/>
  						<p className="grid-title titillium-bold">{translate("features.item4Title")}</p>
  						<p className="grid-text titillium-regular">{translate("features.item4Description")}</p>
  					</Col>
  					<Col sm={12} md={4} className="column">
  						<img src={security} alt="Security" className="grid-image"/>
  						<p className="grid-title titillium-bold">{translate("features.item5Title")}</p>
  						<p className="grid-text titillium-regular">{translate("features.item5Description")}</p>
  					</Col>
  				</Row>
  			</Grid>
      </div>
		</div>
	)
}
export default view;
