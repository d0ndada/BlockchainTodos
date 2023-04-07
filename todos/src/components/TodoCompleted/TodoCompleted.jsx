import './TodoCompleted.css';


function TodoCompleted({  handleToggleCompleted, todo,id  }) {

   


  return (
    <li key={id} className='list-holder' >
                 <input type="checkbox"  checked={todo.completed} onChange={()=> handleToggleCompleted(todo.id)} /> 
                {/* <button /*onClick={handleFavoriteToggle}> */}
                    {/* <span className='pointer' role="img" aria-label="star"> */}
                    {/* ⭐️ */}
                    {/* </span> */}
                {/* </button> */}
                <span className='completed-text' >{todo.id} - {todo.text} </span>                  
                <button className='pointer' /*onClick={handleRemove}*/>
                <span class="material-symbols-outlined">
delete
</span>
                </button>
                
            </li>
  )
}

export default TodoCompleted