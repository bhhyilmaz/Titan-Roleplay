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