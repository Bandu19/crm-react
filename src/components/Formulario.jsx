import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Alerta } from "./Alerta";

export const Formulario = () => {
   // Utilizando Yup
   const nuevoClienteShema = Yup.object().shape({
      pnombre: Yup.string()
         .min(4, "El Nombre es muy corto")
         .max(20, "El Nombre es muy largo")
         .required("El Nombre de la Persona es Obligatorio"),
   });

   const handleSubmit = (valores) => {
      // Enviar datos a la API dentro de esta funcion.
      console.log(valores);
   };
   return (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
         <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
            Agregar Persona
         </h1>

         <Formik
            initialValues={{
               pnombre: "",
               papellidop: "",
               papellidom: "",
               pedad: "",
               ptelefono: "",
            }}
            onSubmit={(values) => {
               handleSubmit(values);
            }}
            validationSchema={nuevoClienteShema}
         >
            {/* Errors es parte de la propiedad que damos a la hora de  */}
            {({ errors, touched }) => {
               console.log(errors);
               console.log(touched);
               return (
                  <Form className="mt-5">
                     {/*Primer Campo  */}
                     <div className="mb-4">
                        <label className="text-gray-900" htmlFor="nombre">
                           Nombre:
                        </label>
                        <Field
                           id="nombre"
                           type="text"
                           className="mt-2 block w-full p-3 bg-gray-200"
                           placeholder="Nombre de la persona"
                           name="pnombre"
                        />

                        {
                           // Esto se ocupa para darle estilos css/tailwind para los campos obligatorios
                           errors.pnombre && touched.pnombre ? (
                              <Alerta>{errors.pnombre} </Alerta>
                           ) : null
                        }
                        {/* <ErrorMessage name="pnombre" />//Este es un ejemplo de utilizar una propiedad de formik */}
                     </div>
                     {/*Segundo Campo */}
                     <div className="mb-4">
                        <label className="text-gray-900" htmlFor="apellidop">
                           Apellido paterno:
                        </label>
                        <Field
                           id="apellidop"
                           type="text"
                           className="mt-2 block w-full p-3 bg-gray-200"
                           placeholder="Primer apellido de la persona"
                           name="papellidop"
                        />
                     </div>

                     {/*Tercer Campo*/}

                     <div className="mb-4">
                        <label className="text-gray-900" htmlFor="apellidom">
                           Apellido materno:
                        </label>
                        <Field
                           id="apellidom"
                           type="text"
                           className="mt-2 block w-full p-3 bg-gray-200"
                           placeholder="Segundo apellido de la persona"
                           name="papellidom"
                        />
                     </div>
                     {/*Cuarto Campo*/}

                     <div className="mb-4">
                        <label className="text-gray-900" htmlFor="edad">
                           Edad:
                        </label>
                        <Field
                           id="edad"
                           type="number"
                           className="mt-2 block w-full p-3 bg-gray-200"
                           placeholder="Edad de la persona"
                           min="0"
                           max="100"
                           name="pedad"
                        />
                     </div>
                     {/*Quinto Campo*/}

                     <div className="mb-4">
                        <label className="text-gray-900" htmlFor="telefono">
                           Telefono:
                        </label>
                        <Field
                           id="telefono"
                           type="tel"
                           className="mt-2 block w-full p-3 bg-gray-200"
                           placeholder="Numero de Telefono de la persona"
                           name="ptelefono"
                        />
                     </div>

                     <input
                        type="submit"
                        value="Agregar Cliente"
                        className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                     />
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};
