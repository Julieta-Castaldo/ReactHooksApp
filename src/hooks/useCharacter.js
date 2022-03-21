import { useState, useEffect } from "react";

const useCharacter = () =>{
   const [characters, setCharacters] = useState([]);
   useEffect(()=>{
     fetch(url)
     .then(response => response.json)
     .then(data => setCharacters(data.results))
   }, [url]);
   return characters;
}

export default useCharacter;