import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../Todolist/TodoList";
import { v4 as uuidv4 } from 'uuid';


import { useState, useEffect } from "react";

function Home() {
      const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todos") || "[]" ));

      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
      },[todo])

      const addTodo = (text,date) => {
        const newTodo = { id: uuidv4(),text,favorite: false, completed: false, date: new Date()};
        setTodo((prevTodo) => [...prevTodo,newTodo])
      }
    

      const checkAndUnCheck = (id) => {
        setTodo((prevTodo) => prevTodo.map((todo) =>
        todo.id === id? {...todo, completed: !todo.completed } : todo
        ))
      }
      
      const toggleFavorite = (id) => {
        setTodo((prevTodo) => prevTodo.map((todo) =>
        todo.id === id? {...todo, favorite: !todo.favorite} : todo
        ))
      }
   

      const removeTodo = (id) => {
        const shouldDelete = window.confirm('Are you sure you want to delete this todo?');
        if (shouldDelete) {
        setTodo((prevTodo) => 
          prevTodo.filter((todo) => todo.id !== id))
        }
    }
    const SortByAlphabeticOrder = () => {
      setTodo(prevTodo => [...prevTodo].sort((a,b) => a.text.localeCompare(b.text)))
    }



  return (
    <div>
      <header>TodoList</header> 
      <TodoForm addTodo={addTodo}  SortByAlphabeticOrder={SortByAlphabeticOrder}  />
      <TodoList todo={todo} checkAndUnCheck={checkAndUnCheck} toggleFavorite={toggleFavorite} removeTodo={removeTodo} id={todo.id}  />
      
    </div>
  )
}
export default Home