import React from 'react'
import { AppRuter } from '../routes/AppRuter'
import { Card } from './Card'
import { MainApp } from './MainApp'
import '../App.css';


export const App = () => {
  return (
    <>
    <MainApp />
    <AppRuter />
    </>
  )
}
