import { useState } from "react";

const Forms = ({createTodo}) => {
    const [enteredTodo, setEnteredTodo] = useState("");

    //タスクを追加する関数を定義
    const addTodo = (e) => {
        const inputVal = e.target.value;
    
    //タスクを追加するオブジェクトを定義
    const newTodo = {
        id: Math.floor(Math.random()* 1e5),
        content: enteredTodo,
    };

    createTodo(newTodo);

    inputVal = null;
}
  return (
    <>
    <input type="text" value={enteredTodo} onChange={(e) =>{
    setEnteredTodo(e.target.value)
    }}/>
    <button onClick={addTodo}>追加</button>
    <div>
    <span>{enteredTodo}</span>
    </div>
    </>
  )
}
export default Forms;
