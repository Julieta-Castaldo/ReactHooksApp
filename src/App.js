import './App.css';
import Header from "./components/Header";
import Characters from './components/Characters';
import {useState} from "react";
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, updateTheme] = useState('bg2');

  return (
    <ThemeContext.Provider  value={{theme, updateTheme}} >
      <div className={theme}>
        <Header/>
        <Characters/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
