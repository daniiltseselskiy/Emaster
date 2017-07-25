import React from 'react';
import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Modal from '../../components/modal';
import Banner from '../../components/banner';
import Community from '../../components/community';
import Categories from './sections/categories';
import Contact from './sections/contact';
import Questions from './sections/questions';

var view = function(){
    let {translate} = this.props;
	return (
		<div className="main-container">
			<Header openModal = {this.openModal.bind(this)}/>
			<Banner bannerTopText={translate("faqPage.titlePart1")} bannerMiddleText={translate("faqPage.titlePart2")}/>
			<Categories activeCategory={this.state.activeCategory} onCategoryClick = {this.setActiveCategory.bind(this)} categories = {this.getCategories()}/>
			<Questions questions = {this.getQuestions()}/>
			<Community/>
			<Contact/>
			<Footer/>
			<Modal onOk = {this.props.register.bind(this)} closeModal={this.closeModal.bind(this)} show={this.state.showModal}/>
		</div>
	)
}
export default view;
