import { Outlet } from "react-router-dom";
// MasterPage
export const Layout = () => {
   return (
      <div className="md:flex md:min-h-screen">
         <div className="md:w-1/4 bg-blue-900 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white ">CRUD-Persona</h2>

            {/*Utilizar Navlink para ocupar en el hosting  */}
            <nav className="mt-10">
               <a
                  className="text-white text-2xl block mt-2 hover:text-blue-300"
                  href="/clientes"
               >
                  Persona
               </a>
               <a
                  className="text-white text-2xl block mt-2 hover:text-blue-300"
                  href="/clientes/nuevo"
               >
                  Nueva Persona
               </a>
            </nav>
         </div>

         <div className="md:w-3/4">
            <Outlet />
         </div>
      </div>
   );
};
