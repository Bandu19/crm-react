import { Formulario } from "../components/Formulario";

export const NuevoCliente = () => {
   return (
      <>
         <h1 className="font-black text-4xl text-blue-900">Nueva Persona</h1>
         <p className="mt-3">LLena los siguientes campos para registrar una Persona</p>
         <Formulario />
      </>
   );
};
