import { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const [todoList,setTodoList] = useState(null)

const fetchData = async() => {
  const response = await axios.get('http://localhost:4000/api/todo');
  setTodoList(response.data)
  }

  useEffect(()=>{
    fetchData();
  },[])
  // useEffect(()=>{
  // fetch('http://localhost:4000/api/todo')
    // .then((Response)=>Response.json())
    // .then((data)=>setTodoList(data))
  // },[])
  return (
    <div className="App">
      <header className="App-header">
        <a>TodoList</a>
        {todoList?.map((todo=>(
          <div key={todo.id}>
            <div>{todo.id}</div>
            <div>{todo.text}</div>
            <div>{todo.done ? 'Y':'N'}</div>
          </div>
        )))}
      </header>
    </div>
  );
}

export default App;
