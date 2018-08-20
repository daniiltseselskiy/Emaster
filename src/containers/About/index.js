import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from '../../screens/About'
import { 
 
 } from '../../actions/about';
import { isMoment } from 'moment';

const style = { 
    marginTop: '139px',
}
class AboutContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div style={style}>
                <About {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        labels: state.main.labels,
        content: state.main.content,
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