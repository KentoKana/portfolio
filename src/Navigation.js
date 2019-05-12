import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Asteroid from "./Asteroid";


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.selectedLink = 'nav__link current';
        this.unselectedLink = 'nav__link';
        this.currentHeaderUrl = window.location.hash;
        this.state = {
            projectiles: 'clouds.svg',
            rocketWobble: false,
            navVisible: false,
            navBarClassName: 'navigation',
            navLinkClicked: false,
            navItems: [
                {
                    id: 'nav__home',
                    name: 'Home',
                    goTo: '#home',
                    className: this.selectedLink,
                },
                {
                    id: 'nav__projects',
                    name: 'Projects',
                    goTo: '#projects',
                    className: this.unselectedLink,
                },
                {
                    id: 'nav__coreSkills',
                    name: 'Core Skills',
                    goTo: '#skills',
                    className: this.unselectedLink,
                },
                {
                    id: 'nav__contact',
                    name: 'Contact',
                    goTo: '#contact',
                    className: this.unselectedLink,
                },
            ],

        }
    }

    handleMobileNavClick = () => {
        this.handleRocketWobble();
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

    selectionChanged = () => {
        let item;
        for (let i = 0; i < this.state.navItems.length; i++) {
            item = this.state.navItems;
            if (item[i].goTo === window.location.hash) {
                item[i].className = this.selectedLink;
            } else {
                item[i].className = this.unselectedLink;
            }
        }
        // this.handleRocketWobble();
        this.setState({ navItems: item });
        if(window.location.hash === "#home") {
            this.setState({projectiles: 'clouds.svg'})
        }  else if (window.location.hash === "#projects") {
            this.setState({projectiles: "satellite.svg"})
        } else if (window.location.hash === "#skills"){
            this.setState({projectiles: "asteroid.svg"})
        } else if (window.location.hash === "#contact") {
            this.setState({projectiles: "ufo.svg"})
        }
        
    }

    handleRocketWobble = () => {
        this.setState({ rocketWobble: !this.state.rocketWobble });
    }

    componentDidMount = () => {
        window.onhashchange = this.selectionChanged;
    }

    render() {
        return (
            <Container>
                <img
                    src="/images/rocket.svg"
                    alt="Rocket" id="rocket"
                    className={this.state.rocketWobble ? 'rocket-wobble' : ''}
                    onAnimationEnd={() => this.setState({ rocketWobble: false })}
                />
                <nav className={this.state.navBarClassName}>
                    <i className="fas fa-bars" id="hamburger-menu" onClick={this.handleMobileNavClick}></i>
                    <ul>
                        {this.state.navItems.map((navItem, index) =>
                            <li
                                key={index}
                                id={index}
                            >
                                <a onClick={this.handleMobileNavClick} className={navItem.className} href={navItem.goTo}> {navItem.name} </a>
                            </li>
                        )}
                    </ul>
                </nav>
                <Asteroid 
                    imgSrc={this.state.projectiles}
                />
            </Container>
        )
    }
}

export default Navigation;