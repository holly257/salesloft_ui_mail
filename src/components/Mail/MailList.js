import React from 'react';
import EachEmail from './EachEmail';
import '../../styles/MailList.css';

class MailList extends React.Component {
    render() {
        return (
            <section id="email-main">
                {this.props.myMail.map(email => {
                    return <EachEmail key={email.id} {...email} />;
                })}
            </section>
        );
    }
}

export default MailList;
