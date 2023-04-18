import './App.css';
import FreeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Botom from "./componentes/Botom.jsx";
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numClicks + 1); 
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
       <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={FreeCodeCampLogo} alt="Freddcodecamp-logo"/>
      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>
        
        <Botom 
          text="click"
          isClickBotom={true}
          manejarClick={manejarClick}
        />

        <Botom 
          text="reload"
          isClickBotom={false} 
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
