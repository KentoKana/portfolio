import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import ScrollableAnchor from 'react-scrollable-anchor';
import Heading from './Heading';



class Contact extends Component {
    render() {
        
        return (
            <ScrollableAnchor id={'contact'}>
                <div className="section contactSection primary-text center">
                    <Container>
                        <Heading heading="Contact Me" />
                        <Row>

                        </Row>
                    </Container>
                </div>
            </ScrollableAnchor>


        );
    }
}

export default Contact;