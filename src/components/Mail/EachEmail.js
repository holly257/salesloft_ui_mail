import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/EachEmail.css';

class EachEmail extends React.Component {
    state = {
        hideContent: true,
    };

    showMore = () => {
        this.setState(prevState => ({
            hideContent: !prevState.hideContent,
        }));
    };

    render() {
        return (
            <section>
                <div className="email-list-info">
                    <h1>{this.props.sender}</h1>
                    <h2 className="email-subject">{this.props.subject}</h2>
                    <span>
                        <h3>{moment(this.props.date).format('h:mma')}</h3>
                        {this.props.tags.map((tag, index) => {
                            return (
                                <h3 className="email-list-tags" key={index}>
                                    {tag}{' '}
                                </h3>
                            );
                        })}
                    </span>
                </div>
                <FontAwesomeIcon
                    icon={this.state.hideContent ? faPlus : faMinus}
                    className="icon"
                    onClick={() => this.showMore()}
                />
                {/* I would make sure to check that xss attacks were protected on the server if I had to render HTML this way */}
                {this.state.hideContent ? (
                    ''
                ) : (
                    <div id="email-body" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                )}
            </section>
        );
    }
}

export default EachEmail;
