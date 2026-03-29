import Product from "./Product";
import { useState,useEffect} from "react";
const Page = ({agregar,productos,carrito,setCarrito,cambiarCantidad,eliminar})=>{

const [busqueda,setBusqueda] = useState("")

const realizarBusqueda = (e)=>{
    setBusqueda(e.target.value.toLowerCase())
}

const filtrarProductos = productos.filter((producto) => {

    //Cuando no haya input en el searchbar, se muestran todos los productos
    if (busqueda === '') {
      return producto; 
    } else {
        //Cuando haya input, solo se devuelven los productos cuyos titulos
        //coincidan con parte del input
      return producto.titulo.toLowerCase().includes(busqueda);
    }
  });

  useEffect(() => {
      // Cambia el título al montar el componente
      document.title = "Marketplace";
      
    }, []); // El array vacío asegura que solo se ejecute al montar/desmontar
    return (
        <>
            <div className="TituloYSearch">
                <h1 className="TituloProductos">Productos</h1>
                <input className="Search" type="text" 
                placeholder="Buscar productos" value={busqueda}
                onChange={realizarBusqueda}></input>
            </div>
            
            <div className="Container">
                
                {/*Se muestran los productos basados en el search.
                Se crean los productos al pasarselos al componente Product*/}
                {filtrarProductos.map(item =>(
                    <Product 
                        key={item.id} producto={item} agregar ={agregar} 
                        carrito={carrito} setCarrito={setCarrito} 
                        cambiarCantidad={cambiarCantidad}
                        eliminar={eliminar}
                    />
                ))}
            
            </div>
        
        </>
        
    )
}
export default Page