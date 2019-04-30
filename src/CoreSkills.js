import React, { Component } from 'react';
import SkillCard from './SkillCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';


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
      <div className="text-left m-auto">
        {/* <table>
          <tbody>
            {
              skills.map(s =>
                <tr key={s.id.toString()}>
                  <td><h3>{s.skillName}</h3></td>
                  <td>
                    <ul>
                      {s.skills.map(ss =>
                        <span key={i++}>{ss} </span>
                      )}
                    </ul>
                  </td>
                </tr>
              )
            }

          </tbody>
        </table> */}
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

    );
  }
}

export default CoreSkills;