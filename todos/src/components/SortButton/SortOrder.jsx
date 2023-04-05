import './SortOrder.css'

function SortOrder({ SortByAlphabeticOrder }) {


    const handleClick = (e) => {
        e.preventDefault();
        SortByAlphabeticOrder();
    }

  return (
    <button className='sortBtn' type='submit' onClick={handleClick} >Sort</button>
  )
}

export default SortOrder