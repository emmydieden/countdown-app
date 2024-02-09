import express from "express";
const listEndPoints = require("express-list-endpoints");
import { EventModel } from "../models/Event";


const router = express.Router();

// Route to list all the endpoints
router.get("/", async (req, res) => {
  const endpoints = listEndPoints(req.app);
  res.json(endpoints);
});

// API Routes
// Create a new event
router.post('/events', async (req, res) => {
    try {
      const { name, date } = req.body;
      const newEvent = new EventModel({ name, date });
      const savedEvent = await newEvent.save();
      res.json(savedEvent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Get all events
  router.get('/events', async (req, res) => {
    try {
      const events = await EventModel.find();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Delete an event by ID
  router.delete('/events/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await EventModel.findByIdAndDelete(id);
      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;
