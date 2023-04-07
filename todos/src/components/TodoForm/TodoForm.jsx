import { useState } from "react";
import './TodoForm.css'
import { NewTodo } from "../../models/todo";
// import SortOrder from "../SortButton/SortOrder";

function TodoForm({ addTodo,SortByAlphabeticOrder  }) {
    const [newTodo, setNewTodo] = useState(new NewTodo(""));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTodo);
          addTodo(newTodo)
          
      
    }
    const handleChange = (e) => {
      setNewTodo({...newTodo, text: e.target.value, })
      
    }
    
    return (
      <div>
    <form className="Form" >
        <input type='text' placeholder="Add task..." 
       className="Form_field" value={newTodo.text} onChange={handleChange} />
        <button className="button" type="submit" onClick={handleSubmit}  >Add</button>
        {/* <SortOrder SortByAlphabeticOrder={SortByAlphabeticOrder} /> */}

    </form>
    </div>
  )
}
export default TodoForm