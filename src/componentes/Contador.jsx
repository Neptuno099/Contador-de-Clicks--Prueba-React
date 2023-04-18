import react from "react";
import "../Hoja-de-estilos/Contador.css";

function Contador({ numClicks }){
    return(
        <div className="contador">
            { numClicks }
        </div>
    );
}


export default Contador;