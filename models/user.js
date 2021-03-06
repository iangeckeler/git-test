// require mongoose
var mongoose = require('mongoose');
// make schema method
var Schema = mongoose.Schema;
//create schema
var userSchema = new Schema(
  {
    user_id: {type: String, required: true, max: 100},
    email: String,
    password: {type: String, max: 100},
    challenges: [{type: Schema.Types.ObjectId, ref: 'Challenge'}]
  }
);

var User = mongoose.model('User',userSchema)

//Export model
module.exports = User
