import { useState } from "react";
import "./SortOrder.css";

function SortOrder({ SortByAZ, SortById }) {
  const [switchSort, setSwitchSort] = useState(false);

  const handleClick = (e) => {
    if (switchSort === false) {
      e.preventDefault();
      SortByAZ();
      setSwitchSort(true);
    }
    if (switchSort === true) {
      e.preventDefault();
      SortById();
      setSwitchSort(false);
    }
  };

  return (
    <button className="button" type="submit" onClick={handleClick}>
      {switchSort ? (
        <span className="material-symbols-outlined">sort</span>
      ) : (
        <span className="material-symbols-outlined">filter_list</span>
      )}
    </button>
  );
}

export default SortOrder;
