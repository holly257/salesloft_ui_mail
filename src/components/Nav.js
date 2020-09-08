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
                            className="nav-icon"
                            onClick={() => this.props.updateDropdown()}
                        />
                    </span>

                    <span id="right-nav">INBOX</span>

                    <FontAwesomeIcon icon={faEnvelopeOpen} className="nav-icon" />
                </div>
            </nav>
        );
    }
}

export default Nav;
