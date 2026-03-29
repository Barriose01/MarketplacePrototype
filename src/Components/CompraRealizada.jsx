import { useEffect} from 'react';

//se usa useLocation para tener la ubicacion actual de la pagina.
//Si cambia este valor, se limpia el carrito. Esto para que no hayan
//productos en el carrito despues de colocar la orden
import { useLocation } from "react-router-dom";

import ProductosCart from "./ProductosCart";

const CompraRealizada = ({carrito,totalCarrito,limpiarCarrito})=>{
    
   const location = useLocation()

   //useEffect para limpiar el carrito cuando cambia la ubicacion de la pagina
    useEffect(() => {
        return () => {
            limpiarCarrito()
        }
    }, [location])

    let total = totalCarrito()

    useEffect(() => {
    // Cambia el título al montar el componente
    document.title = "Compra realizada";

    
  }, []); // El array vacío asegura que solo se ejecute al montar/desmontar
   
    return (
       <>
       <h1>Compra realizada con exito</h1>
        <div className="CarritoContenido">
            <div>

                {/**Al usar "CompraRealizada" como pagina, se mostraran
                 * las cantidades en vez de tener los botones para cambiar
                 * las cantidades
                 */}
                {carrito.map(item =>(
                    <ProductosCart 
                        pagina="CompraRealizada"
                        key={item.id} producto={item} 
                        carrito={carrito}
                    />
                ))}
            </div>
            <div className="ResumenCarrito">
                <h3>Resumen de la compra</h3>
                <hr></hr>
                <h5>Cantidad de productos: {carrito.length}</h5>
                <hr></hr>
                <h3>TOTAL: ${total}</h3>
            </div>
        </div>
       </>
       
        
    )
}

export default CompraRealizada