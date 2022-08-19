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
        <section>
            <h2>Lista de Productos Disponibles</h2>
            {      
        productos.data.map( dato => {
          return(
            <li key={dato.id}>
               <p>{dato.category.name}</p> 
               <p>{dato.name}</p>
               <p>{dato.description}</p>
            </li>
          )
        })
      }

        </section>
    </div>
  )
}
