import React from 'react';
import '../styles/TagSidebar.css';

class TagSidebar extends React.Component {
    render() {
        return (
            <section id={`${this.props.dropdown ? 'sidebar-hide' : 'sidebar-show'}`}>
                {this.props.tags.map((tag, index) => {
                    return <p key={index}>{tag}</p>
                })}
                
            </section>
        );
    }
}

export default TagSidebar;
