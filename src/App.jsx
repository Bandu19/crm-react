import { Routes, Route } from "react-router-dom";
import { IniciarSesion, Layout } from "./layout";
import { Inicio, LoginForm } from "./paginas";
function App() {
   return (
      <>
         <Routes>
            {/*  Ruta Anidada*/}
            <Route path="/" element={<IniciarSesion />}>
               <Route index element={<LoginForm />} />
            </Route>
            {/*  Ruta Anidada*/}
            <Route path="/cliente" element={<Layout />}>
               <Route index element={<Inicio />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
