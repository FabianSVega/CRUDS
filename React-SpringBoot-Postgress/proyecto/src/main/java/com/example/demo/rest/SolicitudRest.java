package com.example.demo.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Solicitud;
import com.example.demo.service.SolicitudService;


@RestController
@RequestMapping("/solicitud/")
@CrossOrigin
public class SolicitudRest {
	
	@Autowired
	private SolicitudService solicitudService;
	
	@GetMapping
	private ResponseEntity<List<Solicitud>>getAllSolicitud(){
		return ResponseEntity.ok(solicitudService.findAll());
		}
	
	
}
