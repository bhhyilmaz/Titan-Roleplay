var browser = mp.browsers.new("package://Char/char.html");
var cam;
var f2 = false;

mp.events.callRemote('playAnimation::server');

mp.events.add('html/char', (single) => {
    mp.events.callRemote('client/char', single);
});

// this is developer event that will be removed
mp.events.add('f2', ()  => {
    browser.destroy();
    mp.events.callRemote('f2');

    mp.game.cam.renderScriptCams(false, false, 0, false, false);
    mp.players.local.freezePosition(false);
    mp.game.time.setClockTime(12, 00, 00);
    mp.game.time.pauseClock(true);
    mp.game.ui.setMinimapVisible(true);
    mp.gui.chat.activate(true);
    mp.gui.chat.show(true);
    mp.gui.cursor.show(true, true);
    mp.game.ui.displayRadar(true);
});

mp.events.add('char', () => {
    mp.events.call('cam');
});

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
    mp.players.local.position = new mp.Vector3(-1310, 71, 60.7);
    cam.setCoord(-1309, 70.5, 61.4);
    cam.pointAtCoord(-1310, 71, 61.4);
    cam.setActive(true);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
    mp.players.local.freezePosition(true);
});

mp.events.add('client:disableLoginCamera', () => {
    loginCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
    mp.players.local.freezePosition(false);
});

mp.events.add('index.js/heading', () => {
        mp.events.callRemote('a', true);
});
