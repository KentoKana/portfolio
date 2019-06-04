import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class SlideShow extends Component {
  render() {
    let key = 0;
    return (
      <div className="text-center">
        <Carousel>
          {this.props.slideShowImg.imgSrcPath.map(i =>
            <Carousel.Item
              key={key++}
            >
              <img
                src={i}
                className="d-block w-100"
                alt={this.props.altTag}
                key={key++}
                style={{
                  width: "200px !important"
                }}
              />
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    );
  }
}

export default SlideShow;