import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.selectedLink = 'nav__link current';
        this.unselectedLink = 'nav__link';
        this.currentHeaderUrl = window.location.hash;
        this.state = {
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
        this.setState({ navItems: item });
    }

    componentDidMount = () => {
        window.onhashchange = this.selectionChanged;
    }

    render() {
        return (
            <Container>
                <nav className={this.state.navBarClassName}>
                    <i className="fas fa-bars" id="hamburger-menu" onClick={this.handleMobileNavClick}></i>
                    <ul>
                        {this.state.navItems.map((navItem, index) =>
                            <li
                                key={index}
                                id={index}
                            // onClick={ ()=> { this.handleCurrentLink(navItem) }}
                            >
                                <a onClick={this.handleMobileNavClick} className={navItem.className} href={navItem.goTo}> {navItem.name} </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        )
    }
}

export default Navigation;