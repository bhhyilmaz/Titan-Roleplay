require('./Auth/auth.js');
require('./GUI/gui.js');

mp.events.add('playerReady', () => {
  mp.events.call('client:showLoginScreen');
});

mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");