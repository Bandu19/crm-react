import { useNavigate } from "react-router-dom";

export const ListaPersonas = ({ cliente }) => {
   const navigate = useNavigate();

   // desestructuración del objeto
   const { pcvepersona, pnombre, papellidop, papellidom, pedad, ptelefono } = cliente;

   return (
      <tr className="border-b hover:bg-gray-50 text-center">
         <td className="p-3">{pcvepersona}</td>
         <td className="p-3">{pnombre}</td>
         <td className="p-3">{papellidop}</td>
         <td className="p-3">{papellidom}</td>
         <td className="p-3">{pedad}</td>
         <td className="p-3">{ptelefono}</td>
         <td className="p-3">
            <button
               type="button"
               className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
               onClick={() => navigate(`/clientes/${pcvepersona}`)}
            >
               Ver
            </button>

            <button
               type="button"
               className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
            >
               Editar
            </button>
            <button
               type="button"
               className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
            >
               Eliminar
            </button>
         </td>
      </tr>
   );
};
