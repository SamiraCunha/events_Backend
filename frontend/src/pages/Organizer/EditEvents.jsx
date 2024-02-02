import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditEvents() {
  const {id} = useParams();
  const [formData, setFormData] = useState({
    id: id,
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=> {
      axios.get('http://127.0.0.1:8000/events/api/v2/event/'+id)
      .then(res =>{
        setFormData({...formData, title: res.data.title, description: res.data.description, 
          start_date: res.data.start_date, end_date: res.data.end_date, location: res.data.location})
      })
      .catch(err => console.log(err))

  }, [])
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/events/api/v2/event/${id}/`, formData)
    .then(res =>{
        navigate('/view-events/')
    })
    .catch(err => console.log(err))
   
  };

  return (
    <>
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" name="title" value={formData.title}  onChange={handleChange} required />
        </label>
        <br />
        <label>
          Descrição:
          <textarea name="description" value={formData.description} onChange={handleChange}  required />
        </label>
        <br />
        <label>
          Data de Início:
          <input type="datetime-local" name="start_date"   value={
      formData.start_date
        ? new Date(formData.start_date).toISOString().slice(0, 16)
        : ''
    } onChange={handleChange} required />
        </label>
        <br />
        <label>
          Data de Término:
          <input type="datetime-local" name="end_date"   value={
      formData.end_date
        ? new Date(formData.end_date).toISOString().slice(0, 16)
        : ''
    } onChange={handleChange} required />
        </label>
        <br />
        <label>
          Localização:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Editar</button>
      </form>
    </>
  )
}

export default EditEvents
