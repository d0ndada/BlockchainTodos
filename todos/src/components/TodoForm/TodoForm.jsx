import { useState } from "react";
import './TodoForm.css'
import { NewTodo } from "../../models/todo";
import { useContext } from 'react';
import { BlockchainContext } from '../../UseContext/blockchainContext';
import SortOrder from "../SortButton/SortOrder";

function TodoForm() {
  const { account,createTodo, connected,setTodos } = useContext(BlockchainContext);
    const [newTodo, setNewTodo] = useState(new NewTodo(""));

    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTodo.text.trim().length > 0){
        e.preventDefault();
        console.log(newTodo);
          createTodo(newTodo)
          setNewTodo(new NewTodo(""))
          console.log(newTodo);
          }
      
    }
    const handleChange = (e) => {
      setNewTodo({...newTodo, text: e.target.value, })
      
    }
    const SortByAlphabeticOrder = () => {
      setTodos(prevTodo => [...prevTodo].sort((a,b) => a.text.localeCompare(b.text)))
    }

    const SortById = () => {
      setTodos(prevTodo => [...prevTodo].sort((a,b) => parseInt(a.id) - parseInt(b.id)));
    }

    
    return (
    
    <form className="Form" >
      {account && connected ? <div className="container" >
        <input type='text' placeholder="Add todo..." 
       className="Form_field" value={newTodo.text} onChange={handleChange} />
        <button className="button" type="submit" onClick={handleSubmit}  >
        <span className="material-symbols-outlined">
list_alt_add
</span>

        </button>
        <SortOrder SortByAZ={SortByAlphabeticOrder} SortById={SortById}  />

        </div>:<h4>To interact with this website pleas connect to metamask in the top right corner <span className="material-symbols-outlined arrow-animation">
north_east
</span></h4>}

    </form>
    
  )
}
export default TodoForm