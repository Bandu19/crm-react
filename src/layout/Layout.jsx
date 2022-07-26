import { Link, Outlet, useLocation } from "react-router-dom";

// MasterPage
export const Layout = () => {
   const location = useLocation();

   // console.log(location);

   const urlActual = location.pathname;

   return (
      <div className="md:flex md:min-h-screen">
         <div className="md:w-1/4 bg-blue-900 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white ">CRUD-Persona</h2>

            {/*Utilizar Navlink para ocupar en el hosting  */}
            <nav className="mt-10">
               <Link
                  className={`${urlActual === "/clientes" ? "text-blue-300" : "text-white"}
                  text-2xl block mt-2 hover:text-blue-300`}
                  to="/clientes"
               >
                  Persona
               </Link>
               <Link
                  className={`${
                     urlActual === "/clientes/nuevo" ? "text-blue-300" : "text-white"
                  } 
                  text-2xl block mt-2 hover:text-blue-300`}
                  to="/clientes/nuevo"
               >
                  Nueva Persona
               </Link>
            </nav>
         </div>

         <div className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet />
         </div>
      </div>
   );
};
