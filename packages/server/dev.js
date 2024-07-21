mp.events.addCommand("pos", (player) => {
    console.log(`${player.position.x}, ${player.position.y}, ${player.position.z}`);
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
    player.spawn(new mp.Vector3(-1310, 71, 60.7));
    player.heading = 240
});

mp.events.add('f2', () => {
    mp.players.reloadResources();
});