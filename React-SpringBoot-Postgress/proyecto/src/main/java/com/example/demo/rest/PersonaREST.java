package com.example.demo.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Persona;
import com.example.demo.service.PersonaService;

public class PersonaREST {
	
	@RestController
	@RequestMapping("/persona/")
	@CrossOrigin
	public class SolicitudRest {
		
		@Autowired
		private PersonaService personaService;
		
		@GetMapping
		private ResponseEntity<List<Persona>>getAllSolicitud(){
			return ResponseEntity.ok(personaService.findAll());
			}
		
		
	}

}

