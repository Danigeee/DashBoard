import React from 'react'
import '../App.css';


export const NavBarr = () => {
  return (
    <nav className='nav-barr'>
    <ul className='ul-nav-bar'>
        <li className='nav-item'>
        <ion-icon name="notifications-outline"></ion-icon>
        </li>
        <li className='nav-item'>
        <ion-icon name="mail-unread-outline"></ion-icon>
        </li>
    </ul>
          
        <ul className='ul-nav-bar'>
        <li className='nav-item nombre-usuario'>
        Panel De Administrador
        </li>
       
    </ul>

</nav>

	
  )
}
