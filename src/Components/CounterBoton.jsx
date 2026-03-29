
//Componente comun utilizado en Product, ProductosCart y CompraRealizada
const CounterProducto = ({ producto, carrito, agregar,cambiarCantidad,eliminar}) => {

    //Dependiendo si el producto esta en el carrito, se mostrara botonCart
    //o counter
    const productoEnCarro = carrito.find(objeto => objeto.id === producto.id)
    
    const botonCart = (

        //Desde aca se llama a la funcion para agregar productos al carro en App.jsx
        <button onClick={() => agregar(producto.id)}>
            Agregar al carro
        </button>
    );

    //las funciones llaman a las funciones originales en App.jsx
    const counter = (
        <div className="CounterProducto">
            <button className="BtnEliminar" id={producto.id} onClick={eliminar}>🗑️</button>
            <button className="BtnDisminuir" id={producto.id} value="-" onClick={cambiarCantidad}>-</button>
            <input
                className="Counter"
                type="number"
                min="1"
                max="1000"
                value={productoEnCarro ? productoEnCarro.cantidad : 1}
                onChange={cambiarCantidad}
                id={producto.id}
            />
            <button className="BtnAumentar" id={producto.id} value="+" onClick={cambiarCantidad}>+</button>
        </div>
    );

    return (

        //some itera por un array y devuelve true si una condicion se cumple.
        //no recorre el array completo. Mas eficiente

        //En este caso, verifica si el producto esta en el carro. Si esta, se
        //muestra counter para poder modificar las canidades o borrarlo.
        //Si no esta, se muestra el boton para agregar al caro
        carrito.some(item => item.id === producto.id)
            ? counter
            : botonCart
    );
};

export default CounterProducto;