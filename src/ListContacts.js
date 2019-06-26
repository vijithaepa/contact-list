import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        searchQuery: ''
    }

    updateSearchQuery = (value) => {
        value.reverse()
        this.setState(() => ({searchQuery: value.trim()}))
    }

    clearQuery =() => {
        this.setState(()=>(
            {searchQuery: ''}
        ))
    }

    render() {
        const {searchQuery} = this.state
        const {contacts, onDeleteContact} = this.props

        const showContacts = searchQuery === ''
            ? contacts
            : contacts.filter(c => (c.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))

        return (
            <div className='list-contacts'>
                {/*{JSON.stringify(this.state)}*/}
                <div className='list-contacts-top'>
                    <input
                        type='text' className='search-contacts' placeholder='Search Contacts'
                        value={searchQuery}
                        onChange={(event) => this.updateSearchQuery(event.target.value)}
                    />
                </div>
                {showContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showContacts.length} of {contacts.length}</span>
                        <button onClick={()=> this.clearQuery()}>Show all</button>
                    </div>
                )}
                <ol className={"contact-list"}>
                    {showContacts.map(contact =>
                        <li key={contact.id} className={'contact-list-item'}>
                            <div className={'contact-avatar'}
                                 style={{backgroundImage: `url(${contact.avatarURL}`}}>

                            </div>
                            <div className={'contact-details'}>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className={'contact-remove'} onClick={() => onDeleteContact(contact)}>
                                Remove
                            </button>
                        </li>
                    )}

                </ol>
            </div>
        );
    }
}


export default ListContacts
