const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  tripname: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
