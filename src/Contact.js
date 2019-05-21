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
                        <Heading heading="Let's talk!" />
                        <Row>
                            <a className="mailLink" href="mailto:kanazawakento91@gmail.com"><i className="far fa-envelope"  aria-hidden="false" title="kanazawakento91@gmail.com"></i> kanazawakento91@gmail.com</a>
                        </Row>
                    </Container>
                </div>
            </ScrollableAnchor>


        );
    }
}

export default Contact;