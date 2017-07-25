import React, { Component } from 'react';
import ComponentView  from './view';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Main extends Component {
  static get defaultProps() {
    return {
      title: 'App'
    };
  }
  componentDidMount(){

  }
  render() {
    return (ComponentView.bind(this))();
  }
}

function bindAction(dispatch) {
    return {

    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {

    }
}

export default withRouter(connect(null, null)(Main));
