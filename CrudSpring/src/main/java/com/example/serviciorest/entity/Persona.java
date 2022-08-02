package com.example.serviciorest.entity;


import lombok.Data;

import javax.persistence.*;
@Entity
@Data
// Esto se refiere a la Tabla de la Base de Datos
@Table(name="persona")

public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pcvepersona;
    private String pnombre;
    private String papellidop;
    private String papellidom;
    private Integer pedad;
    private String ptelefono;
    private Boolean pcompletado;

}
