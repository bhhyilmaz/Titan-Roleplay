require('./Auth/auth.js');
require('./GUI/gui.js');

mp.events.add('playerReady', () => {
  mp.events.call('client:showLoginScreen');
});