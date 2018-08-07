import React, { Component } from 'react';
import Header from '../../components/Header';

class HeaderContainer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className="" style={{width: '100%'}}>
                <Header />
            </div>
        )
    }
}

export default HeaderContainer;