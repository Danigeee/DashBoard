import React from 'react'
import {   NavLink } from "react-router-dom";

import '../App.css';

export const LateralBarr = () => {
  return (
    <div className="app-body-navigation">
			<nav className="navigation">
                 <a href="#" className='img-container'>
					<img src='/img/Logo.svg' alt='imagen logo' className='imagen-logo' />
				</a>
				<NavLink className="navegation-a item-a" to = "/">General </NavLink>
				
				<NavLink className="navegation-a item-a" to = "/productos">Lista de Productos </NavLink>
					
				
				<a className="item-a" href="#">
					<i className="ph-check-square"></i>
					<span>Tablas</span>
				</a>
				<a className="item-a" href="#">
					<i className="ph-swap"></i>
					<span>Graficos</span>
				</a>
				<a className="item-a" href="#">
					<i className="ph-file-text"></i>
					<span>Finanzas</span>
				</a>
				
			</nav>
			
			<footer className="footer">
				<h1>Cruz<small>©</small></h1>
				<div>
					Cruz ©<br />
					All Rights Reserved 2022
				</div>
			</footer>
		</div>
		
  )
}
