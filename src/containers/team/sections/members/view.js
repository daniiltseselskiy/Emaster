import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './styles.css';
import member1 from './assets/Marcus.png';
import member2 from './assets/Walter.png';
import member3 from './assets/lia.png';
var view = function(){
    let {translate} = this.props;
	return (
		<div className="team">
      <div className="responsive">
  			<Grid>
  				<Row>
  					<Col sm={12} md={4} className="member">
  						<img src={member1} alt="Member" className="member-image"/>
  						<p className="member-name titillium-regular brand-yellow">Marcus Ataide</p>
  						<p className="member-position small-text titillium-regular brand-yellow">CEO {translate("teamPage.and")} {translate("teamPage.coFounder")}</p>
  						<p className="member-details titillium-regular">{translate("teamPage.coFounderDesc1")}</p>
  					</Col>
  					<Col sm={12} md={4} className="member">
  						<img src={member2} alt="Member" className="member-image"/>
  						<p className="member-name titillium-regular brand-yellow">Walter Fiuza</p>
  						<p className="member-position small-text titillium-regular brand-yellow">CMO {translate("teamPage.and")} {translate("teamPage.coFounder")}</p>
  						<p className="member-details titillium-regular">{translate("teamPage.coFounderDesc2")}</p>
  					</Col>
  					<Col sm={12} md={4} className="member">
  						<img src={member3} alt="Member" className="member-image"/>
  						<p className="member-name titillium-regular brand-yellow">Lia</p>
  						<p className="member-position small-text titillium-regular brand-yellow">{translate("teamPage.spokesPerson")}</p>
  						<p className="member-details titillium-regular">{translate("teamPage.spokesPersonDesc")}</p>
  					</Col>
  				</Row>
  			</Grid>
      </div>
		</div>
	)
}
export default view;
