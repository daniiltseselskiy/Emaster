import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import policy from './assets/policy.png';

var view = function(){
    let {translate} = this.props;

	return (
		<div className="policy background">
      <div className="responsive">
  			<p className="title extra-large-text titillium-regular letter-spacing"><span className="brand-white">{translate("teamPage.privacy.title").props.children.charAt(0)}</span>{translate("teamPage.privacy.title").props.children.substr(1)}</p>
  			<Grid className="content">
  				<Row className="row-one">
  					<Col sm={12} md={2} className="column col-lg-offset-2">
  						<img src={policy} alt="Policy" className="grid-image"/>
  					</Col>
  					<Col sm={12} md={2} className="column">
  						<img src={policy} alt="Policy" className="grid-image"/>
  					</Col>
  					<Col sm={12} md={2} className="column">
  						<img src={policy} alt="Policy" className="grid-image"/>
  					</Col>
  					<Col sm={12} md={2} className="column">
  						<img src={policy} alt="Policy" className="grid-image"/>
  					</Col>
  				</Row>
  			</Grid>
  			<div>
  				<p className="policy-details titillium-regular">{translate("teamPage.privacy.description")}</p>
  			</div>
      </div>
		</div>
	)
}
export default view;
