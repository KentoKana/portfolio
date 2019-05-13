import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import SlideShow from './SlideShow';
import Modal from 'react-bootstrap/Modal';



const fontStyle = {
  fontSize: '1.5em'
}

class ProjectCard extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false,
    };
  }


  render() {
    let lgClose = () => this.setState({ lgShow: false });
    let key = 0;

    return (
      <Col lg={4} className="p-0">
        <div className="p-4 projectCard" onClick={() => this.setState({ lgShow: true })}>
          <h4>{this.props.projectName}</h4>
          <Row>
            <div>
              <img
                src={this.props.modalBodyContent.imgSrcPath[0]}
                alt="project snapshot"
                onClick={() => this.setState({ lgShow: true })}
                style={{
                  cursor: 'pointer',
                  width: '100%',
                }}
              />
            </div>
          </Row>
          <Row
            className="justify-content-center"
          >
            <ul className="pt-3 text-left d-flex row" title="Main Tools Used">
              {this.props.toolsUsed}
            </ul>
            <span className="sr-only"></span>
          </Row>
          {/* <Button onClick={() => this.setState({ lgShow: true })}>
            See Details
          </Button> */}
        </div>
        <ButtonToolbar className="d-flex justify-content-center">




          {/* MODAL BEGINS HERE */}
          <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={lgClose}
            className="text-center"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.projectName}
              </Modal.Title>
            </Modal.Header>

            {/* Modal body here */}
            <Modal.Body className="projectModal">
              {/* SlideShow for projects */}
              <div>
                <SlideShow
                  key={key++}
                  slideShowImg={this.props.modalBodyContent} />
              </div>
              <div className="text-left p-4">
                <div className="m-4">
                  <h5>
                    <a
                      href={this.props.github}
                      aria-label="Visit GitHub Repository"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modalLink"
                    >Visit GitHub Repo
    
                      {/* <i className="fab fa-github" aria-hidden="false" title="Visit GitHub Repository"></i> */}
                    </a>
                  </h5>
                </div>
                <div className="m-4">
                  <h5>
                    <a
                      href={this.props.liveSite}
                      aria-label="Visit Live Site" target="_blank"
                      rel="noopener noreferrer"
                      className="modalLink"
                    >
                      Visit Live Site
                    </a>
                  </h5>
                </div>
                <div className="m-4 project-modal__desc">
                  <h4>Project Description</h4>
                  <p>
                    {this.props.modalBodyContent.desc}
                  </p>
                </div>
                <div className="m-4 project-modal__desc">
                  <h4>Notable Features</h4>
                  <p>
                    {this.props.modalBodyContent.notableFeature}
                  </p>
                </div>
                <div className="m-4 project-modal__desc">
                  <h4>Future Considerations</h4>
                  <p>
                    {this.props.modalBodyContent.futureFixes}
                  </p>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer style={fontStyle} className="d-flex justify-content-center">
              <div>
                <a
                  href={this.props.github}
                  aria-label="Visit GitHub Repository"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="false" title="Visit GitHub Repository"></i>
                </a>
                <a
                  href={this.props.liveSite}
                  aria-label="Visit Live Site" target="_blank"
                  rel="noopener noreferrer">
                  <i className="fas fa-globe-europe" aria-hidden="true" title="Visit Live Site"></i>
                </a>
              </div>
            </Modal.Footer>

          </Modal>
        </ButtonToolbar>
      </Col>
    )
  }
}

export default ProjectCard;
