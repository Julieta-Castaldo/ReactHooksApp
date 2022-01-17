import React, {useState, useEffect, useReducer, useMemo} from "react";


//Usando useReducer para agregar a favoritos
const initialState ={
  favorites:[]
}
const favoriteReducer = (state, action) => {
  switch (action.type){
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      default:
        return state;
  }
}

const Characters = () =>{
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [characters, setCharacters] = useState([]);   
    const [haveFavorites, setHaveFavorites] = useState(false);
    const [search, setSearch] = useState('');
    
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/") //recibo la información
        .then(response => response.json())  //la transformo a json
        .then(data => setCharacters(data.results))  //envío la info a mi hook de estado

    }, []);
    
    const handleClick = favorite => {   //agregando a favoritos
      dispatch({type: 'ADD_TO_FAVORITE', payload: favorite})
      setHaveFavorites(true);
    }

    //Buscador usando UseMemo
    const handleSearch = (event) =>{
      setSearch(event.target.value)
    }
   {/* sin usar useMemo FILTRADO
    const filteredUsers = characters.filter((user) =>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    })*/}

    //filtrado Usando useMemo
    const filteredUsers = useMemo(() =>
      characters.filter((user) =>{
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
      [characters, search]
    )

    return(
      <div className="Characters">
        
        <div style={{backgroundColor:"grey", color:"white", margin:"0 16px", padding:"8px 16px", borderRadius:"6px"}}>
          {haveFavorites ? <h3 style={{margin:0}}>Mis favoritos</h3> : <h4 style={{margin:0}}>Aún no tienes favoritos</h4>} 
          <ul style={{display:"flex", margin:0, padding:0, flexWrap:"wrap"}}>
           {favorites.favorites.map(favorite =>(
               <li key={favorite.id} style={{marginRight:"16px"}} type="none">
                 {favorite.name}
               </li>
           ))}
          </ul>
        </div>

        <div className="Search" style={{padding:"16px"}}>
          <input type="text" value={search} onChange={handleSearch} placeholder="Search character" style={{padding:"8px", borderRadius:"6px", border:"none"}}></input>
        </div>
        
        {filteredUsers.map(character =>(
           <div key={character.id} className="item"
            style={{border:"1px solid grey", borderRadius:"6px", display:"inline-block", margin:"16px", backgroundColor:"white", textAlign:"center"}}>
             <img src={character.image}></img>
             <h2>{character.name}</h2>
             <button type="button" onClick={()=> handleClick(character)} style={{marginBottom:"16px"}}>
               Agregar a favoritos
             </button>
           </div>
        ))}     
      </div>
    );
}

export default Characters