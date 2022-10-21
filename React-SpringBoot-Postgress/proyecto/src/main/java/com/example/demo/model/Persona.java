package com.example.demo.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name= "persona")
public class Persona {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String usuario;
	private int cc;
	
	private String contraseña;
	

	
	public Persona() {
		
	}

	public Persona(String usuario, int cc, String contraseña) {
		super();
		this.usuario = usuario;
		this.cc = cc;
		this.contraseña = contraseña;
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


	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	
	
	

}
