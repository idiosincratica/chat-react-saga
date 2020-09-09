import React, {Component} from 'react';

export default class UserBlock extends Component {

    render() {
        const {users} = this.props;
        const userElements = users.map((item) => {
            return (
                <div key={item} className="sidebar__user">
                    {item}
                </div>
            );
        });
        return (
            <>
                <h2 className="sidebar__title">USERS</h2>
                {userElements}
            </>
        );
    }
}