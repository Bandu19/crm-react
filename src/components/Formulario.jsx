import React from "react";
import { Formik, Form, Field } from "formik";

export const Formulario = () => {
   return (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
         <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
            Agregar Persona
         </h1>

         <Formik>
            <Form className="mt-5">
               {/*Primer Campo  */}
               <div className="mb-4">
                  <label className="text-gray-900" htmlFor="pnombre">
                     Nombre:
                  </label>
                  <Field
                     id="pnombre"
                     type="text"
                     className="mt-2 block w-full p-3 bg-gray-200"
                     placeholder="Nombre de la persona"
                  />
               </div>
               {/*Segundo Campo */}
               <div className="mb-4">
                  <label className="text-gray-900" htmlFor="papellidop">
                     Apellido paterno:
                  </label>
                  <Field
                     id="papellidop"
                     type="text"
                     className="mt-2 block w-full p-3 bg-gray-200"
                     placeholder="Primer apellido de la persona"
                  />
               </div>

               {/*Tercer Campo*/}

               <div className="mb-4">
                  <label className="text-gray-900" htmlFor="papellidom">
                     Apellido materno:
                  </label>
                  <Field
                     id="papellidom"
                     type="text"
                     className="mt-2 block w-full p-3 bg-gray-200"
                     placeholder="Segundo apellido de la persona"
                  />
               </div>
               {/*Cuarto Campo*/}

               <div className="mb-4">
                  <label className="text-gray-900">Edad:</label>
                  <Field
                     type="number"
                     className="mt-2 block w-full p-3 bg-gray-200"
                     placeholder="Edad de la persona"
                     min="0"
                     max="100"
                  />
               </div>
               {/*Quinto Campo*/}

               <div className="mb-4">
                  <label className="text-gray-900" htmlFor="ptelefono">
                     Telefono:
                  </label>
                  <Field
                     id="ptelefono"
                     type="tel"
                     className="mt-2 block w-full p-3 bg-gray-200"
                     placeholder="Numero de Telefono de la persona"
                  />
               </div>

               <input
                  type="submit"
                  value="Agregar Cliente"
                  className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
               />
            </Form>
         </Formik>
      </div>
   );
};
