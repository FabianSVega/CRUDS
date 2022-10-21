import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Login() {
    const paperstyle ={padding:'50px 20px', width:600, margin:"20px auto"}
    const[documento,setDocu]=useState('');
    const[contraseña,setContr]=useState('');
    const [age, setAge] = React.useState('');

    const handleClick=(e)=>{
        e.preventDefault();
        const data={documento,contraseña};
        console.log(data)
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
  return (
    <Container>
        <Paper elevation={3} style={paperstyle}>
            <h1 style={{color:"blue"}}>Inicio de sesión</h1>
            <p>¿No tines una cuenta?  <u style={{color:"blue"}}>Registrar nuevo usuario</u></p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
    
        <FormControl sx={{ m: 1, minWidth: 400 }}>
            <InputLabel id="demo-simple-select-helper-label">Tipo de Documento</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Tipo de Documento"
            onChange={handleChange}
            >
            
            <MenuItem value={1}>C.C</MenuItem>
            <MenuItem value={2}>T.E</MenuItem>
            <MenuItem value={3}>Passpaort</MenuItem>
            </Select>
        </FormControl>

        <TextField
          required
          id="outlined-required"
          label="Documento"
          sx={{ m: 1, minWidth: 400 }}
          value={documento}
          onChange={(e)=>setDocu(e.target.value)} 
         
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ m: 1, minWidth: 400 }}
          value={contraseña} 
          onChange={(e)=>setContr(e.target.value)}

        />
        <Button variant="contained" onClick={handleClick}>Ingresar</Button>
    </Box>
    {documento}
    {contraseña}
    </Paper>
    </Container>
  );
}
