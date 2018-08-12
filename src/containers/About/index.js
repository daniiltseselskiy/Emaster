import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../../screens/About'
import { 
 
 } from '../../actions/about';
import { isMoment } from 'moment';

 
class AboutContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="">
                <About />
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
)(AboutContainer);