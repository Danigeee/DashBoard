import React from 'react'
import { Card } from './Card'

export const ListaUsuarios = ({titulo,data}) => {
  return (
    <section className='lista'>
      <h2 className='titulo-lista'>{titulo}</h2>
      <ul className='ul-lista-usuario'>
      {      
        data.map( dato => {
          return(
            <li className='item-lista-usuario' key={dato.id}>

              <div className='usuario-lista'>
                <h4> {dato.name} </h4>
                <p className='email-lista'>{dato.email}</p>
              </div>

            </li>
          )
        })
      }
      </ul>
    </section >
  )
}
