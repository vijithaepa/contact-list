import React, { Component } from 'react'
import AddUser from "./AddUser";
import UserList from "./UserList";

class UserManagementContainer extends Component {

    state = {
        userList: []
    }

    addUser = (user) => {
        if(this.isValidUser(user)){
            this.setState((prevState) => ({
                userList: [...prevState.userList, user]
            }))
        } else {
            alert("User name [" + user.userName + "] is already exists")
        }

    }

    isValidUser = (newUser) => {
        if(this.state.userList.filter(user => (
            user.userName === newUser.userName
        )).length > 0) {
            return false
        }

        return true
    }

    render() {
        return (
            <div>
                <AddUser addUser={this.addUser}/>
                {/*{JSON.stringify(this.state)}*/}
                <UserList userList={this.state.userList}/>
            </div>
        )
    }
}

export default UserManagementContainer
