require('./Char/index.js');
require('./dev.js')

mp.events.add('playerReady', () => {
  mp.events.call('char');
});

mp.game.audio.startAudioScene("CHARACTER_CHANGE_IN_SKY_SCENE");