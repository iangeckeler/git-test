// require mongoose
var mongoose = require('mongoose');
// make schema method
var Schema = mongoose.Schema;
//create schema
var challengeSchema = new Schema(
  {
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    partners: [{type: Schema.Types.ObjectId, ref: 'User'}],
    title: String,
    goal: Number,
    unit: String,
    challenge_length: Number,
    data: Array
  }
);

var Challenge = mongoose.model('Challenge',challengeSchema)

//Export model
module.exports = mongoose.model('Challenge', challengeSchema);
