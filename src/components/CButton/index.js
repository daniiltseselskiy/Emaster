import React, { Component } from 'react'
import './index.css'
import {
    Label,
} from 'reactstrap'
import { Link } from 'react-router-dom'
class CButton extends Component {
   
    render () {
        const { title, target, base } = this.props
        console.log("#########", target)
        return (
            <div className="cbutton-container">
                <Link to={`${base}/${target}`}>{title}</Link>
            </div>
        )
    }
}

export default CButton