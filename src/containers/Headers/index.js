import React, { Component } from 'react';
import Header from '../../screens/Header';
const style = { 
    position: 'fixed',
    width: '100%',
    zIndex: '100'
}
class HeaderContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div style={style}>
                <Header />
            </div>
        )
    }
}

export default HeaderContainer;