import React from 'react';
import ListItems from "./ListItems";
import DeleteItem from "./DeleteItem";
import AddItem from "./AddItem";

class Ex05 extends React.Component {
    state = {
        items: [],
    };


    handleAddItem = (value) => {
        this.setState(oldState => ({
            items: [...oldState.items, value],
        }));
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };



    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {
        return (
            <div className="App">

                <AddItem addItem={this.handleAddItem} />

                <DeleteItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound()}/>

                <ListItems items={this.state.items}/>
            </div>
        );
    }
}

export default Ex05;
