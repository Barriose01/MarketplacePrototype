import CounterProducto from "./CounterBoton";


const ProductosCart = ({pagina, producto, carrito, setCarrito,cambiarCantidad,eliminar})=>{
    
    //precio total del producto
    const precioTotal = parseFloat((producto.precio * producto.cantidad).toFixed(2))
    
    //Desde el cart se va a poder modificar cantidades y eliminar productos
    const counterBoton = 
        <CounterProducto
                        producto={producto}
                        carrito={carrito}
                        setCarrito={setCarrito}
                        cambiarCantidad={cambiarCantidad}
                        eliminar={eliminar}
        />

    //Si pagina ===CompraRealizada, en vez de mostrar los botones para
    //cambiar cantidades, se mostraran las cantidades directamente
    const cantidadProducto = <p>Cantidad: {producto.cantidad}</p>
    return (
        <div className="ProductosCart">
            <div className="ImagenProductoCart">
                <img src={producto.imagen}></img>
            </div>
            
            <div className="infoCartContainer">
                <p>{producto.titulo}</p>
                <p>Precio unitario: ${producto.precio}</p>
                <p>Precio total: ${precioTotal}</p>
                {pagina === "Carrito"? counterBoton:cantidadProducto}
            </div>
        </div>
    )
}

export default ProductosCart