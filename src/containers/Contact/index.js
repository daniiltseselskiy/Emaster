import React, { Component } from 'react'
import { connect } from 'react-redux'
import Contact from '../../screens/Contact'
import { 
 
 } from '../../actions/contact';

const style = { 
    marginTop: '139px',
}
class ContactContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <Contact />
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
)(ContactContainer);