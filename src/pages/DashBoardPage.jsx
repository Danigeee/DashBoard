import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import '../App.css';
import { NavBarr } from '../components/NavBarr';
import { ListaUsuarios } from '../components/ListaUsuarios';
import { ListaProductos } from '../components/ListaProductos';

export const DashBoardPage = () => {
    const iconoProducto =  <ion-icon name="bag-outline"></ion-icon>;
    const iconoCategorias = <ion-icon name="bookmarks-outline"></ion-icon>;
    const iconoUsuarios = <ion-icon name="person-circle-outline"></ion-icon>;

    const[productos, setProductos] = useState({countByCategory: [], data: []});
    const[usuarios, setUsuarios] = useState({data: []});

   useEffect(() => {
    // getApi()
    // .then(products => setProductos(products))
    //     console.log("productos" , productos);
    fetch("http://localhost:3030/api/productos")
    .then(res => res.json())
    .then(data =>{
      
      setProductos(data)

    })
    .catch(error => console.log("error en promise de productos"))
   }, [])

   useEffect(() => {
    fetch("http://localhost:3030/api/usuarios")
    .then(res => res.json())
    .then(data =>{
      
      setUsuarios(data)
    })
    .catch(error => console.log("error"))
   }, [])

    
    return (
    
      <div className='page-main'>
  
        <section className= "tiles">
        
            <Card titulo = {"Total de Usuarios"} icono = {iconoUsuarios} dato = {usuarios.count} />
            <Card titulo = {"Total de Productos"} icono = {iconoProducto} dato = {productos.count} />
            <Card titulo = {"Total de Categorias"} icono = {iconoCategorias} dato = {productos.countByCategory.length}/>
  
        </section>
  
        <section className='lista-contenedor'>
  
        <ListaUsuarios titulo = {"Ultimos Usuarios creados"} data = {usuarios.data}/>
        <ListaProductos titulo = {"Lista de categorias"} data = {productos.countByCategory}/>
  
        </section>
  
      </div>
      
    )

   
   
   

  
  
}
