import React from "react";

// Reutiliza Todo lo que tenemos en Formulario
export const Alerta = ({ children }) => {
   return (
      <div
         className="text-center my-4 bg-red-600 text-white 
                    font-bold p-3 uppercase"
      >
         {/* {errors.pnombre} */}
         {children}
      </div>
   );
};
