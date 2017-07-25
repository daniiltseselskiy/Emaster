import React from 'react';
import './styles.css';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="banner background content-center">
      <div className="responsive content-center">
  			<div className="content">
  				<p className="content-text extra-large-text brand-white titillium-thin">{this.props.bannerTopText}</p>
  				<p className="content-text extra-super-large-text brand-yellow titillium-bold">{this.props.bannerMiddleText}</p>
  				<p className="small-text brand-white description titillium-thin">{this.props.bannerBottomText}</p>
  			</div>
      </div>
		</div>
	)
}
export default view;
