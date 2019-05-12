import React from 'react';
import Col from 'react-bootstrap/Col';

const SkillCard = (props) => {

  return (
    <Col lg={4} className="">
        <div className="skillCard">
          <h3 className="text-center">{props.skillName}</h3>
          <ul className="text-left">
            {props.displaySkills}
          </ul>
        </div>
    </Col>
  )
}

export default SkillCard;
