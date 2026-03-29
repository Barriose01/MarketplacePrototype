import { useState,useEffect } from 'react'
import './App.css'
import Page from './Components/Page'
import Encabezado from './Components/Encabezado'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carrito from './Components/Carrito';
import productos from "./data/productos";
import CompraRealizada from './Components/CompraRealizada';


function App() {

  const [carro,setCarro] = useState([])

  const AgregarCarro = (id) => {
    //Al carro anterior se le agrega el nuevo producto (productos[id]).
    //El id se pasara desde CounterBoton.jsx
    setCarro(prev => [...prev, productos[id]]);
    alert("Producto agregado al carrito");
}

//Ejecutado desde CounterBoton.jsx. Se usa desde el Home y Carrito
const cambiarCantidad = (e) => {
        let newCantidad = "";

        //El value esta colocado dentro de los botones en CounterBoton.jsx
        let type = e.target.value;

        //el id de los botones sera el mismo que el id del producto
        const productoEnCarro = carro.find(objeto => objeto.id === Number(e.target.id))

        if (type === "-") {
            newCantidad = productoEnCarro.cantidad - 1;
            if (newCantidad < 1) newCantidad = 1;
        }
        else if (type === "+") {
            newCantidad = productoEnCarro.cantidad + 1;
            if (newCantidad > 1000) newCantidad = 1000;
        }
        else {
            newCantidad = parseInt(e.target.value);
        }
        setCarro(prev =>

          //Se itera por los productos del carro. Cuando encuentre al
          //producto que cambio la cantidad, se copia el producto pero
          //se modifica la cantidad. Los otros items quedan como estaban
            prev.map(item =>
                item.id === Number(e.target.id)
                    ? { ...item, cantidad: newCantidad  }
                    : item
            )
        );
    };

//Ejecutado desde CounterBoton.jsx. Se usa desde el Home y Carrito
const eliminarProductoCart = (e) =>{
  const newArray = carro.filter(item => item.id !== Number(e.target.id))
  setCarro(newArray);
}
const limpiarCarrito = () =>{
  setCarro([])
}

//Se usa en el carrito y en compra realizada
const totalCarrito = ()=>{
        let total = 0
            for(let i = 0;i<carro.length;i++){
                let precioTotalProducto = parseFloat((carro[i].precio * carro[i].cantidad).toFixed(2))
                total += precioTotalProducto
            
            }
        return total.toFixed(2)
    }
useEffect(() => {
    console.log(carro);
}, [carro]);

  return (
    <BrowserRouter>
      <>
        <div className='App'>
          <Encabezado></Encabezado>
          <Routes>
            
            <Route 
              path='/carrito' element={<Carrito carrito={carro} 
              setCarrito={setCarro} cambiarCantidad={cambiarCantidad}
              eliminar={eliminarProductoCart}
              limpiarCarrito = {limpiarCarrito}
              totalCarrito={totalCarrito}/>}
            />
            <Route 
              path='/' element={<Page agregar = {AgregarCarro} 
              productos={productos} carrito={carro} setCarrito={setCarro} 
              cambiarCantidad={cambiarCantidad}
              eliminar={eliminarProductoCart}/>}
            />
            <Route
              path='/completado' element={<CompraRealizada
              
              carrito={carro}  totalCarrito={totalCarrito}
              limpiarCarrito={limpiarCarrito}/>
              
              }
            />
          </Routes>
        </div>
        
      </>
    </BrowserRouter>
    
  )
}

export default App
