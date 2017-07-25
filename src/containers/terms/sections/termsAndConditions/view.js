import React from 'react';
import './styles.css';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="terms text-left">
      <div className="responsive">
  			<div className="sections">
  				<p className="section-heading brand-yellow titillium-regular large-text">{translate("termsPage.payment.title")}</p>
  				<p className="section-text letter-spacing-2">{translate("termsPage.payment.description")}</p>
  				<div className="sub-section">
  					<p className="sub-section-heading brand-yellow titillium-regular small-text">{translate("termsPage.methods.title")}</p>
  					<div className="sub-section-text-box">
  						<p className="section-text letter-spacing-2">{translate("termsPage.methods.description.part1")}</p>
  						<ul>
  							<li>{translate("termsPage.methods.description.part2")}</li>
  							<li>{translate("termsPage.methods.description.part3")}</li>
  							<li>{translate("termsPage.methods.description.part4")}</li>
  							<li>{translate("termsPage.methods.description.part5")}</li>
  						</ul>
  						<p className="section-text letter-spacing-2">{translate("termsPage.methods.description.part6")}</p>
  					</div>
  				</div>
  				<div className="sub-section">
  					<p className="sub-section-heading brand-yellow titillium-regular small-text">{translate("termsPage.refunds.title")}</p>
  					<div className="sub-section-text-box">
  						<p className="section-text letter-spacing-2">{translate("termsPage.refunds.description")}</p>
  					</div>
  				</div>
  				<div className="sub-section">
  					<p className="sub-section-heading brand-yellow titillium-regular small-text">{translate("termsPage.cancellation.title")}</p>
  					<div className="sub-section-text-box">
  						<p className="section-text letter-spacing-2">{translate("termsPage.cancellation.description.part1")}</p>
  						<ul>
  							<li>{translate("termsPage.cancellation.description.part2")}</li>
  							<li>{translate("termsPage.cancellation.description.part3")}</li>
  						</ul>
  					</div>
  				</div>
  			</div>
      </div>
		</div>
	)
}
export default view;
