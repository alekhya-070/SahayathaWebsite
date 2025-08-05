import mongoose, { Schema, model, models } from 'mongoose';

const DonationSchema = new Schema({
  name: String,
  email: String,
  amount: { type: Number, required: true },
  paymentId: String,
  message: String,
  status: { type: String, default: 'pending' }, // pending, success, failed
  createdAt: { type: Date, default: Date.now }
});

export default models.Donation || model('Donation', DonationSchema);