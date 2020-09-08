import React from 'react';
import MailList from '../components/Mail/MailList';
import TagSidebar from '../components/TagSidebar';
import emails from '../emails.json';
import { render } from '@testing-library/react';
import App from '../App';

test('renders INBOX title', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/INBOX/i);
    expect(linkElement).toBeInTheDocument();
});

const props = {
    emailList: emails.messages,
    tags: ['work', 'travel'],
};

test('renders email list', () => {
    const { getByText } = render(
        <App>
            <MailList myMail={props} />
        </App>
    );
    const linkElement = getByText(/Breaking news!/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders tag  names', () => {
    const { getByText } = render(<TagSidebar tags={props.tags} />);
    const linkElement = getByText(/work/i);
    expect(linkElement).toBeInTheDocument();
});
