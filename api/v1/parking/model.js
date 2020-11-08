const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  created_at: {
    default: Date.now,
    type: Date,
  },

  sensorId: { type: String },
  value: { type: Number },
  updated_at: {
    default: Date.now,
    type: Number,
  },

});

slotSchema.post('save', async function save(doc, next) {
  try {

    return next();
  } catch (error) {
    return next(error);
  }
});

const model = mongoose.model('parkSlots', slotSchema);
module.exports = model;