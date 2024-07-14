const User = require('./schemas/User');

var Username;

mp.events.add('server:regAccount', async (player, usernameReg, passwordReg) => {
  let info = false;

  await User.find({ username: usernameReg }).then(async (res) => {
    const lenght = Number(res.length);
    if (lenght === 0) {
      await User.create({
        username: usernameReg,
        password: passwordReg
      });
    } else if (lenght === 1) info = true;

    player.call('client:regCase', [info]);
  });
});

mp.events.add('server:loginAccount', async (player, username, password) => {
  let info = false;
  let Pos;
  
  try {
    await User.find({ username: username, password: password })
  .then(res => {
    if (res[0] && username === res[0].username) {
      info = true;
      Username = res[0].username;
      Pos = res[0].pos;
    }
    
    if (info === true) player.spawn(new mp.Vector3(Pos.x, Pos.y, Pos.z));
    player.call('client:loginCase', [info]);
  });
  } catch (error) {
    console.log(error);
  }
});

mp.events.add('playerQuit', async (player) => {
  try {
    await User.updateOne({username: Username}, {$set: {pos: player.position}});
  } catch (error) {
    console.log(error);
  }
});

  // if (info === false) {
  //   
  // }

  // player.call('client:regCase', [info]);