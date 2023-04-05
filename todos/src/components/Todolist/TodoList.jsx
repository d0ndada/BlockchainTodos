import TodoItem from "../TodoItem/TodoItem";
import TodoCompleted from "../TodoCompleted/TodoCompleted";
import Favorites from "../Favorites/Favorites";
import './TodoList.css';


function TodoList({ todo, removeTodo, checkAndUnCheck, toggleFavorite }) {
    
 
    const todoList = todo.filter((todo => !todo.completed)).map((todo) => 
         (
            <TodoItem key={todo.id} todo={todo} id={todo.id} removeTodo={removeTodo} checkAndUnCheck={checkAndUnCheck} toggleFavorite={toggleFavorite}  />
        
    ))

    const favoriteList = todo.filter((todo => todo.favorite)).map((todo) => (
        <Favorites key={todo.id} todo={todo} id={todo.id}  toggleFavorite={toggleFavorite}    />
    ))

    const completedList = todo.filter((todo => todo.completed)).map((todo) => (
            <TodoCompleted key={todo.id} todo={todo} id={todo.id} removeTodo={removeTodo} checkAndUnCheck={checkAndUnCheck} />
        )
    )
  

  return (

    <div className="Holder" > 
        <div className="todo-box" >
            <h3>TODO</h3>
            <ul className="ul">
        {todoList}
        </ul>
        </div>
        <div className="completed-box"  >
            <h3>Completed</h3>
            <ul>
            {completedList}
            </ul>
        </div>
        <div className="favorite-box"  >
            <h3>Favorites</h3>
            <ul>
            {favoriteList}
            </ul>
        </div>
        </div>
        
    
  )
}
export default TodoList