
import './TodoList.css';


function TodoList({todos, contract, setContract, account, connected, setConnected, getTodos, setTodos}) {

  
    

    const handleToggleCompleted = async (id) => {
        await contract.methods.toggleTodo(id).send({ from: account });
        setTodos(todos.map(todo => (todo.id == id ? {...todo,completed: !todo.completed} : todo)))
    }
    
    const showTodo = todos.filter((todo => !todo.completed)).map((todo) => {
        return (
            <li key={todo.id} className='list-holder' >
                 <input type="checkbox"  checked={todo.completed} onChange={()=> handleToggleCompleted(todo.id)} /> 
                {/* <button /*onClick={handleFavoriteToggle}> */}
                    {/* <span className='pointer' role="img" aria-label="star"> */}
                    {/* ⭐️ */}
                    {/* </span> */}
                {/* </button> */}
                <span className='space-text' >{todo.id} - {todo.text} -  {todo.completed.toString()}</span>                  
                <button /*onClick={handleRemove}*/>
                    <span className='pointer' role="img" aria-label="trashcan">
                    🗑️ 
                    </span>
                </button>
                
            </li>
        )
    })

    const doneTodos = todos.filter((todo => todo.completed)).map((todo) => {
        return (
            <li key={todo.id} className='list-holder' >
                 <input type="checkbox"  checked={todo.completed} onChange={()=> handleToggleCompleted(todo.id)} /> 
                {/* <button /*onClick={handleFavoriteToggle}> */}
                    {/* <span className='pointer' role="img" aria-label="star"> */}
                    {/* ⭐️ */}
                    {/* </span> */}
                {/* </button> */}
                <span className='space-text' >{todo.id} - {todo.text} -  {todo.completed.toString()}</span>                  
                <button /*onClick={handleRemove}*/>
                    <span className='pointer' role="img" aria-label="trashcan">
                    🗑️ 
                    </span>
                </button>
                
            </li>
        )
    })
   

    
  return (

    <div className="Holder" > 
    
        <div className="todo-box" >
            <h3>TODO</h3>
            <ul className="ul">
                {account && connected ? showTodo: null}
        </ul>
        </div>
        <div className="completed-box"  >
            <h3>Completed</h3>
            <ul>
                {account && connected ? doneTodos: null}
            </ul>
        </div>
        </div>
        
    
  )
}
export default TodoList