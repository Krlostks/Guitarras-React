import Footer from "./components/Footer"
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useEffect, useState, useMemo } from "react"
import { db } from "./data/guitars"


function App() {
    const [guitarras] = useState(db);
    const [carrito, setCarrito] = useState(() => {
      const storedCarrito = localStorage.getItem("carrito");
      return storedCarrito ? JSON.parse(storedCarrito) : [];
    });
  
    // Calcular el total del carrito
    const total = useMemo(() => {
      return carrito.reduce((acc, guitarra) => acc + guitarra.precio * guitarra.cantidad, 0);
    }, [carrito]);
  
    useEffect(() => {
      if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito));
      }
    }, [carrito]);
  
    function agregarCarrito(guitar) {
      const carritoActual = [...carrito];
      const exist = carritoActual.findIndex((g) => g.id === guitar.id);
  
      if (exist === -1) {
        carritoActual.push({ ...guitar, cantidad: 1 });
      } else {
        carritoActual[exist].cantidad++;
      }
  
      setCarrito(carritoActual);
    }
  
    function restarCarrito(guitar, eliminar) {
      const carritoActual = [...carrito];
      carritoActual.forEach((guitarra) => {
        if (guitarra.id === guitar.id && eliminar) {
          guitarra.cantidad = 0;
        } else if (guitarra.id === guitar.id && !eliminar) {
          guitarra.cantidad--;
        }
      });
  
      setCarrito(carritoActual.filter((guitarra) => guitarra.cantidad !== 0));
    }
  return (
    <>
    <Header 
    carrito={carrito}
    agregarCarrito ={agregarCarrito}
    restarCarrito = {restarCarrito}
    total = {total}
     />
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>
      <div className="row mt-5"> 
        {guitarras.map(g => <Guitar 
        guitar ={g} 
        agregarCarrito ={agregarCarrito}
        key={g.id}/>)}      
      </div>
    </main>
    <Footer/>
    </>
)
}

export default App
