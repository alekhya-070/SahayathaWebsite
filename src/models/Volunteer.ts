import mongoose, { Schema, model, models } from 'mongoose';

const VolunteerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  skills: String,
  availability: String,
  reason: String,
  createdAt: { type: Date, default: Date.now }
});

export default models.Volunteer || model('Volunteer', VolunteerSchema);