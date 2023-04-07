
import TodoItem from '../Todo/TodoItem';
import TodoCompleted from '../TodoCompleted/TodoCompleted';
import './TodoList.css';


function TodoList({todos, contract, setContract, account, connected, setConnected, getTodos, setTodos}) {

  
    

    const handleToggleCompleted = async (id) => {
        await contract.methods.toggleTodo(id).send({ from: account });
        setTodos(todos.map(todo => (todo.id === id ? {...todo,completed: !todo.completed} : todo)))
    }
    
    const showTodo = todos.filter((todo => !todo.completed)).map((todo) => {
        return (
            <TodoItem key={todo.id} handleToggleCompleted={handleToggleCompleted} todo={todo} id={todo.id} />
        )
    })

    const doneTodos = todos.filter((todo => todo.completed)).map((todo) => {
        return (
            <TodoCompleted key={todo.id} handleToggleCompleted={handleToggleCompleted} todo={todo} id={todo.id} />
        )
    })
   

    
  return (

    <div className="Holder" > 
    
        <div className="todo-box" >
            <h3>TO-DO:</h3>
            <ul className="ul">
                {account && connected ? showTodo: null}
        </ul>
        </div>
        <div className="completed-box"  >
            <h3>Completed:</h3>
            <ul>
                {account && connected ? doneTodos: null}
            </ul>
        </div>
        </div>
        
    
  )
}
export default TodoList