import { useRef, useState } from "react";

const ToDoList = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    let clean = useRef();

    const userInput = (event) => {
        setItem(event.target.value);
    }

    const addValue = () => {
        list.push(item);
        setList([...list]);
        clean.current.value = "";
    }
    const removeElement = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }
    return (
        <div>
            <h1>Welcome to ToDoList</h1>
            <input ref={clean} onKeyUp={userInput} type="text" placeholder="Enter a string..." />
            <button className="bg-cyan-500 hover:bg-cyan-600" onClick={addValue}>Add</button>
            <ol>{
                list.map((ele, index) => {
                    return (
                        <div>
                            <li>{ele}</li>
                            <button className="bg-indigo-500" type="button" onClick={() => removeElement(index)}>Remove</button>
                        </div>
                    );
                })
            }</ol>
        </div>
    );
}
export default ToDoList;