
import './TodoItem.css';

function TodoItem({ todo, id, removeTodo, checkAndUnCheck, toggleFavorite  }) {
    const handleRemove = () => removeTodo(id)
  

  const handleToggle = () => checkAndUnCheck(id)

  const handleFavoriteToggle = () => toggleFavorite(id)


  return (
    <li key={todo.id} className="list-holder" >
                <input type="checkbox" checked={todo.completed} onChange={handleToggle} /> 
                <button onClick={handleFavoriteToggle}>
                    <span className='pointer' role="img" aria-label="star">
                    ⭐️
                    </span>
                </button>
                <span className='space-text' >{todo.text}</span>     
                <button onClick={handleRemove}>
                    <span className='pointer' role="img" aria-label="trashcan">
                    🗑️ 
                    </span>
                </button>
               
            </li>
  )
}

export default TodoItem