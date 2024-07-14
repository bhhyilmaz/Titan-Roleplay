mp.events.addCommand("pos", (player) => {
    console.log(player.position);
});

mp.events.addCommand("duyuru", (player, message) => {
	mp.players.broadcastInDimension(player.dimension, `Message from ${player.name}: ${message}`);

});

mp.events.addCommand('notify', (player, message) => {
	if(!message) return player.outputChatBox("You need to enter a message.");
	player.notify(message);
});

mp.events.addCommand("car", (player) => {
	mp.vehicles.new(mp.game.joaat("turismor"), new mp.Vector3(-421.88, 1136.86, 326), 
    {
        numberPlate: "cutter",
        color: [[255, 0, 0],[255,0,0]]
    });
  });