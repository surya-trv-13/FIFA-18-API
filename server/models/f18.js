var mongoose = require('mongoose');

var F18 = mongoose.model('F18', {
  _id: { type: Number, required: true },
  Rank: { type: Number, required: true },
  ID: { type: Number, required: true },
  Name: { type: String, required: true },
  Age: { type: Number, required: true },
  Photo: { type: String, required: true },
  Nationality: { type: String, required: true },
  Flag: { type: String, required: true },
  Overall: { type: Number, required: true },
  Potential: { type: Number, required: true },
  Club: { type: String, required: true },
  Club_Logo: { type: String, required: true },
  Value: { type: String, required: true },
  Wage: { type: String, required: true },
  Special: { type: Number, required: true },
  Acceleration: { type: Number },
  Aggression: { type: Number },
  Agility: { type: Number },
  Balance: { type: Number },
  Ball_control: { type: Number },
  Composure: { type: Number },
  Crossing: { type: Number },
  Curve: { type: Number },
  Dribbling: { type: Number },
  Finishing: { type: Number },
  Free_kick_accuracy: { type: Number },
  GK_diving: { type: Number },
  GK_handling: { type: Number },
  GK_kicking: { type: Number },
  GK_positioning: { type: Number },
  GK_reflexes: { type: Number },
  Heading_accuracy: { type: Number },
  Jumping: { type: Number },
  Long_passing: { type: Number },
  Long_shots: { type: Number },
  Marking: { type: Number },
  Penalties: { type: Number },
  Positioning: { type: Number },
  Reactions: { type: Number },
  Short_passing: { type: Number },
  Shot_power: { type: Number },
  Sliding_tackle: { type: Number },
  Sprint_speed: { type: Number },
  Stamina: { type: Number },
  Standing_tackle: { type: Number },
  Strength: { type: Number },
  Vision: { type: Number },
  Volleys: { type: Number },
  Acceleration: { type: Number },
  CAM: {type: Number},
  CB: {type: Number},
  CDM: {type: Number},
  CF: {type: Number},
  CM: {type: Number},
  ID: {type: Number},
  LAM: {type: Number},
  LB: {type: Number},
  LCB: {type: Number},
  LCM: {type: Number},
  LDM: {type: Number},
  LF: {type: Number},
  LM: {type: Number},
  LS: {type: Number},
  LW: {type: Number},
  LWB: {type: Number},
  Preffered_Positions: {type: String},
  RAM: {type: Number},
  RB: {type: Number},
  RCB: {type: Number},
  RCM: {type: Number},
  RDM: {type: Number},
  RF: {type: Number},
  RM: {type: Number},
  RS: {type: Number},
  RW: {type: Number},
  RM: {type: Number},
  ST: {type: Number}
  });

module.exports = {F18}