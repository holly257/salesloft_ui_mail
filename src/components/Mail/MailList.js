import React from 'react';
import EachEmail from './EachEmail';
import emails from '../../emails.json';
import '../../styles/MailList.css';

class MailList extends React.Component {
    render() {
        return (
            <section id="email-main">
                <p>INBOX</p>
                {emails.messages.map(email => {
                    return <EachEmail key={email.id} {...email} />;
                })}
            </section>
        );
    }
}

export default MailList;
