import React, {useState} from 'react';
import NavBar from '../../componentes/compOrganizer/NavBar';
import Sidenav from '../../componentes/compOrganizer/Sidenav';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';



export default function AddEvents() {

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/events/api/v2/event/', formData);
      console.log('Evento criado:', response.data);
     
    } catch (error) {
      console.error('Erro ao criar o evento:', error.response.data);
    }
  };
  
  return (
    <>
    <NavBar />
    <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box height={30} />

        <div>
      <h2>Criar Evento</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Descrição:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Data de Início:
          <input type="datetime-local" name="start_date" value={formData.start_date} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Data de Término:
          <input type="datetime-local" name="end_date" value={formData.end_date} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Localização:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Criar Evento</button>
      </form>
    </div>
        </Box>
      </Box>
      
    </>
    
  )
}

