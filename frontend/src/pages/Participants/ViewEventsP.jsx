import React,{useState, useEffect} from 'react';
import Link from '@mui/material/Link';
import SidenavParticipants from '../../componentes/compParticipants/SidenavParticipants';
import Box from '@mui/material/Box';
import NavBar from '../../componentes/compParticipants/NavBar';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

 

export default function ViewEventsP() {

  const [events, setEvents] = useState([])

  const getEvents = async () => {
    const response = await axios.get('http://localhost:8000/events/api/v2/event/')
    setEvents(response.data)
  }

  useEffect(()=>{
    getEvents(); 
  }, [])
  return (
  <>
    <NavBar />
    <Box height={50} />
    <Box sx={{ display: 'flex' }}>
      <SidenavParticipants />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
       Eventos
      </Typography>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Titulo</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Descrição</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Data de Inicio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((eventt, index) => (
                <TableRow key={index}>
                  <TableCell>
                  <Link href="/event-detail">{eventt.title}</Link>
                  </TableCell>
                  <TableCell>{eventt.description}</TableCell>
                  <TableCell>{eventt.start_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
     </Box> 
  </Box>
  </>
  )
}
