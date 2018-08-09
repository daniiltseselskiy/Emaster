import React, { Component } from 'react';
import Header from '../../screens/Header';

class HeaderContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <Header />
            </div>
        )
    }
}

export default HeaderContainer;