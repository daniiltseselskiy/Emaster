import React from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import Modal from '../../components/modal';
import GridSection from './sections/gridSection';
import GridSectionRight from './sections/gridSectionRight';
import Features from './sections/features';
import Favorites from './sections/favorites';
import Testimonials from './sections/testimonials';
import JoinBeta from './sections/joinBeta';
var view = function(){
    let {translate} = this.props;
	return (
		<div className="main-container">
			<Header openModal = {this.openModal.bind(this)}/>
			<Banner bannerTopText={translate("banner.topText")} bannerMiddleText={translate("banner.middleText")} bannerBottomText={translate("banner.bottomText")}/>
			<GridSection/>
			<Features/>
			<Favorites/>
			<GridSectionRight/>
			<Testimonials openModal = {this.openModal.bind(this)}/>
			<JoinBeta openModal = {this.openModal.bind(this)}/>
			<Footer/>
			<Modal onOk = {this.register.bind(this)} closeModal={this.closeModal.bind(this)} show={this.state.showModal}/>
		</div>
	)
}
export default view;
