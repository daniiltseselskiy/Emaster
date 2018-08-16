import React, { Component } from 'react'
import './index.css'
import {
    Label
} from 'reactstrap'

class FeatureComponent extends Component {
    render () {
        const { image, label, content} = this.props
        return (
            <div className="feature-component">
                <div>
                    <img src={image} alt="Image"/>
                </div>
               <h3 className="text-mid-paragraph">{label}</h3>
                <p className="text-paragraph">{content}</p>
            </div>
        )
    }
}

export default FeatureComponent