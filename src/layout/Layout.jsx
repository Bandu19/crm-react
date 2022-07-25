import { Outlet } from "react-router-dom";
// MasterPage
export const Layout = () => {
   return (
      <div>
         <h1>Desde Layout.jsx</h1>
         <Outlet />
      </div>
   );
};
