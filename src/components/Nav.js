import React from 'react';
import '../styles/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
    static defaultProps = {
        updateDropdown: () => {},
    };

    render() {
        return (
            <nav id="nav-bar">
                <div className="inside-nav">
                    <span id="right-nav">
                        <FontAwesomeIcon
                            icon={this.props.dropdown ? faBars : faWindowClose}
                            id="nav-bars"
                            onClick={() => this.props.updateDropdown()}
                        />
                    </span>

                    <span id="right-nav">search?</span>

                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                </div>
            </nav>
        );
    }
}

export default Nav;
