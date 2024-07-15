require('./Auth/auth.js');
require('./GUI/gui.js');

mp.events.add('playerReady', () => {
  // mp.events.call('client:showLoginScreen');
  mp.events.call('client:gui');
});

// mp.events.add("playerSpawn", () => {
//   mp.events.call('client:gui');
// });