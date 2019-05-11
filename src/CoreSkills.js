import React, { Component } from 'react';
import SkillCard from './SkillCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import ScrollableAnchor from 'react-scrollable-anchor';



class CoreSkills extends Component {

  render() {
    let i = 0;
    const skills =
      [
        {
          skillName: "Front-End",
          skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "SASS",
            "jQuery",
            "Bootstrap"
          ],
          id: 1
        },
        {
          skillName: "Back-End",
          skills: [
            "PHP",
            "ASP.NET",
            "NodeJS"
          ],
          id: 2
        },
        {
          skillName: "Database",
          skills: [
            "MySQL",
            "MSSQL",
            "MongoDB",
            "Oracle",
          ],
          id: 3
        },
        {
          skillName: "I've worked with...",
          skills: [
            "React",
            "BEM",
            "Socket.io",
            "Jasmine",
            "MVC",
            "GIT",
            "NPM",
            "Express",
            "jQuery",
            "AJAX",
            "XML",
            "REST APIs"
          ],
          id: 4
        }
      ]
    return (
      <ScrollableAnchor id={'skills'}>

        <div className="text-left m-auto section skillsSection center primary-text">
          <Container>
            <h2 className="text-center">Core Skills</h2>
            <Row>
              {
                skills.map(s =>
                  <SkillCard
                    skillName={s.skillName}
                    key={s.id.toString()}
                    displaySkills={s.skills.map(ss => <li className="list-unstyled text-center p-0" key={i++}>{ss}</li>)}
                  />
                )
              }
            </Row>
          </Container>
        </div>
      </ScrollableAnchor>

    );
  }
}

export default CoreSkills;