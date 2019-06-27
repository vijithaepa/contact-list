import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import AddContact from "./AddContact";
import { Route } from 'react-router-dom'
import * as ContactAPI from "./utils/ContactsAPI";
import Toggler from "./exercise/statemanagement/Toggler";

class App extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        ContactAPI.getAll().then(contacts => {
            this.setState(() => ({
                contacts
            }))
        })
    }


    removeContact = (contact) => {
        this.setState((curState) => ({
            contacts: curState.contacts.filter((value) => value.id !== contact.id)
        }))

        ContactAPI.remove(contact)
    }

    createContact = (contact) => {
        ContactsAPI.create(contact)
            .then((contact) => {
                this.setState((curState) => (
                    {contacts: [...curState.contacts, contact]}
                    // {contacts: curState.contacts.concat([contact])}
                ))
            })
    }

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <ListContacts
                        contacts={this.state.contacts}
                        onDeleteContact={this.removeContact}
                    />
                )}
                />

                <Route path="/create" render={({history}) => (
                    <AddContact
                        onCreateContact={(contact) => {
                            console.log("Con: ", contact)
                            this.createContact(contact)
                            history.push("/")
                        }}/>
                )}
                />

                <Toggler />
            </div>
        );
    }
}

export default App;
