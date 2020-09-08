import React from 'react';
import emails from './emails.json';
import Nav from './components/Nav';
import TagSidebar from './components/TagSidebar';
import MailList from './components/Mail/MailList';
import './App.css';

class App extends React.Component {
    state = {
        hiddenDropdown: true,
        tagList: [],
        mailFilter: null,
        mailList: emails.messages,
    };

    componentDidMount() {
        let list = [];
        emails.messages.map(email => {
            email.tags.map(tag => {
                if (!list.find(item => item === tag)) {
                    if (!list) {
                        list = [tag];
                    } else {
                        list.push(tag);
                    }
                    this.setState({ tagList: list });
                }
                return list;
            });
            return list;
        });
    }

    filterMail = (value) => {
        this.setState({
            mailFilter: value,
        }, () => {
            this.setMail();
        })
        
    }

    setMail = () => {
        let mailArr = []
        console.log(this.state.mailFilter)
        if(this.state.mailFilter !== null){
            emails.messages.map(email => {
                if(email.tags.includes(this.state.mailFilter)){
                    mailArr.push(email)
                    this.setState({
                        mailList: mailArr,
                    });
                }
            })
        } else {
            this.setState({
                mailList: emails.messages,
            });
        }
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            hiddenDropdown: !prevState.hiddenDropdown,
        }));
    };

    render() {
        return (
            <div className="App">
                <Nav
                    updateDropdown={() => this.toggleDropdown()}
                    dropdown={this.state.hiddenDropdown}
                />
                <main>
                    <TagSidebar updateMail={(e) => this.filterMail(e)} dropdown={this.state.hiddenDropdown} tags={this.state.tagList} />
                    <MailList mail={() => this.mailFilter()} myMail={this.state.mailList}/>
                </main>
            </div>
        );
    }
}
export default App;
