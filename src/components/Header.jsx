import React, {useState, useContext} from "react";
import ThemeContext from '../context/ThemeContext';

const Header = () =>{
    const [darkMode, setDarkMode] = useState(false)
    
    {/* const color = useContext(ThemeContext);Ejemplo de clase */}
    const {theme, updateTheme} =useContext(ThemeContext);

    const handleClick = () =>{
        setDarkMode(!darkMode);
        theme == "bg2" ? updateTheme("bg") : updateTheme("bg2");
        
    }


    return(
       <div style={{ backgroundColor: darkMode ? "white" : "black",  color: darkMode ? "black" : "white", display:"flex", justifyContent:"space-between", padding:"16px", alignItems:"center"}}>
          <h1>React Hooks</h1>
          <button type="button" style={{padding:"8px 16px ", color:"white", height:"100%", backgroundColor:"grey"}} onClick={handleClick}>{darkMode ? "Go to Light Mode" : "Go to Dark Mode"}</button>
       </div>
    );
}

export default Header;