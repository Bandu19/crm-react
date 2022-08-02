package com.example.serviciorest.Service;

import com.example.serviciorest.entity.Persona;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PersonaService {

    public List<Persona> listarPersonas();

    public Persona guardarPersona (Persona persona);

    public void eliminarPersona(Integer persona);

    public Persona encontrarId(Integer persona);

}
