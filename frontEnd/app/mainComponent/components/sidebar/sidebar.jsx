import React from 'react';
import './sidebar.less';
import UserBlock from "./components/usersBlock";


export default class Sidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <UserBlock/>
            </div>
        );
    }
}