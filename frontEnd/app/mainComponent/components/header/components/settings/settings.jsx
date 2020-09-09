import React, {Component} from 'react';
import './setting.less';

export default class Settings extends Component {

    handleClick = (ev) => {
        if (ev.target !== ev.currentTarget) {
            return;
        }
        this.props.toggleSettingsModule();
    };

    handleInputBlackList = (ev) => {
        const users = ev.target.value;
        this.props.setBlackList(users);
    };

    render() {
        const {
            serviceMsg,
            blackList,
            blackListEnabled
        } = this.props;
        return (
            <div className="settings" onClick={this.handleClick}>

                <div className="settings__modal-window">
                    <div className="settings__service-msg-container">
                        <label className="settings__label" htmlFor="settings__service-msg">Server messages</label>
                        <input type="checkbox"
                            className="settings__toggler"
                            checked={serviceMsg}
                            onChange={this.props.toggleServiceMsg}
                            id="settings__service-msg"
                        />
                    </div>
                    <div className="settings__black-list-container">
                        <label children="Blacklist users" className="settings__label" />
                        <input
                            type="text"
                            className="settings__black-list"
                            onChange={this.handleInputBlackList}
                            value={blackList}
                        />
                        <input
                            type="checkbox"
                            className="settings__toggler"
                            onChange={this.props.toggleBlackList}
                            checked={blackListEnabled}
                        />
                    </div>
                    <div className="settings__close-button-container">
                        <button className="settings__close-button"
                            onClick={this.props.toggleSettingsModule}
                            children="Close"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

