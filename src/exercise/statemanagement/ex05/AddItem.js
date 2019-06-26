import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class AddItem extends Component {

    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    handleAddItem = (event)=> {
        event.preventDefault();
        this.props.addItem(this.state.value);
    }

    render() {
        return (
            <div>
                <h2>Shopping List</h2>
                <form onSubmit={this.handleAddItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        )
    }
}

AddItem.propTypes = {
    addItem: PropTypes.func.isRequired
}
