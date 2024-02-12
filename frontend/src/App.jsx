//App.jsx
import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/Eventlist';


const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from your backend when the component mounts
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events'); // Replace with your backend URL
       
        const data = await response.json();
        console.log(data)
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);



  const addEvent = async (event) => {
    try {
      // Send a POST request to add a new event
      const response = await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      const newEvent = await response.json();
      setEvents([...events, newEvent]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const deleteEvent = async (id) => {
    try {
      console.log('Deleting event with ID:', id);
      await fetch(`http://localhost:3000/events/${id}`, {
        method: 'DELETE',
      });
  
      // Update the events list by removing the deleted event
      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <section className="app-section">
      <h1>Samuel räknar ner!</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} onDeleteEvent={deleteEvent}/>
    </section>
  );
};

export default App;
