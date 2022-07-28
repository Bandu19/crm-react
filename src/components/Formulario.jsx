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

      papellidop: Yup.string()
         .min(2, "El Apellido es muy corto")
         .required("El Apellido paterno es Obligatorio"),

      papellidom: Yup.string()
         .min(2, "El Apellido es muy corto")
         .required("El Apellido materno es Obligatorio"),

      pedad: Yup.number()

         .required("La Edad es Obligatoria")
         // no funciona hay que checar
         .integer("Edad no válido")
         .min(1, "selecciona un valor mas de 1")
         .max(100, "selecciona un valor menor que 100")
         // La edad no es valida
         .typeError("La Edad no es valida"),

      ptelefono: Yup.number()
         .integer("Numero no válido")
         .positive("Numero no valido")
         .typeError("El Número no es válido"),
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
               // console.log(errors);
               // console.log(touched);
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
                        {
                           //
                           errors.papellidop && touched.papellidop ? (
                              //
                              <Alerta>{errors.papellidop} </Alerta>
                           ) : //
                           null
                        }
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
                        {
                           //
                           errors.papellidom && touched.papellidom ? (
                              //
                              <Alerta>{errors.papellidom} </Alerta>
                           ) : //
                           null
                        }
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
                        {
                           //
                           errors.pedad && touched.pedad ? (
                              //
                              <Alerta>{errors.pedad} </Alerta>
                           ) : //
                           null
                        }
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

                        {
                           //
                           errors.ptelefono && touched.ptelefono ? (
                              //
                              <Alerta>{errors.ptelefono} </Alerta>
                           ) : //
                           null
                        }
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
