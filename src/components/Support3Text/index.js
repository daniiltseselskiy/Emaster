import React, { Component } from 'react'
import './index.css'
import {
    Label
} from 'reactstrap'

class Support3Text extends Component {
    render () {
        return (
            <div className="support-3-container">
                <div className="support-textarea-s">
                    <Label>- More coming soon</Label>
                    <Label>Games We support</Label>
                </div>
                <div className="support-textarea-m">
                    <Label>Non arcu risus quis varius , Viverra aliquet eget sit amte telus. Adiposcing at in tellus inteer</Label>
                    <Label>Mauris site amet massa vitae tortor condimentu lacina</Label>
                </div>
                <div className="support-textarea-l">
                    <Label>Non arcu risus quis varius , Viverra aliquet eget sit amte telus. Adiposcing at in tellus inteer</Label>
                </div>
            </div>
        )
    }
}

export default Support3Text