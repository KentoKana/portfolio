import React, { Component } from 'react';
import SkillCard from './SkillCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import ScrollableAnchor from 'react-scrollable-anchor';



class CoreSkills extends Component {

  render() {
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
            "Bootstrap",
            "React",
          ],
          id: 1
        },
        {
          skillName: "Back-End",
          skills: [
            "PHP",
            "ASP.NET",
            "NodeJS",
            "Socket.io",
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
          skillName: "Development Tools",
          skills: [
            "GIT",
            "NPM",
            "Jasmine",
            "Postman",
            "cPanel",
            "Heroku",
            "Cloud Hosting",
          ],
          id: 4
        }
      ]
    return (
      <ScrollableAnchor id={'skills'}>

        <div className="text-left m-auto section skillsSection primary-text">
          <Container>
            <h2 className="text-center">Core Skills</h2>
            <Row className="projectsRow">
              {
                skills.map((s, index) =>
                  <SkillCard
                    skillName={s.skillName}
                    key={index}
                    displaySkills={s.skills.map((ss, index2) => <li className="list-unstyled text-center p-0" key={index2}>{ss}</li>)}
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