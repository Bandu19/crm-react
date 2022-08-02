package com.example.serviciorest.Controller;


import com.example.serviciorest.Service.PersonaService;
import com.example.serviciorest.entity.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;

@RestController
@RequestMapping("Persona")
@CrossOrigin("*")
public class PersonaController {

    @Autowired
    private PersonaService personaService;


    @GetMapping("/getAll")
    public List<Persona> getPersona(){
       return personaService.listarPersonas();
    }
    // Yo lo hice
    @GetMapping("/getOne/{id}")
    public ResponseEntity<Persona> getPersonas(@PathVariable Integer id) {
        Persona obj = personaService.encontrarId(id);
        return new ResponseEntity<Persona>(obj, HttpStatus.OK);
    }

    @PostMapping("/guardaPersona")
    public ResponseEntity<Persona> guardaPersona(@RequestBody Persona persona){
        Persona obj = personaService.guardarPersona(persona);
        return new ResponseEntity<Persona>(obj, HttpStatus.OK);
    }
    // Yo lo hice
    @PutMapping("/updatePerson/{id}")
    public ResponseEntity<Persona> updatePerson(@PathVariable Integer id ,@RequestBody Persona persona) {
        Persona obj = personaService.guardarPersona(persona);
        return new ResponseEntity<Persona>(obj, HttpStatus.OK);
    }


    @DeleteMapping("/eliminarPersona/{id}")
    public ResponseEntity<Persona> eliminarPersona(@PathVariable Integer id){
        Persona persona = personaService.encontrarId(id);
        if (persona != null){
            personaService.eliminarPersona(id);
        } else {
            return  new ResponseEntity<Persona>(persona, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<Persona>(persona,HttpStatus.OK);
    }



}
