import React from 'react';
import './styles.css';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="banner background content-center">
      <div className="responsive content-center">
  			<div className="content">
  				<h1 className="content-text extra-large-text brand-yellow titillium-bold">{this.props.bannerTopText}</h1>
  				{/*<p className="content-text large-text brand-yellow titillium-bold">{this.props.bannerMiddleText}</p>*/}
  				<p className="small-text brand-white description titillium-thin">{this.props.bannerBottomText}</p>
  			</div>
      </div>
		</div>
	)
}
export default view;
