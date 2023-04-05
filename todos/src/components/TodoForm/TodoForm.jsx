import { useState } from "react";
import './TodoForm.css'
import SortOrder from "../SortButton/SortOrder";

function TodoForm({ addTodo,SortByAlphabeticOrder  }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()){
          e.preventDefault();
          addTodo(inputValue)
          setInputValue("")
      }
    }
    const handleInputChange = (e) => setInputValue(e.target.value)
  
    
    return (
      <div>
    <form className="Form" >
        <input type='text' placeholder="Add task..." 
       className="Form_field" value={inputValue} onChange={handleInputChange} />
        <button className="button" type="submit" onClick={handleSubmit}  >Add</button>
        <SortOrder SortByAlphabeticOrder={SortByAlphabeticOrder} />

    </form>
    </div>
  )
}
export default TodoForm;