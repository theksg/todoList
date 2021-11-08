import { useState } from "react";
import Insert from "./Insert";
import List from "./List";

let count = 0;

const App = () =>{
    const [listOfItems, setListOfItems] = useState([]);
    
    const onInsert = (tempVal) =>{
        setListOfItems((prevArray) =>{
            let newObj={
                item: tempVal.listItem,
                id:count++
            };
            return [...prevArray,newObj]
        });
    }

    const onRemove = (id) =>{
        let newList=[];
        listOfItems.forEach((item, index) =>{
            if(item.id!==id)
                newList.push(item);
        });
        setListOfItems(newList);
    };

    return (
        <div className="main_div">
            <h1>ToDo List</h1>
            <Insert
            onInsert={onInsert}
            />
            <List
            listOfItems={listOfItems}
            onRemove={onRemove}
            />

        </div>

    );
};

export default App;