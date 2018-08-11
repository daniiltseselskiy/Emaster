import React, { Component } from 'react';
import './index.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class CAccordion extends Component {
    render () {
        return (
            <Accordion>
                <CAccordionItem/>
            </Accordion>
        )
    }
}

class CAccordionItem extends Component {
    constructor () {
        super ()
        this.state = {
            isOpen: false
        }
    }
    onClick = () => {
        const isOpen = this.state.isOpen
        this.setState({
            isOpen: !isOpen
        })
    }
    render () {
        return (
            <div className="accordion-item" onClick={this.onClick}>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Simple title</h3>
                        {this.state.isOpen? <h6>-</h6> : <h6>+</h6>}
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
            </div>
        )
    }
}
export default CAccordion