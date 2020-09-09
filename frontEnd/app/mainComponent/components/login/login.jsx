import React from 'react';
import ReactDOM from 'react-dom';
import './login.less'

export default class Login extends React.Component{
    handleEnter = (ev) => {
        if (ev.key === 'Enter') {
            this.props.changeLogState(ev.target.value);
        }
    };

    render(){
        const msg = this.props.msg;
        return (
            <React.Fragment>
                <div className="authorization-form">
                    <h1 className="authorization-form__header">Authorization</h1>
                    <input onKeyUp={this.handleEnter}
                           type="text"
                           className="authorization-form__input-login"
                           placeholder="Login name"
                           required
                    autoFocus/>
                    <div className="authorization-form__msg-box">{msg}</div>
                    <button id="submitLogin"
                            type="button"
                            className="authorization-form__confirm-button"
                            onClick={this.props.changeLogState}>Login</button>
                </div>
            </React.Fragment>
        )
    }
}