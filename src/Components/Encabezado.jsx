import React from "react";
import { Link } from "react-router-dom";

const Encabezado = ()=>{
    return (
        <header className="Encabezado">
            <Link to="/"><button className="BtnHome">🏠</button> </Link>
            <Link to="/carrito"><button className="BtnCarro">🛒</button></Link>
            
        </header>
       
        
    )
}

export default Encabezado