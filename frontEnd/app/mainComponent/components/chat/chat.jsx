

import React from 'react';
import PureComponent from '../../../base/pureComponent/PureComponent.jsx';
import './chat.less';
import MessageBlock from "./components/messagesBlock";

export default class Chat extends PureComponent {
    render() {
        const {
            status,
            currentMessage,
            sendMessage,
            toggleChatModule
        } = this.props;

        return (
            <div className="chat">
                <h1 className="chat__status">{status}</h1>
                <MessageBlock/>
            </div>
        );
    }
}