import React from 'react'
import { Card } from './Card'

export const ListaUsuarios = ({titulo,data}) => {
  return (
    
    <section className='lista-usuarios'>
      <h2 className='titulo-lista'>{titulo}</h2>
      <ul className='ul-lista-usuario'>
      {      
        data.map( dato => {
          return(
            <li className='item-lista-usuario' key={dato.id}>

              {/* <div className='usuario-lista'> */}
                <h5> {dato.name} </h5>
                <h5 className='email-lista'>{dato.email}</h5>
              {/* </div> */}

            </li>
          )
        })
      }
      </ul>
    </section >
    
  )
}
