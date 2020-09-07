import React from 'react';
import moment from 'moment';
import '../../styles/EachEmail.css';

class EachEmail extends React.Component {
    render() {
        return (
            <div className='email-list-info'>
                <h1>{this.props.sender}</h1>
                <h2 className='email-subject'>{this.props.subject}</h2>
                <span>
                    <h3>{moment(this.props.date).format('h:mma')}</h3>
                    {this.props.tags.map((tag, index) => {
                    return <h3 className='email-list-tags' key={index}>{tag} </h3>
                    })}
                </span>
                
            </div>
        );
    }
}

export default EachEmail;