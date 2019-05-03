import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navVisible: false,
            navBarClassName: 'navigation',
            navLinkClicked: false,
        }
        this.navItems =
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
    }

    handleMobileNavClick = () => {
        this.setState((prevState) => {
            prevState.navVisible = !this.state.navVisible;
        });
        if (!this.state.navVisible) {
            this.setState({
                navBarClassName: 'navigation nav-visible',
            });
        } else {
            this.setState({
                navBarClassName: 'navigation',
            });
        }
    }

    render() {
        return (
            <Container>
                <nav className={this.state.navBarClassName}>
                    <i className="fas fa-bars" id="hamburger-menu" onClick={this.handleMobileNavClick}></i>
                    <ul>
                        {this.navItems.map((n, index) =>
                            <li
                                key={index}
                                id={index}
                            >
                                <a onClick={this.handleMobileNavClick} className="nav__link" href={`#${n.goTo}`}> {n.name} </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        )
    }
}

export default Navigation;