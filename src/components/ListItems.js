import React from 'react'

function ListItems(props) {
    const items= props.items;
    const listItems = items.map(item=>{
        return <div className="list" key="item-key">
            <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.country}</p>
        </div>
    })
    return (
        <div>
            
        </div>
    )
}

export default ListItems
