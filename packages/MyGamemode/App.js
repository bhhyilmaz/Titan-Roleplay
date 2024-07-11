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
  }
);
const User = mongoose.model('User', userSchema);

mp.events.add('server:loginAccount', (player, username, password) => {
  info = true;

  player.call('client:loginHandler', [info]);

  if (info = true) player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
});

mp.events.add('server:regAccount', (player, usernameReg, passwordReg) => {
  console.log("hesap olusturuldu:" + usernameReg, passwordReg)
  User.create({
    username: usernameReg,
    password: passwordReg
  });
});
