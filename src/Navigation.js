import React from 'react';
import Container from 'react-bootstrap/Container'
import ScrollableAnchor from 'react-scrollable-anchor';

const Navigation = (props) => {

    const navItems =
        [
            {
                id: 'nav__home',
                name: 'Home',
                goTo: 'home',
            },
            {
                id: 'nav__projects',
                name: 'Projects',
                goTo: 'projects',
            },
            {
                id: 'nav__coreSkills',
                name: 'Core Skills',
                goTo: 'skills',
            },
            {
                id: 'nav__contact',
                name: 'Contact',
                goTo: 'contact'
            },
        ]
    return (
        <Container>
            <nav className='navigation'>
                <ul>
                    {navItems.map((n, index) =>
                        <li
                            key={index}
                            id={index}
                        >
                            <a className="nav__link" href={'#' + n.goTo}> {n.name} </a>
                        </li>
                    )}
                    {/* <li>Home</li>
                    <li>Projects</li>
                    <li>Core Skills</li>
                    <li>Contact</li> */}
                </ul>
            </nav>
        </Container>
    )
}

export default Navigation;