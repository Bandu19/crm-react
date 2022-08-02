package com.example.serviciorest.Dao;

import com.example.serviciorest.entity.Persona;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonaDao extends CrudRepository<Persona,Integer> {

    public List<Persona> findTop10ByOrderByPcvepersonaAsc();
}
