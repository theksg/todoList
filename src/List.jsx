const List = (props) => {
    return (
        <ul id="l1">
            {props.listOfItems.map((item, index) => {
                return <li key={item.id} id={item.id} onClick={()=>props.onRemove(item.id)}><button id="remove-button">x</button>{item.item} </li>
            })}
        </ul>
    )
}

export default List;