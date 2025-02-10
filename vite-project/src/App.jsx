import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4 } from "uuid";

function App(){
  const [todos, setTodos] = useState([
    {id: 1, name: "todo1", completed: false},
  ]);

  const todoNamelef = useRef();
  
   //タスクを追加する
  const handeleadd = () => {
    const name = todoNamelef.current.value;
    setTodos((prevTodos) =>{
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
  });
  todoNamelef.current.value = null;
};

  const toggleTodo = (id) => {
    const newTodos = [...todos]
  }


  return(
    <>
      <TodoList todos={todos}/>
      <input type="text" ref={todoNamelef}/>
      <button onClick={handeleadd}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク：０</div>
    </>
  )
}
 
export default App;