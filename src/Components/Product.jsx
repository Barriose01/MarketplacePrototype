
//CounterProducto usado para los botones
import CounterProducto from "./CounterBoton";

const Product = ({producto,agregar,carrito,setCarrito,cambiarCantidad,eliminar})=>{
    return (
        
        <div className="Producto">
            <div className="ImagenProducto">
                <img src={producto.imagen}></img>
            </div>
            
            <p>{producto.titulo}</p>
            <p>${producto.precio}</p>
            <CounterProducto
                producto={producto}
                carrito={carrito}
                setCarrito={setCarrito}
                agregar={agregar}
                cambiarCantidad={cambiarCantidad}
                eliminar={eliminar}
            />
        </div>
    )
}

export default Product