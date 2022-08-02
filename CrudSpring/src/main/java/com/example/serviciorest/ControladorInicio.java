package com.example.serviciorest;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Prueba")

public class ControladorInicio {

        @GetMapping("/hola")
            public String hola(){
            return "Hola Mundo";
        }


}
