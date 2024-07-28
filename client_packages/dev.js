mp.events.add('playerCreateWaypoint', (position) => {
    mp.events.callRemote('spawnAtWaypoint', position);
});