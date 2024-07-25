require('./dev.js');
require('./char.js');

mp.events.add('playAnimation::server', (player) => {
    player.playAnimation('misshair_shop@barbers', 'idle_a_cam', 1, 2);
});