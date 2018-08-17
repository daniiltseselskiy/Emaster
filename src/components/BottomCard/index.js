import React, { Component } from 'react'
import './index.css'
import '../../screens/index.css'
import {
    Label
} from 'reactstrap'
const style = {
    backgroundColor: '#171717',
}
class BottomCard extends Component {
    render () {
        const { index, link, investor } = this.props
        return (
            <div className="bottom-card-container" style={style}>
               <h3 className="text-mid-title">{index}</h3>
               <h3 className="text-mid-paragraph">{link}</h3>
               <div className="line" />
            </div>
        )
    }
}

export default BottomCard