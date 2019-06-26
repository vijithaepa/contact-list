import React from 'react';

export default function ListItems(props) {
    return (
        <div className='list-items'>
            <p className="items">Items</p>
            <ol className="item-list">
                {props.items.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </div>
    )
}
