import React from 'react'
import { Card } from './Card'

export const ListaProductos = ({titulo,data}) => {
  return (
    <section className='lista-productos'>
      <h2 className='titulo-lista'>{titulo}</h2>
      <ul className='ul-lista-producto'>
      {      
        data.map( dato => {
          return(
            <li className='item-lista-producto' key={dato.id}> 

               <p>  <strong> {dato.category_name}</strong> Cantidad: {dato.total_amount} </p> 
                
            </li>
          )
        })
      }
      </ul>
    </section >
  )
}
