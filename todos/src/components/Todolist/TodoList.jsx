
import './TodoList.css';


function TodoList({todos, contract, setContract, account, connected, setConnected, getTodos}) {

    const handleCheck = async (e) => {
        console.log("klick")
        const todoId = e.target.getAttribute('data-todoid')
        if(connected && contract) {
            try {
                await contract.methods.toggleTodo(todoId).send({ from: account });
                await getTodos();
            } catch(error) {
                console.error('Error toggling todo:', error)
            }
        }
    }
    
    const showTodo = todos.filter((todo => !todo.completed)).map((todo) => {
        return (
            <li key={todo.id} className='list-holder' >
                 <input type="checkbox" data-todoid={todo.id} checked={todo.completed} onChange={handleCheck} /> 
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
                 <input type="checkbox" data-todoid={todo.id} checked={todo.completed} onChange={handleCheck} /> 
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
                {doneTodos}
            </ul>
        </div>
        </div>
        
    
  )
}
export default TodoList