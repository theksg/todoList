import { useState } from "react";

const Insert = (props) =>{

    const emptyObj={
        listItem:""
    }

    const [tempVal, setTempVal] = useState(emptyObj);

    const changeEvent = (event) =>{
        const {value , name} = event.target;
        setTempVal(
            (preState)=>{
                return {...preState,[name]:value};
            }
        );
    }

    const submit = (event) => {
        event.preventDefault();
        props.onInsert(tempVal);
        setTempVal(emptyObj);
    };
    
    return (
        <>
        <form onSubmit={submit}>
        <input id="input-ctr" name ='listItem' onChange={changeEvent} value={tempVal.listItem} placeholder="Add Item"></input>
        <button type='submit' id="insert-button">+</button>
        </form>
        </>
    );
};

export default Insert;