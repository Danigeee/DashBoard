import React, { useEffect, useState } from 'react'


export const ListaProductos = () => {
    const[productos, setProductos] = useState({countByCategory: [], data: []});
    

   useEffect(() => {
    fetch("http://localhost:3030/api/productos")
    .then(res => res.json())
    .then(data =>{
      
      setProductos(data)

    })
    .catch(error => console.log("error en promise de productos"))
   }, [])
   

  return (
    <div className='page-main'>
            <h2 className='titulo-pagina'>Lista de Productos Disponibles</h2>
        <section className='cards'>
            {      
        productos.data.map( dato => {
          return(
            <div key={dato.id} >         
              <div className="card card-color"> 
                <div className='header-card-product'>
                  <h2 className="card__title">Categora: {dato.category.name}  </h2> 
                  <h2 className="card__title">Nombre:{dato.name}</h2>
                  <h2 className="card__title">Descripcion:</h2>
                </div>

                <p className="card__apply">{dato.description}</p>
                <p className="card__apply">
                  <a className="card__link" href="#">Editar <i class="fas fa-arrow-right"></i></a>
                </p>
              </div>
            </div>
          )
        })
      }

        </section>
    </div>
  )
}
