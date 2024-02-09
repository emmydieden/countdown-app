import mongoose from "mongoose";

const { Schema } = mongoose;

export const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      }
});

export const EventModel = mongoose.model("Event", eventSchema);