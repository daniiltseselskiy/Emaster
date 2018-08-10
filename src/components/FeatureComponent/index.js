import React, { Component } from 'react'
import './index.css'
import {
    Label
} from 'reactstrap'

class FeatureComponent extends Component {
    render () {
        const { Image, Title, Content} = this.props
        return (
            <div className="feature-component">
                <img src={Image} alt="Image"/>
                <Label>{Title}</Label>
                <Label>{Content}</Label>
            </div>
        )
    }
}

export default FeatureComponent