mp.events.addCommand("pos", (player) => {
    console.log(`${player.position.x}, ${player.position.y}, ${player.position.z}`);
});

mp.events.addCommand("tp", (player, fullText) => {
    const coords = fullText.split(",").map(coord => parseFloat(coord.trim()));
    player.position = new mp.Vector3(coords[0], coords[1], coords[2]);
});

mp.events.addCommand("car", (player) => {
    const pos = player.position;
	mp.vehicles.new("thruster", new mp.Vector3(pos.x, pos.y, pos.z));
});

mp.events.addCommand("rev", (player) => {
    const pos = player.position;
    player.health = 100;
    player.spawn(new mp.Vector3(pos.x, pos.y, pos.z));
});

mp.events.add('spawnAtWaypoint', (player, position) => {
        player.spawn(new mp.Vector3(position.x, position.y, position.z));
});

mp.events.add('playerReady', (player) => {
    player.spawn(new mp.Vector3(-89.46919250488281, -1777.118896484375, 28.99894142150879));
    player.heading = 90;
    player.playAnimation('anim@veh@heli@thruster@front@base', 'sit', 8, 1);
});

mp.events.add('f2', () => {
    mp.players.reloadResources();
});

mp.events.add('f3', (player) => {
    
});