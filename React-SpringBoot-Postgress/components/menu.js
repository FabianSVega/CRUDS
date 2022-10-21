import * as React       from 'react';
import {useState}       from 'react';
import { styled }       from '@mui/material/styles';
import Table            from '@mui/material/Table';
import TableBody        from '@mui/material/TableBody';
import TableContainer   from '@mui/material/TableContainer';
import TableHead        from '@mui/material/TableHead';
import TableRow         from '@mui/material/TableRow';
import Paper            from '@mui/material/Paper';
import Button           from '@mui/material/Button';
import InputBase        from '@mui/material/InputBase';
import Divider          from '@mui/material/Divider';
import IconButton       from '@mui/material/IconButton';
import SearchIcon       from '@mui/icons-material/Search';
import InputLabel       from '@mui/material/InputLabel';
import MenuItem         from '@mui/material/MenuItem';
import FormControl      from '@mui/material/FormControl';
import Select           from '@mui/material/Select';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Menu() {
    const[solicitud,setSolici]=React.useState([])
    const paperstyle ={padding:'50px 20px', width:1200, margin:"20px auto"}
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    React.useEffect(()=>{
        fetch("http://localhost:8080/solicitud/")
        .then(res=>res.json())
        .then((result)=>{
         setSolici(result);  
        })
    },[])
    
    
  return (
    <Paper elevation={6} style={paperstyle}>
        <Paper
            component="form"
            sx={{ p: '8px 16px', display: 'flex', alignItems: 'center', width: 600}}>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                
                <div>
                    <h5>Hola Bienvenido <br/>Rol.Usuario</h5>
                    <Button variant="contained">Nueva Solicitud</Button>
                </div>

                <div>
                    <h2>Historial de solicitudes</h2>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Buscar"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        
                    </Paper>
                </div>
                <FormControl sx={{ m: 1, minWidth: 400 }}>
                    <InputLabel id="demo-simple-select-helper-label">Escoger</InputLabel>
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
            
        </Paper>

            
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="right">Solicitud de número</StyledTableCell>
                <StyledTableCell align="right">Número de Documento</StyledTableCell>
                <StyledTableCell align="right">Nombre del solicitante</StyledTableCell>
                <StyledTableCell align="right">Ubicación</StyledTableCell>
                <StyledTableCell align="right">Categorías</StyledTableCell>
                <StyledTableCell align="right">Vencimiento</StyledTableCell>
                <StyledTableCell align="right">Acciones</StyledTableCell>

            </TableRow>
            </TableHead>
            <TableBody>
            {solicitud.map((row) => (
                <StyledTableRow key={row.usuario}>
                <StyledTableCell component="th" scope="row">
                    {row.cc}
                </StyledTableCell>
                <StyledTableCell align="right">{row.cc}</StyledTableCell>
                <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                <StyledTableCell align="right">{row.ubicacion}</StyledTableCell>
                <StyledTableCell align="right">{row.categoria}</StyledTableCell>
                <StyledTableCell align="right">{row.vencimiento}</StyledTableCell>
                <StyledTableCell align="right"><Button variant="contained" >Editar</Button>
                </StyledTableCell>

                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        <u style={{color:"blue"}}>Paginas   1  </u>
        
  </Paper>
  )
}
