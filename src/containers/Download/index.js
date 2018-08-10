import React, { Component } from 'react'
import { connect } from 'react-redux'
import Download from '../../screens/Download'
import { 
 
 } from '../../actions/download';

 
class DownloadContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
           
        }
    }

    render () {
        return (
            <div className="">
                <Download />
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
)(DownloadContainer);