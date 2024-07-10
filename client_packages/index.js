require('./login.js');

mp.events.add('playerReady', () => {
  mp.events.call('client:showLoginScreen');

  // setTimeout(() => {
  //   mp.events.call('client:hideLoginScreen');
  // }, 1400);
});