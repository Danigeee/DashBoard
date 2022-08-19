import React from 'react'
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { DashBoardPage } from '../pages/DashBoardPage';
import { ListaProductos } from '../pages/ListaProductos';

export const AppRuter = () => {
  return (
    <Routes>
        <Route path='/' element={<DashBoardPage />} />
        <Route path='/productos' element={<ListaProductos />} />
    </Routes>
  )
}
