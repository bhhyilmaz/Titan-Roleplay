var browser = mp.browsers.new("package://Char/char.html");
var cam;

mp.events.add('html/char', (single) => {
    mp.events.callRemote('client/char', single);
});

mp.events.add('html/head', (head) => {
    let head_array = head.split(", ").map(value => value.trim());

    const hair = Number(head_array[0]);
    const beard = Number(head_array[1]);

    mp.events.callRemote('client/head', beard, hair);
});

let pedModel = "a_m_m_skidrow_01";
let spawnPosition = new mp.Vector3(-91, -1777.1153564453125, 29.568950653076172);

// Create the ped
var ped = mp.peds.new(pedModel, spawnPosition, 0.0);

mp.keys.bind(113, true, () => { 
    browser.destroy();
    mp.events.callRemote('f2');
});
  
mp.keys.bind(114, true, () => {
    const player = mp.players.local;
    const pos = player.position;
    const heading = player.getHeading();

    // Calculate the position to the left of the player
    const leftPosition = {
        x: pos.x + Math.cos((heading - 90) * (Math.PI / 180)),
        y: pos.y + Math.sin((heading - 90) * (Math.PI / 180)),
        z: pos.z
    };

    // Make the player look at the calculated position
    player.taskLookAt(ped.handle, 5000, 2048, 1);
});
//

mp.events.add('char', () => {
    mp.events.call('cam');
    mp.players.local.freezePosition(false);
    mp.game.ui.setMinimapVisible(false);
    mp.gui.chat.show(true);
});


var cam_x = -90.5237045288086;
var cam_y = -1777.1153564453125;
var cam_z = 29.568950653076172;

mp.events.add('cam', () => {
    mp.game.time.setClockTime(12, 00, 00);
    mp.game.time.pauseClock(true);
    mp.game.ui.setMinimapVisible(true);
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
    setTimeout(() => { mp.gui.cursor.show(true, true); }, 1);
    mp.game.ui.displayRadar(false);
    cam = mp.cameras.new('default', new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 
    40);
    // mp.players.local.position = new mp.Vector3(-89.46919250488281, -1777.118896484375, 28.99894142150879);
    cam.pointAtCoord(-89.46919250488281, -1777.118896484375, 29.7)
    cam.setActive(true);
    cam.setCoord(cam_x, cam_y, cam_z)
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    mp.players.local.freezePosition(false);
});

// Press H to state0 = true;
var state0, state1;
mp.keys.bind(65, true, () => {
    state0 = true;
});
mp.keys.bind(65, false, () => {
    state0 = false;
});
mp.keys.bind(68, true, () => {
    state1 = true;
});
mp.keys.bind(68, false, () => {
    state1 = false;
});

// dev function
mp.events.add('render', () => {
    const cam_coord = cam.getCoord();
    const player = mp.players.local;

    if (state0 === true) {
        mp.game.task.lookAtCoord(player.handle, cam_coord.x, cam_coord.y + 5, cam_coord.z, -1, 1, 1);
    } else {
        mp.game.task.lookAtCoord(player.handle, cam_coord.x, cam_coord.y, cam_coord.z, -1, 1, 1);
    }

    if (state1 === true) {
        mp.game.task.lookAtCoord(player.handle, cam_coord.x, cam_coord.y - 5, cam_coord.z, -1, 1, 1);
    }
});

mp.events.add('client:disableLoginCamera', () => {
    loginCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
    mp.players.local.freezePosition(false);
});

mp.events.add('index.js/heading', () => {
    mp.events.callRemote('a', true);
});

mp.events.add('html/head_value', (value) => {
    mp.players.local.setComponentVariation(2, Number(value), 0, 0);
});