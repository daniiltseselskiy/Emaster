import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePage from '../../screens/Homepage'

import { 
 
 } from '../../actions/homepage';

 const style = { 
    marginTop: '139px',
}
class HomeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <HomePage />
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);