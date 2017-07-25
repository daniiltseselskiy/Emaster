import React, { Component } from 'react';
import ComponentView  from './view';
import {connect} from 'react-redux';
import { localize } from 'react-localize-redux';
import Questions from './questions.json';
import user from './assets/user_black.png';
import chat from './assets/chat.png';
import page from './assets/page.png';
import sistema from './assets/sistema.png';
import user_active from './assets/user.png';
import chat_active from './assets/chat_yellow.png';
import page_active from './assets/page_yellow.png';
import sistema_active from './assets/sistema_yellow.png';
import {register} from '../../redux/actions'
const categories = [
    {
      name : "accounts",
      description : "faqPage.category.item1",
      image : user,
      activeImage : user_active
    },
    {
      name : "using",
      description : "faqPage.category.item2",
      image : sistema,
      activeImage : sistema_active
    },
    {
      name : "policies",
      description : "faqPage.category.item3",
      image : page,
      activeImage : page_active
    },
    {
      name : "reviews",
      description : "faqPage.category.item4",
      image : chat,
      activeImage : chat_active
    }
]
class Main extends Component {
  static get defaultProps() {
    return {
      title: 'Sample-Container'
    };
  }
  constructor(props){
    super(props);
    this.state={
      showModal: false,
      activeCategory : 0
    }
  }
  getQuestions(){
    if(!categories[this.state.activeCategory]){
      return []
    }
    return Questions[categories[this.state.activeCategory].name]|| [];
  }
  getCategories(){
    return categories;
  }
  setActiveCategory(category){
    this.setState({
        activeCategory : category
    })
  }
  closeModal(){
    this.setState({
      showModal : false
    })
  }
  openModal(){
    this.setState({
      showModal : true
    })
  }

  render() {
    return (ComponentView.bind(this))();
  }
}
function bindAction(dispatch) {
    return {
        register : (data)=>{return dispatch(register(data))}
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {

    }
}

export default connect(null,bindAction)(localize(Main,'locale'));
