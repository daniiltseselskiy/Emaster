import React from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Modal from '../../components/modal';
import Banner from '../../components/banner';
import Community from '../../components/community';
import Members from './sections/members';
import Policy from './sections/policy';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="main-container">
			<Header openModal = {this.openModal.bind(this)}/>
			<Banner bannerTopText={translate("teamPage.titlePart1")} bannerMiddleText={translate("teamPage.titlePart2")}/>
			<Members/>
			{/*<Policy/>*/}
			<Community/>
			<Footer/>
			<Modal onOk = {this.props.register.bind(this)} closeModal={this.closeModal.bind(this)} show={this.state.showModal}/>
		</div>
	)
}
export default view;
