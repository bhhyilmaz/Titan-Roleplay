mp.keys.bind(113, true, () => { 
    mp.events.callRemote('f2');
});

mp.events.add('playerCreateWaypoint', (position) => {
    mp.events.callRemote('spawnAtWaypoint', position);
});