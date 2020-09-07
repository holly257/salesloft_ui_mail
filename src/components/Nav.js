import React from 'react';
import '../styles/Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <nav id="nav-bar">
                <div className="inside-nav">
                   
                    <img id="logo" src="" alt="logo"></img>
                    

                    <span id="right-nav">
                        <p>search?</p>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Nav;
