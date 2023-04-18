import React from "react";
import "../Hoja-de-estilos/Botom.css";


function Botom({ text, isClickBotom, manejarClick }){
    return(
        <button className={ isClickBotom ? "botom-Click" : "botom-reload" }
        onClick={manejarClick} >
        {text}
        </button>
    )
}


export default Botom;