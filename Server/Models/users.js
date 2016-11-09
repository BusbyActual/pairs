var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  fullname : {
    type:String,
    require: true,
    index:{ unique:true }
  },
  pairs: {},
  flags: [],
  interests: []
});


module.exports = mongoose.model('User',UserSchema);