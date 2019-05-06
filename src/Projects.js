import React, { Component } from 'react';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import ScrollableAnchor from 'react-scrollable-anchor';


class Projects extends Component {
    render() {
        let i = 0;
        const projects = [
            {
                projectName: "Animated Profile",
                toolsUsed: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                ],
                projectDesc: {
                    desc: "Using CSS transitions and animations, I created a short profile about myself. To make the profile feel interactive, I've added short animations when the user hovers over various parts of the pages.",
                    notableFeature: "This project focuses on using CSS animation to provide a sense of interactivity. One of the ways it does that is by adding animations that gets triggered when they hover on something, letting the user know that they can interact with that particular item.",
                    futureFixes: "While the animations make the site feel interactive, it reduces accessibility due to the lack of use of arias. The future iteration of projects would need to incorporate ways to make the website more accessible.",
                    imgSrcPath: [
                        'images/projects/animated-profile/1.png',
                        'images/projects/animated-profile/2.png',
                        'images/projects/animated-profile/3.png',
                    ],
                },
                id: 1,

                github: "https://github.com/KentoKana/AnimatedProfile",
                liveSite: "http://animatedprofile.kentokanazawa.com/",
            },
            {
                projectName: "Humbie Helper",
                toolsUsed: [
                    "PHP",
                    "MySQL",
                    "JavaScript",
                ],

                projectDesc: {
                    desc: "In this academic project, my group and I created a student utility tool for students enrolled at Humber Web Development program. I was responsible for creating the Register Students, Deadlines, and Timer features.",
                    notableFeature: "The project centers around CRUD operations using MySQL and PHP. In the timer feature, I used jQuery AJAX to perform CRUD operations without refreshing the entire page.",
                    futureFixes: "The code uses a pseudo MVC structure using vanilla PHP. Using something like Laravel or other MVC framework may be a better option, as the structure of code in the current project state is not always consistent between various developers.",
                    imgSrcPath: [
                        'images/projects/humbie-helper/1.png',
                        'images/projects/humbie-helper/2.png',
                        'images/projects/humbie-helper/3.png',
                    ],
                },
                liveSite: "https://humbiehelper.skriptkaiju.com",
                id: 2,
            },
            {
                projectName: "Home Defender",
                toolsUsed: [
                    "PHP",
                    "CSS",
                    "MySQL"
                ],

                projectDesc: {
                    desc: "This tower defense game was created during the hackathon 'Global Game Jam 2018' by myself and 2 other developers. I was responsible for the initial splash page, navigation items, and the MySQL logic for saving players and their scores to the scoreboard.",
                    notableFeature: "The game includes helper items that assist the players to beat the game. Once the game is over, the player has an option to upload their score to the leaderboard, where they can compete against other players.",
                    futureFixes: "Due to time crunch of the hackathon (3 days), the code structure focuses on making it work, as opposed to organization and maintainability (for example, the entire game logic is saved under one JavaScript file). If given more time, it would be beneficial to split up the code based on components, so that maintaining the code, as well as adding future content would be easier.",
                    imgSrcPath: [
                        'images/projects/home-defender/1.png',
                        'images/projects/home-defender/2.png',
                        'images/projects/home-defender/3.png',
                    ],
                },
                id: 3,
                github: "https://github.com/KentoKana/Home-Defenders-Game",
                liveSite: "http://home-defender.kentokanazawa.com/"
            },
            {
                projectName: "Guess The Location",
                toolsUsed: [
                    "React",
                    "Axios",
                    "Google API",
                ],
                projectDesc: {
                    desc: "This is my take on the popular game, 'GeoGuessr', built in React.",
                    notableFeature: "This project uses Nominatim GeoCoder, Country.io, and Google APIs, and is consumed using React and Axios. The app randomly selects a street-view available latitude and longitude coordinate, and asks the player to guess the target location by searching for clues in the street-view.",
                    futureFixes: "Currently, the only way to skip the current target location is to refresh the page, and the application is not mobile friendly. There are several other user-experience considerations I'd like to fix, so that the game feels more intuitive.",
                    imgSrcPath: [
                        'images/projects/guess-the-location/1.png',
                        'images/projects/guess-the-location/2.png',
                        'images/projects/guess-the-location/3.png',
                    ],
                },
                id: 4,
                github: "https://github.com/KentoKana/guess-the-location-game",
                liveSite: "http://guess-the-location.kentokanazawa.com/"
            },

        ];

        return (
            <ScrollableAnchor id={'projects'}>
                <div className="section projectSection primary-text center">
                    <Container className="projectsContainer">
                        <Heading heading="Projects" />
                        <Row>
                            {
                                projects.map((p, index) =>
                                    <ProjectCard
                                        projectName={p.projectName}
                                        toolsUsed={p.toolsUsed.map(t => <li className="list-unstyled p-1" key={i++}>{t}</li>)}
                                        key={index}
                                        modalBodyContent={p.projectDesc}
                                        github={p.github}
                                        liveSite={p.liveSite}
                                        indexImg={p.projectDesc.imgSrcPath[0]}
                                        className={"m-3"}
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

export default Projects;