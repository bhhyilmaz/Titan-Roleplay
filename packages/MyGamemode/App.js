const { v4: uuidv4 } = require('uuid');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://blaine:123659@ragemp.tk5xboo.mongodb.net/MyRageDB');

const { Schema } = mongoose;

const userSchema = new Schema
(
  {
    username: String,
    password: String,
  },
  {
     versionKey: false,
     _id: uuidv4()
  }
);

const User = mongoose.model('User', userSchema);

mp.events.add('server:loginAccount', (player, username, password) => {
      User.create({
        username: username,
        password: password
      });
});