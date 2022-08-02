import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Alerta } from "./Alerta";
import { Spinner } from "./Spinner";

const Formulario = ({ persona, cargando }) => {
   // Importando useNavigate

   const navigate = useNavigate();

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
         .integer("Solo numeros enteros")
         .min(1, "selecciona un valor mas de 1")
         .max(100, "selecciona un valor menor que 100")
         //El typeError sirve para editar el mensaje por default
         .typeError("La Edad no es valida"),

      ptelefono: Yup.number()
         .integer("Numero no válido")
         .positive("Numero no valido")
         .typeError("El Número no es válido"),
   });

   const handleSubmit = async (valores) => {
      // Enviar datos a la API dentro de esta funcion.
      // console.log(valores);

      try {
         let respuesta;
         if (persona.pcvepersona) {
            // Editando un nuevo registro
            console.log(persona.pcvepersona + " EDITO");
            const url = `http://localhost:8080/Persona/updatePerson/${persona.pcvepersona}`;
            respuesta = await fetch(url, {
               method: "PUT",
               body: JSON.stringify(valores),
               headers: {
                  "Content-Type": "application/json",
               },
            });
         } else {
            console.log("NUEVO");
            // Nuevo Registro
            const url = "http://localhost:8080/Persona/guardaPersona";
            respuesta = await fetch(url, {
               method: "POST",
               body: JSON.stringify(valores),
               headers: {
                  "Content-Type": "application/json",
               },
            });
            // Para checar el estado de tu API
            // console.log(respuesta); IMPORTANTE
            // const resultado = await respuesta.json();
            // console.log(resultado); IMPORTANTE
         }
         await respuesta.json();
         navigate("/clientes");
         return;
      } catch (error) {
         console.log(error);
      }
   };
   return (
      //
      cargando ? (
         <Spinner />
      ) : (
         <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
               {persona?.pnombre ? "Editar Persona" : "Agregar Persona"}
            </h1>

            <Formik
               initialValues={{
                  pcvepersona: persona?.pcvepersona ?? "",
                  pnombre: persona?.pnombre ?? "", // persona.pnombre ? persona.pnombre :  "";
                  papellidop: persona?.papellidop ?? "",
                  papellidom: persona?.papellidom ?? "",
                  pedad: persona?.pedad ?? "",
                  ptelefono: persona?.ptelefono ?? "",
               }}
               enableReinitialize={true}
               // Dentro de este metodo de onSubmit hace que se se envien los datos(API).
               // El resetForm hace que se resetea el formulario que tenemos en Formik
               onSubmit={async (values, { resetForm }) => {
                  await handleSubmit(values);

                  resetForm();
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
                              type="text"
                              className="mt-2 block w-full p-3 bg-gray-200"
                              placeholder="Edad de la persona"
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
                           value={persona?.pnombre ? "Editar Cliente" : "Agregar Cliente"}
                           className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                        />
                     </Form>
                  );
               }}
            </Formik>
         </div>
      )
   );
};

Formulario.defaultProps = {
   persona: {},
   cargando: false,
};

export { Formulario };
