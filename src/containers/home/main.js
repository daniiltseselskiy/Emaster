import React, { Component } from 'react';
import ComponentView  from './view';
import {connect} from 'react-redux';
import {register} from '../../redux/actions'
import { localize } from 'react-localize-redux';
class Main extends Component {
  static get defaultProps() {
    return {
      title: 'Sample-Container'
    };
  }
  constructor(props){
    super(props);
    this.state={
      showModal: false
    }
  }

  closeModal(){
    this.setState({
      showModal : false
    })
  }
  register(data){
    return this.props.register(data)
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

}

export default connect(null,bindAction)(localize(Main,"locale"));
