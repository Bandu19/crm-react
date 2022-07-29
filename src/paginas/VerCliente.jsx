import { useParams } from "react-router-dom";

export const VerCliente = () => {
   const params = useParams();

   console.log(params);

   return (
      <div>
         <h1>VerCliente.jsx</h1>
      </div>
   );
};
