const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName:{type: String},
  city:{type: String},
  tse:{type: Number},
  actualSpend:{type: Number},
  siteLead:{type: String},
  quarter:{type: Number}
  // creator:{
  //   type: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  // }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;