
import ProductosCart from "./ProductosCart";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Carrito = ({carrito,setCarrito,cambiarCantidad,eliminar,limpiarCarrito,totalCarrito})=>{

    //Se llama a la funcion totalCarrito de App.jsx para obtener el total del carrito
    let total = totalCarrito()
    
    //Elementos condicionales dependiendo si hay productos en el carrito o no
    const carritoVacio =
        <div>
            <h2>Agrega productos al carrito para poder realizar una compra</h2>
        </div>
    const carritoConContenido = 
    <>
     <button className="LimpiarBtn" onClick={limpiarCarrito}>Limpiar carrito 🗑️</button>
     <div className="CarritoContenido">
        <div>
            {carrito.map(item =>(
                <ProductosCart 
                    pagina = "Carrito"
                    key={item.id} producto={item} setCarrito={setCarrito} 
                    carrito={carrito}
                    cambiarCantidad={cambiarCantidad} 
                    eliminar={eliminar}
                />
            ))}
        </div>
        <div className="ResumenCarrito">
            <h3>Resumen de la compra</h3>
            <hr></hr>
            <h5>Cantidad de productos: {carrito.length}</h5>
            <hr></hr>
            <h3>TOTAL: ${total}</h3>
            <Link to="/completado"><button>Realizar compra</button></Link>
        </div>
    </div>
    </>

    useEffect(() => {
    // Cambia el título al montar el componente
    document.title = "Carrito";
    
  }, []); // El array vacío asegura que solo se ejecute al montar/desmontar
   
        
  
    
    return (
        <div className="CartContainer">
            <h1>Carrito</h1>
            {carrito.length > 0 ? carritoConContenido:carritoVacio}
        </div>
    )
}

export default Carrito