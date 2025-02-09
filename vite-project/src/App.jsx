import { useState } from "react";
import TodoList from "./TodoList";

function App(){
  const [todos, setTodos] = useState(["Todo1", "Todo2"])

  return(
    <>
    <TodoList todos={todos}/>
    <input type="text" />
    <button>タスクを追加する</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスクを表示:
    </div>
    </>
  ) 
};

export default App;