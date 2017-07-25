import React, { Component } from 'react';
import ComponentView  from './view';
import { localize } from 'react-localize-redux';
 class Main extends Component {
  static get defaultProps() {
    return {
      title: 'Sample-Component'
    };
  }

  render() {
    return (ComponentView.bind(this))();
  }
}
export default localize(Main,'locale')