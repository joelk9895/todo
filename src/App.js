import TodoList from "./component/TodoList";
import "./styles/App.css"
import React, {useState,useRef,useEffect } from "react";

const LOCAL_STORAGE_KEY = "todo.app"

function App() {
  const [todos,setTodos] = useState([])
  const todovalue = useRef()

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function toggleTodo(id) {
    const newtodos = [...todos]
    const todo = newtodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newtodos)
  }
   
  function handleaddTodo(){
    const name = todovalue.current.value
    if(name === "") return
    setTodos(prevTodos => {
      return[...prevTodos,{id:prevTodos.length+1, name:name,  complete:false}]
    })
    todovalue.current.value = null
      
  }
  function handleClear(){
    const newTodo = todos.filter(todo=> !todo.complete)
    setTodos(newTodo)
  }
  return (
    <div className="App"> 
      <div id="todoshow"><TodoList todos = {todos} toggleTodo = {toggleTodo} /></div>
      <div id="controls"><input ref={todovalue} type = "text" placeholder= "Enter your Todo" id="textbox"/>
      <input type = "button" value="Add TODO" onClick={handleaddTodo} id="addbutton"/></div>
      <div id="updates"><label>There are {todos.filter(todo=> !todo.complete).length} task left for you!</label>
      <input type={"button"} value="Remove completed" onClick={handleClear} id="addbutton"/></div>
      
    </div>
  );
}

export default App;
