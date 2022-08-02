package com.example.serviciorest.ServiceImpl;

import com.example.serviciorest.Dao.PersonaDao;
import com.example.serviciorest.Service.PersonaService;
import com.example.serviciorest.entity.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImplement implements PersonaService {

    @Autowired
    private PersonaDao personaDao;


    @Override
    public List<Persona> listarPersonas() {
        return (List<Persona>) personaDao.findTop10ByOrderByPcvepersonaAsc();
    }

    @Override
    public Persona guardarPersona(Persona persona) {
        return personaDao.save(persona);

    }

    @Override
    public void eliminarPersona(Integer persona) {
       personaDao.deleteById(persona);
    }

    @Override
    //Encuentra por ID
    public Persona encontrarId(Integer persona) {
        return personaDao.findById(persona).get();
    }
}
