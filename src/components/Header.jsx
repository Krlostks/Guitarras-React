export default function Header({carrito, agregarCarrito, restarCarrito, vaciarCarrito ,total, guitarra}) {
    return(
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {carrito.length < 1 ? (
                            <p className="text-center">El carrito esta vacio</p> ): (                            
                            <div>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map(c => 
                                    <tr key={c.id}>
                                        <td>
                                            <img className="img-fluid" src={'./public/img/'+ c.imagen+ '.jpg'} alt="imagen guitarra" />
                                        </td>
                                        <td>{c.nombre}</td>
                                        <td className="fw-bold">
                                                ${c.precio}
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={() => restarCarrito(c,false)}
                                            >
                                                -
                                            </button>
                                                {c.cantidad}
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={() => agregarCarrito(c)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={() => restarCarrito(c,true)}
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">${total}</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2"
                            onClick={()=>vaciarCarrito()}
                            >Vaciar Carrito</button>
                            </div>)
                            }
                        </div>
                    </div>
                </nav>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 text-center text-md-start pt-5">
                    <h1 className="display-2 fw-bold">{guitarra.nombre}</h1>
                    <p className="mt-5 fs-5 text-white">{guitarra.descripcion}</p>
                    <p className="text-primary fs-1 fw-black">${guitarra.precio}</p>
                    <button 
                        type="button"
                        className="btn fs-4 bg-primary text-white py-2 px-5"
                        onClick={()=> agregarCarrito(guitarra)}
                    >Agregar al Carrito</button>
                </div>
            </div>
        </div>

        <img className="header-guitarra" src="./public/img/header_guitarra.png" alt="imagen header" />
        </header>
    )
}