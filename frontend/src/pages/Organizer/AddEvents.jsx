import React, {useState} from 'react';
import NavBar from '../../componentes/compOrganizer/NavBar';
import Sidenav from '../../componentes/compOrganizer/Sidenav';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';


export default function AddEvents() {

  const [title, setTitle] = useState("")
  const [start_date, setStartDate] = useState("")
  const [end_date, setEndDate] = useState("")
  const [location, setLocation] = useState("")
  const [moderator, setModerator] = useState("")
  const [speakers, setSpeaker] = useState([])
  const [description, setDescription] = useState("")

  const navigate = useNavigate ();


  const AddEventInfo = async () => {
    let formField = new FormData()

    formField.append('title', title)
    formField.append('start_date', start_date)
    formField.append('end_date', end_date)
    formField.append('location', location)
    formField.append('moderator', moderator)
    formField.append('speakers', speakers)
    formField.append('description', description)

    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/events/api/v2/event/',
        data: formField
      });
  
      console.log(response.data);
      navigate.push('/view-events');
    } catch (error) {
      if (error.response) {
        // A solicitação foi feita e o servidor respondeu com um código de status diferente de 2xx
        console.error('Erro de resposta do servidor:', error.response.data);
        console.error('Status do erro:', error.response.status);
        console.error('Cabeçalhos da resposta:', error.response.headers);
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.error('Sem resposta do servidor:', error.request);
      } else {
        // Algo aconteceu na configuração da solicitação que desencadeou um erro
        console.error('Erro durante a configuração da solicitação:', error.message);
      }
      console.error('Erro completo:', error.config);
    }

  }
  
  return (
    <>
    <NavBar />
    <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box height={30} />

        <div className='container'> 
          <h1>Novo evento</h1>

          <div className='form-group'>

            <div className='form-group'> 
                <input   
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Insira o titulo do evento'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            
            </div>

            <div className='form-group'> 
                <input   
                    type='datetime-local'
                    className='form-control form-control-lg'
                    placeholder='Insira data e hora de inicio'
                    name='start_date'
                    value={start_date}
                    onChange={(e) => setStartDate(e.target.value)}
                />  
            </div>
             <div className='form-group'>
                <input   
                    type='datetime-local'
                    className='form-control form-control-lg'
                    placeholder='Insira data e hora de inicio'
                    name='end_date'
                    value={end_date}
                    onChange={(e) => setEndDate(e.target.value)}
                />  
              </div> 
              <div className='form-group'>
                 <input   
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Insira o local do evento'
                    name='location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />  
               </div> 
              
              <div className='form-group'>
                  <textarea   
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Descreva o evento'
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    /> 

              </div>
                
              <div className='form-group'> 
                  <input   
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Insira o Moderador do evento'
                        name='moderator'
                        value={moderator}
                        onChange={(e) => setModerator(e.target.value)}
                    /> 
              </div>
               <div className='form-group'>
                  <input   
                        type='text'
                        className='form-control form-control-lg'
                        placeholder='Insira o Orador do evento'
                        name='speakers'
                        value={speakers}
                        onChange={(e) => setSpeaker(e.target.value)}
                    /> 
               </div>
               <Button variant="contained" endIcon={<CreateIcon />} onClick={AddEventInfo} > 
               Criar Evento
               </Button>
            </div>  
        </div>
        </Box>
      </Box>
      
    </>
    
  )
}

