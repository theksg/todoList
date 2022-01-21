const List = (props) => {
    return (
        <ul id="l1">
            {props.listOfItems.map((item, index) => {
                return <li key={index} id={index} ><button id="remove-button" onClick={()=>props.onRemove(index)}>x</button>{item.item} </li>
            })}
        </ul>
    )
}

export default List;