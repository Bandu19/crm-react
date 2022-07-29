import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import { EditarCliente, Inicio, NuevoCliente, VerCliente } from "./paginas";
function App() {
   return (
      <>
         <Routes>
            {/*  Ruta Anidada*/}
            <Route path="/clientes" element={<Layout />}>
               {/* Outlet para el index */}
               <Route index element={<Inicio />} />
               <Route path="nuevo" element={<NuevoCliente />} />
               <Route path="editar/:id" element={<EditarCliente />} />
               {/* Nunca Meter espacios dentro de un path */}
               <Route path=":id" element={<VerCliente />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
