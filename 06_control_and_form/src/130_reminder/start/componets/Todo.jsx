import { useState } from "react";
import List from "./List"
import Forms from "./Forms"

//関数定義
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, settodos] = useState(todosList);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id != id;
    });

    settodos(newTodos);
  }

  //Formsで作られたタスク追加関連の関数をsettodosに渡してあげる関数
  const createTodo = (todo) => {
    settodos([...todos, todo]);
  }

  //返すものを定義
  return(
    <>
   <List todos={todos} deleteTodo={deleteTodo}/>
    <Forms createTodo={createTodo}/>
    </>
  )
};

export default Todo;