const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://blaine:123659@ragemp.tk5xboo.mongodb.net/MyRageDB');

const userSchema = new Schema
(
  {
    username: String,
    password: String,
    created_at: {
        type: String,
        default: () => moment().format('L')
      },
    pos: {
      x: {
        type: Number,
        default: -10
      },
      y: {
        type: Number,
        default: 5
      },
      z: {
        type: Number,
        default: 70
      }
    },
    log: [{ 
      type: String,
      default: "Log tanımlandı."
    }]
  },
  {
     versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;