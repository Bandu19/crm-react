import React from "react";
import { Outlet } from "react-router-dom";

export const IniciarSesion = () => {
   return (
      <div>
         <h1>Desde IniciarSesion.jsx</h1>
         <Outlet />
      </div>
   );
};
