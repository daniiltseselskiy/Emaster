import React, { Component } from 'react'
import './index.css'
import {
    Label
} from 'reactstrap'

class DownloadVersion extends Component {
    render () {
        return (
            <div className="download-version-container">
                <Label>Mac Version</Label>
                <img alt="Download Mac" />                
            </div>
        )
    }
}

export default DownloadVersion