import React from 'react';
import Col from 'react-bootstrap/Col';

const SkillCard = (props) => { 

  return (
    <Col lg={3}>
      <h3 className="text-center">{props.skillName}</h3>
      <ul className="text-left">
        {props.displaySkills}
      </ul>
    </Col>
  )
}

export default SkillCard;
