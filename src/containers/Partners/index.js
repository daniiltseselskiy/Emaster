import React, { Component } from 'react'
import { connect } from 'react-redux'
import Partners from '../../screens/Partners'
import { 
 
 } from '../../actions/partners';

 
class PartnersContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="">
                <Partners />
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
)(PartnersContainer);