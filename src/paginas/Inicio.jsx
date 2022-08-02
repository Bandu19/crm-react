import { useEffect, useState } from "react";
import { ListaPersonas } from "../components";

export const Inicio = () => {
   const [personas, setPersonas] = useState([]);
   useEffect(() => {
      // Hacer Asincrono
      const obtenerPersonasAPI = async () => {
         try {
            const url = "http://localhost:8080/Persona/getAll";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            setPersonas(resultado);

            // console.log(resultado); Muestra tu objeto.
         } catch (error) {
            console.log(error);
         }
      };
      obtenerPersonasAPI();
   }, []);

   const handleEliminar = async (id) => {
      // console.log("Eliminando...", id);
      const confirmar = confirm("¿Deseas eliminar esta persona?");
      if (confirmar) {
         try {
            const url = `http://localhost:8080/Persona/eliminarPersona/${id}`;
            const respuesta = await fetch(url, {
               method: "DELETE",
            });

            await respuesta.json();
            const arrayPersonas = personas.filter((persona) => persona.pcvepersona !== id);

            setPersonas(arrayPersonas);

            // RECARGA AUTOMATICAMENTE una vez que aplica el link
            // location.reload();
         } catch (error) {
            console.log(error);
         }
      }
   };

   return (
      <>
         <h1 className="font-black text-4xl text-blue-900">Personas</h1>
         <p className="mt-3">Administra tus Lista de Personas</p>

         <table className="w-full mt-5 table-auto shadow bg-white">
            <thead className="bg-blue-800 text-white">
               <tr className="p-2">
                  <th className="p-2">Id</th>
                  <th className="p-2">Nombre</th>
                  <th className="p-2">Apellido Paterno</th>
                  <th className="p-2">Apellido Materno</th>
                  <th className="p-2">Edad</th>
                  <th className="p-2">Telefono</th>
                  <th className="p-2">Acciones</th>
               </tr>
            </thead>

            <tbody>
               {personas.map((cliente) => (
                  <ListaPersonas
                     key={cliente.pcvepersona}
                     cliente={cliente}
                     handleEliminar={handleEliminar}
                  />
               ))}
            </tbody>
         </table>
      </>
   );
};
