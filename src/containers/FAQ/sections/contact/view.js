import React from 'react';
import './styles.css';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="contact">
      <div className="responsive">
  			<p className="title titillium-regular letter-spacing"><span className="brand-yellow">{translate("faqPage.contact.title").props.children.charAt(0)}</span>{translate("faqPage.contact.title").props.children.substr(1)}</p>
  			<div className="text-box">
  				<p className="small-text titillium-thin letter-spacing-2">{translate("faqPage.contact.description1")}</p>
  				<p className="small-text titillium-regular letter-spacing-2 bold">{translate("faqPage.contact.description2")}</p>
  			</div>
  			<button className="brand-button button">
  				<span className="brand-button-text">support@emasters.co</span>
  			</button>
      </div>
		</div>
	)
}
export default view;
