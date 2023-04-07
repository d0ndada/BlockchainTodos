
import './TodoItem.css';

function TodoItem({ handleToggleCompleted, todo }) {
   


  return (
    <li key={todo.id} className='list-holder' >
                 <input type="checkbox"  checked={todo.completed} onChange={()=> handleToggleCompleted(todo.id)} /> 
                {/* <button /*onClick={handleFavoriteToggle}> */}
                    {/* <span className='pointer' role="img" aria-label="star"> */}
                    {/* ⭐️ */}
                    {/* </span> */}
                {/* </button> */}
                <span className='todo-text' >{todo.id} - {todo.text}</span>                  
                <button className='pointer' /*onClick={handleRemove}*/>
                    <span  role="img" aria-label="trashcan">
                    🗑️ 
                    </span>
                </button>
                
            </li>
  )
}

export default TodoItem