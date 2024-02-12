import React, { useState } from "react";

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName && eventDate) {
      addEvent({ name: eventName, date: new Date(eventDate) });
      setEventName("");
      setEventDate("");
    }
  };

  return (
    <form className="form-section"onSubmit={handleSubmit}>
      {console.log(eventDate)}
      <label>
        Event Name:
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </label>
      <label>
        Event Date:
        <input
          className="calender"
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </label>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
