import React from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Modal from '../../components/modal';
import Banner from '../../components/banner';
import Download from '../../components/download';
import Community from '../../components/community';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="main-container">
			<Header openModal = {this.openModal.bind(this)}/>
			<Download/>
			<Footer/>
			<Modal onOk = {this.props.register.bind(this)} closeModal={this.closeModal.bind(this)} show={this.state.showModal}/>
		</div>
	)
}
export default view;
