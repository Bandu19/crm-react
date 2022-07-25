import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import { EditarCliente, Inicio, NuevoCliente } from "./paginas";
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
            </Route>
         </Routes>
      </>
   );
}

export default App;
