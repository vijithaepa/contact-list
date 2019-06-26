import React, { Component } from 'react'

class AddUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        npoOfGamePlayed: 0
    }

    addUser = (event) => {
        event.preventDefault()
        const user = {}
        user[this.state.userName] = this.state

        this.props.addUser(this.state)
        this.clearForm()

    }

    handleFirstName = value => {
        this.setState(() => (
            {firstName: value}
        ))
    }

    handleLastName = value => {
        this.setState(() => (
            {lastName: value}
        ))
    }

    handleUserName = value => {
        this.setState(() => (
            {userName: value}
        ))
    }

    invalidUser = () => {


        return (!this.state.firstName.length > 0 || !this.state.lastName.length > 0 || !this.state.userName.length > 0)
    }

    clearForm = () => {
        this.setState(() => {
            return {
                firstName: '',
                lastName: '',
                userName: '',
                npoOfGamePlayed: 0
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <input
                        type="text"
                        placeholder="Enter First Name"
                        value={this.state.firstName}
                        onChange={(e) => this.handleFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter Last Name"
                        value={this.state.lastName}
                        onChange={(e) => this.handleLastName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter User Name"
                        value={this.state.userName}
                        onChange={(e) => this.handleUserName(e.target.value)}
                    />

                    <button disabled={this.invalidUser()}>Add</button>
                </form>
            </div>
        )
    }

}

export default AddUser
