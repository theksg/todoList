import { useState } from "react";
import Insert from "./Insert";
import List from "./List";


const App = () =>{
    const [listOfItems, setListOfItems] = useState([]);
    
    const onInsert = (tempVal) =>{
        setListOfItems((prevArray) =>{
            let newObj={
                item: tempVal.listItem
            };
            return [...prevArray,newObj]
        });
    }

    const onRemove = (id) =>{
        let newList=[];
        listOfItems.forEach((item, index) =>{
            if(index!==id)
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