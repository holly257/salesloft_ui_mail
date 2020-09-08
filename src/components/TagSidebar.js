import React from 'react';
import '../styles/TagSidebar.css';

class TagSidebar extends React.Component {
    static defaultProps = {
        updateMail: () => {},
    };

    setFilter = e => {
        this.props.updateMail(e);
    };

    render() {
        return (
            <section id={`${this.props.dropdown ? 'sidebar-hide' : 'sidebar-show'}`}>
                <p className="tag-items" value="null" onClick={e => this.setFilter(null)}>
                    all mail
                </p>
                {this.props.tags.map((tag, index) => {
                    return (
                        <p
                            className="tag-items"
                            key={index}
                            value={tag}
                            onClick={e => this.setFilter(tag)}
                        >
                            {tag}
                        </p>
                    );
                })}
            </section>
        );
    }
}

export default TagSidebar;
