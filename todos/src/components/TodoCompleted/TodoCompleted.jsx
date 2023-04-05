import './TodoCompleted.css';


function TodoCompleted({ todo,id, removeTodo, checkAndUnCheck }) {

    const handleRemove = () => removeTodo(id)
    
    const handleChange = () => checkAndUnCheck(id)

    const formattedData = todo.date.toLocaleString('sv-SE', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'

    }).replace(/\//g,'-').replace(',','')
  

  return (
    <li key={id} className="TodoCompleted">
    <input type="checkbox" checked={todo.completed} onChange={handleChange} className="pointer" /> 
    
    <span className='completed-text' >{todo.text}:{formattedData}</span>        
    <button onClick={handleRemove}>
        <span className='pointer' role="img" aria-label="trashcan">
        🗑️ 
        </span>
    </button>
   
</li>
  )
}

export default TodoCompleted