import './Favorite.css'

function Favorites({ id,todo, toggleFavorite  }) {

    const handleFavoriteToggle = () => toggleFavorite(id)


  return (
    <li key={id} className="favorite-list" >
    <button onClick={handleFavoriteToggle}>
                    <span className="pointer" role="img" aria-label="star">
                    ⭐️
                    </span>
                </button>
    <span className='favorite-text' >{todo.text}</span>        
    
   </li>
  )
}

export default Favorites