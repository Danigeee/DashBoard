import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../App.css';
import {getApi} from "../helpers/getApi"

export const Card = ({icono,titulo,dato}) => {
    
   
    
  return (
    <article className= "tile">
      <div className= "tile-header">
        {icono}
        <h3> {titulo}  </h3>
        <h4 className="data-number">{dato}</h4>

      </div>

      
            
    </article>
  );
};
