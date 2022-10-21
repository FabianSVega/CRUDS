package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name= "solicitud")
public class Solicitud {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String usuario;
	private int cc;
	private String nombre;
	private String ubicacion;
	private String categoria;
	private String vencimiento;
	
	public Solicitud() {
	}
	
	public Solicitud(String usuario, int cc, String nombre, String ubicacion, String categoria, String vencimiento) {
		super();
		
		this.usuario = usuario;
		this.cc = cc;
		this.nombre = nombre;
		this.ubicacion = ubicacion;
		this.categoria = categoria;
		this.vencimiento = vencimiento;
	}
	
	
	

	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public int getCc() {
		return cc;
	}
	public void setCc(int cc) {
		this.cc = cc;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getUbicacion() {
		return ubicacion;
	}
	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getVencimiento() {
		return vencimiento;
	}
	public void setVencimiento(String vencimiento) {
		this.vencimiento = vencimiento;
	}

	
	
	
	
	
}
