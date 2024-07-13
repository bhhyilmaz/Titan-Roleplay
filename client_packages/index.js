require('./login.js');

mp.events.add('playerJoin', () => {
  mp.events.call('client:showLoginScreen');
});