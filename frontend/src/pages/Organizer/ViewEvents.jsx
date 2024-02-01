import React, { useState, useEffect } from 'react';
import Sidenav from '../../componentes/compOrganizer/Sidenav';
import Box from '@mui/material/Box';
import NavBar from '../../componentes/compOrganizer/NavBar';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ViewEvents() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await axios.get('http://localhost:8000/events/api/v2/event/');
    setEvents(response.data);
  };

  const handleEdit = (eventId) => {
    // Implemente a lógica de edição aqui, redirecione para a página de edição ou exiba um modal de edição.
    console.log(`Editar evento com ID ${eventId}`);
  };

  const handleDelete = async (eventId) => {
    // Implement logic for deletion here
    // You might want to show a confirmation dialog before deleting
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    
    if (confirmDelete) {
      try {
        // Send a request to delete the event
        await axios.delete('http://localhost:8000/events/api/v2/event/${eventId}');
        // Update the events list after deletion
        getEvents();
        console.log(`Event with ID ${eventId} deleted successfully`);
      } catch (error) {
        console.error(`Error deleting event with ID ${eventId}:`, error);
      }
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <NavBar />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
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
                <TableCell sx={{ fontWeight: 'bold' }}>Data de Encerramento</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Local</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Ações</TableCell> {/* Nova coluna para ações */}
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((eventt) => (
                <TableRow key={eventt.id}>
                  <TableCell>{eventt.title}</TableCell>
                  <TableCell>{eventt.description}</TableCell>
                  <TableCell>{eventt.start_date}</TableCell>
                  <TableCell>{eventt.end_date}</TableCell>
                  <TableCell>{eventt.location}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleEdit(eventt.id)}>
                      Editar
                    </Button>
                    <Button variant="outlined" onClick={() => handleDelete(eventt.id)}>
                      Excluir
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  );
}
