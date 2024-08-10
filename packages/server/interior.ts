let colshape = mp.colshapes.newSphere(-544.73876953125, -204.69960021972656, 38.215152740478516, 1, 0);
const marker = mp.markers.new(2, new mp.Vector3(-544.73876953125, -204.69960021972656, 38.215152740478516),1,
{
    color: [255, 165, 0, 50],
    visible: true,
    dimension: 0
});


var ipl = "apa_v_mp_h_08_a";
mp.events.addCommand("ipl", (player, fullText, x, y, z) => {
    if(colshape.isPointWithin(player.position)) {
        mp.world.requestIpl(ipl);
		player.position = new mp.Vector3(-786.9469, 315.5655, 217.6383);
    }
});

mp.events.addCommand("noipl", (player, fullText, x, y, z) => {
    mp.world.removeIpl(ipl);
});

mp.events.add("playerEnterColshape", (player, shape) => {
    if(shape === colshape) {
        player.notify("Hello World");
      }

      player.notify('this is for all shapes');
});