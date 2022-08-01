import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components";

export const VerCliente = () => {
   // Llenar con un objeto vacio.
   const [personas, setPersonas] = useState({});

   const [cargando, setCargando] = useState(true);

   const { pcvepersona, pnombre, papellidop, papellidom, pedad, ptelefono } = personas;

   const { id } = useParams();

   //    console.log(params);

   useEffect(() => {
      const obtenerClienteAPI = async () => {
         try {
            const url = `http://localhost:8080/Persona/getOne/${id}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            // console.log(resultado);
            setPersonas(resultado);
         } catch (error) {
            console.log(error);
         }
         setTimeout(() => {
            setCargando(!cargando);
         }, 2000);
      };
      obtenerClienteAPI();
   }, []);

   console.log(cargando);

   return (
      //
      cargando ? (
         <Spinner />
      ) : Object.keys(personas).length == 15 ? (
         <p>No Hay Resultados</p>
      ) : (
         <div>
            <h1 className="font-black text-4xl text-blue-900">Ver Persona: {pnombre}</h1>
            <p className="mt-3">Informacion de la Persona</p>

            <p className="text-4xl text-gray-500 mt-10">
               <span className="text-gray-800 uppercase font-bold">Id: </span>
               {pcvepersona}
            </p>
            {pnombre && (
               <p className="text-2xl text-gray-500 mt-4">
                  <span className="text-gray-800 uppercase font-bold">Nombre: </span>
                  {pnombre}
               </p>
            )}

            {papellidop && (
               <p className="text-2xl text-gray-500 mt-4">
                  <span className="text-gray-800 uppercase font-bold">
                     Apellido Paterno:
                  </span>
                  {papellidop}
               </p>
            )}

            {papellidom && (
               <p className="text-2xl text-gray-500 mt-4">
                  <span className="text-gray-800 uppercase font-bold">
                     Apellido Materno:
                  </span>
                  {papellidom}
               </p>
            )}

            {pedad && (
               <p className="text-2xl text-gray-500 mt-4">
                  <span className="text-gray-800 uppercase font-bold">Edad: </span>
                  {pedad}
               </p>
            )}

            {
               /** Condicion para que si el usuario colo ese campo, se muestre y si no pues no se
                *  muestra.
                */
               ptelefono && (
                  <p className="text-2xl text-gray-500 mt-4">
                     <span className="text-gray-800 uppercase font-bold">Telefono: </span>
                     {ptelefono}
                  </p>
               )
            }
         </div>
      )
   );
};
