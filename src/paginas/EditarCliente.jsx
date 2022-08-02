import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formulario } from "../components/Formulario";

export const EditarCliente = () => {
   const [persona, setPersona] = useState({});

   const [cargando, setCargando] = useState(true);

   // const { pcvepersona, pnombre, papellidop, papellidom, pedad, ptelefono } = personas;

   const { id } = useParams();

   //    console.log(params);

   useEffect(() => {
      const obtenerClienteAPI = async () => {
         try {
            const url = `http://localhost:8080/Persona/getOne/${id}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            // console.log(resultado);
            setPersona(resultado);
         } catch (error) {
            console.log(error);
         }
         setTimeout(() => {
            setCargando(!cargando);
         }, 1000);
      };
      obtenerClienteAPI();
   }, []);
   return (
      <>
         <h1 className="font-black text-4xl text-blue-900">Editar Persona</h1>
         <p className="mt-3">Utiliza este formulario para editar datos de una Persona</p>
         <Formulario persona={persona} cargando={cargando} />
      </>
   );
};
