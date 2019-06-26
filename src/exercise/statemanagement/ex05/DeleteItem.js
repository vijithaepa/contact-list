import React from 'react';

export default function DeleteItem(props) {

    return (
        <button onClick={props.deleteLastItem} disabled={props.noItemsFound}>
            Delete Last Item
        </button>
    )
}
