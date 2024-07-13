var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blaine:123659@ragemp.tk5xboo.mongodb.net/MyRageDB');
const { Schema } = mongoose;
const userSchema = new Schema
(
  {
    username: String,
    password: String,
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
    }
  },
  {
     versionKey: false,
  }
);
const User = mongoose.model('User', userSchema);
var Username;

mp.events.add('server:loginAccount', async (player, username, password) => {
  let info = false;
  let Pos;
  
  await User.find({ username: username, password: password })
  .then(user => {
    if (user[0]) if (username = user[0].username) {
      info = true;
      Username = user[0].username;
      Pos = user[0].pos;
    }
    
    if (info === true) player.spawn(new mp.Vector3(Pos.x, Pos.y, Pos.z));
    player.call('client:loginCase', [info]);
  });
});

mp.events.add('server:regAccount', async (player, usernameReg, passwordReg) => {
  await User.create({
    username: usernameReg,
    password: passwordReg
  });
});

mp.events.add('playerQuit', async (player) => {
  await User.updateOne({username: Username}, {$set: {pos: player.position}});
});