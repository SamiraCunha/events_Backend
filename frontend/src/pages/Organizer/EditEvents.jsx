import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditEvents() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
  });

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/events/api/v2/event/${eventId}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    getEventDetails();
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      // Send a request to update the event
      await axios.put(`http://localhost:8000/events/api/v2/event/${eventId}`, event);
      console.log(`Event with ID ${eventId} updated successfully`);
      // Redirect to the events page or do something else after updating
    } catch (error) {
      console.error(`Error updating event with ID ${eventId}:`, error);
    }
  };

  return (
    <>
      <h1>Edit Event</h1>
      <form>
        <label>Title:</label>
        <input type="text" name="title" value={event.title} onChange={handleInputChange} />

        <label>Description:</label>
        <textarea name="description" value={event.description} onChange={handleInputChange} />

        <label>Start Date:</label>
        <input type="datetime-local" name="start_date" value={event.start_date} onChange={handleInputChange} />

        <label>End Date:</label>
        <input type="datetime-local" name="end_date" value={event.end_date} onChange={handleInputChange} />

        <label>Location:</label>
        <input type="text" name="location" value={event.location} onChange={handleInputChange} />

        <button type="button" onClick={handleUpdate}>
          Update Event
        </button>
      </form>
    </>
  );
}
