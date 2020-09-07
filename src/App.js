import React from 'react';
import emails from './emails.json';
import Nav from './components/Nav';
import TagSidebar from './components/TagSidebar';
import MailList from './components/Mail/MailList';
import './App.css';

class App extends React.Component {

    state = {
        hiddenDropdown: true,
        tagList : []
    };

    componentDidMount(){
        let list = []
        emails.messages.map(email => {
            email.tags.map(tag => {
                if(!list.find(item => item === tag)){
                    if(!list) {
                        list = [tag]
                    } else {
                        list.push(tag)
                    }
                    this.setState({tagList: list })
                }
                return list;
            })
            return list;
        })
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            hiddenDropdown: !prevState.hiddenDropdown,
        }));
    };

    render() {
        return (
            <div className="App">
                <Nav updateDropdown={() => this.toggleDropdown()} dropdown={this.state.hiddenDropdown}/>
                <main>
                    <TagSidebar dropdown={this.state.hiddenDropdown} tags={this.state.tagList}/>
                    <MailList />
                </main>
            </div>
        );
    }
}
export default App;
