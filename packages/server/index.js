require('./dev.js');
require('./char.js');

mp.events.add('server/index', (player) => {
    player.stopAnimation();
});