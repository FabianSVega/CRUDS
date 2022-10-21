package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Solicitud;

public interface SolicitudRepository extends JpaRepository<Solicitud, Long>{

}
