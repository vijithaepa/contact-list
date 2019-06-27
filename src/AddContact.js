import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class AddContact extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash:true})
        console.log("values : ", values)
        if(this.props.onCreateContact) {
            this.props.onCreateContact(values)
        }
    }

    render() {
        return (
            <div>
                <Link to="/" className="close-create-contact">Close</Link>

                <form className="create-contact-form" onSubmit={this.handleSubmit}>
                    <ImageInput className="create-contact-avatar-input"
                                name="avaterURL"
                                maxHeight={64} />
                    <div className="create-contact-details">
                        <input type="text" name="name" placeholder="name"/>
                        <input type="text" name="handle" placeholder="Handler"/>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default AddContact
