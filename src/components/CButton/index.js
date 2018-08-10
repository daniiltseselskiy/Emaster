import React, { Component } from 'react'
import './index.css'
import {
    Label,
} from 'reactstrap'

class CButton extends Component {
    onClick = () => {

    }
    render () {
        const { Title } = this.props
        return (
            <div className="cbutton-container" onClick={this.onClick}>
                <Label>{Title}</Label>
            </div>
        )
    }
}

export default CButton