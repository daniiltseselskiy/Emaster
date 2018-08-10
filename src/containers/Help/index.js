import React, { Component } from 'react'
import { connect } from 'react-redux'
import Help from '../../screens/Help'
import { 
 
 } from '../../actions/help';

 
class HelpContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="">
                <Help />
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
)(HelpContainer);