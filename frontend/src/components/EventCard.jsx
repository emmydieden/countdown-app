import React from 'react'
import CountdownTimer from './CountdownTimer'

export const EventCard = ({events, handleDelete}) => {
    console.log(events)
    const formatDate = (dateString) => {
        const options = {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
    
        return new Date(dateString).toLocaleDateString("sv-SE", options);
      };
  return (
    <>
     {events.map((event) => (
        
        <div className="event-card"key={event._id}>
          <strong>{event.name}</strong> - {formatDate(event.date)}{' '}
          <CountdownTimer eventDate={event.date} />
          <button onClick={() => handleDelete(event._id)}>Delete</button>
        </div>
      ))}
    </>
  )
}
