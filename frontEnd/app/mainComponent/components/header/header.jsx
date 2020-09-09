import React from 'react';
import PureComponent from '../../../base/pureComponent/PureComponent.jsx';
import './header.less';

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <a className="header__title" href={this.props.host} target="_blank">Chat App</a>
                <div className="header__user-name">{this.props.userName ? "Hello, " + this.props.userName : "Hello"}</div>
                <button className="header__settings-button"
                    onClick={this.props.toggleSettingsModule}
                >Settings</button>
            </div>
        );
    }
}