import React, {useState, useEffect} from "react";

const Characters = () =>{
    const [characters, setCharacters] = useState([]);   
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/") //recibo la información
        .then(response => response.json())  //la transformo a json
        .then(data => setCharacters(data.results))  //envío la info a mi hook de estado

    }, []);

    return(
      <div>
        {characters.map(character =>(
           <div style={{border:"1px solid grey", borderRadius:"6px", display:"inline-block", margin:"16px", backgroundColor:"white", textAlign:"center"}}>
             <img src={character.image}></img>
             <h2>{character.name}</h2>
           </div>
        ))}     
      </div>
    );
}

export default Characters