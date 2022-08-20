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

               <p>  <strong> {dato.category_name}</strong> Cantidad:  <span className="item-lista-cantidad">{dato.total_amount}</span> </p> 
                
            </li>
          )
        })
      }
      </ul>
    </section >
  )
}
