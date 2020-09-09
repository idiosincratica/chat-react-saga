import React from 'react';
import PureComponent from '../base/pureComponent/PureComponent.jsx';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Chat from './components/chat';
import Footer from './components/footer';
import './mainComponent.less';
import Login from "./components/login/login";
import Settings from "./components/header/components/settings";

export default class MainComponent extends PureComponent {
    state = {
        logState: false,
        msg: ''
    };

    changeLogState = (userName) => {
        const userNameTrimmed = userName.trim();
        if (userName !== ""){
            this.setState(() => ({logState : true, userName : userNameTrimmed, msg: ''}));
            this.props.emitUserName(userNameTrimmed);
        }
        else {
            this.setState({msg: "Please, enter your login"});
        }
    };

    render() {
        const {
            modules,
            blocksActive,
        } = this.props;

        const loginBlock = !this.state.logState ?
            <Login
                changeLogState = {this.changeLogState}
                msg={this.state.msg}
            /> : null;
        
        const chatBlock = this.state.logState && blocksActive.chat ?
            <div className="content__chat">
                {modules.chat.enabled && <Chat/>}
            </div> : null;

        return (
            <div className="page-wrapper">
                <header className="page-wrapper__header">
                    {!this.state.logState ?
                        modules.header.enabled &&
                        <Header/> :
                        modules.header.enabled &&
                        <Header userName = {this.state.userName} />}
                </header>
                <main className="page-wrapper__content content">
                    <div className="content__sidebar">
                        {modules.sidebar.enabled && <Sidebar/>}
                    </div>
                    {loginBlock}
                    {chatBlock}
                    {blocksActive.settings && modules.settings.enabled && <Settings/>}
                </main>
                <footer className="page-wrapper__footer">
                    {modules.footer.enabled && <Footer/>}
                </footer>
            </div>
        );
    }
}