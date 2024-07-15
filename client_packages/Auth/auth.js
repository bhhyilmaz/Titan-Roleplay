var browser = mp.browsers.new('package://Auth/login.html');
var loginCam;
var test = "test word test word test word test word test word test word test word";

mp.events.add('client:loginData', (username, password) => {
    mp.events.callRemote("server:loginAccount", username, password);
});

mp.events.add('client:regCase', (info, username, password) => {
    browser.call('html:regCase', info);

    setTimeout(() => {
        if (info === false) {
            browser.execute(`
                rdr = true;
            `);
            
            mp.events.callRemote("server:rdr", username, password);
            setTimeout(() => {
                mp.events.call("client:hideLoginScreen");
                mp.events.call('gui.js/username', username);
            }, 2000);
        }
    }, 1);
});

mp.events.add('client:loginCase', (info, username) => {
    if (info === true) {
        mp.events.call("client:hideLoginScreen");
        mp.events.call("gui.js/usernameLogin", username);
    } else {
        browser.call('html:loginCase', info);
    }
});

mp.events.add('client:regData', (usernameReg, passwordReg) => {
    mp.events.callRemote("server:regAccount", usernameReg, passwordReg);
});

mp.events.add('client:showLoginScreen', () => {
    mp.game.audio.setAudioFlag("DisableFlightMusic", true);
    mp.players.local.freezePosition(true);
    mp.game.ui.setMinimapVisible(true);
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
    setTimeout(() => { mp.gui.cursor.show(true, true); }, 1);
    mp.game.ui.displayRadar(false);
    mp.events.call('client:enableLoginCamera');
});

mp.events.add('client:hideLoginScreen', () => {
    browser.destroy();
    mp.events.call('gui.js/browser', false);

    mp.players.local.freezePosition(false);
    mp.game.ui.setMinimapVisible(false);
    mp.gui.chat.activate(true);
    mp.gui.chat.show(true);
    mp.gui.cursor.show(false, false);
    mp.game.ui.displayRadar(true);
    mp.events.call("client:disableLoginCamera");
});

mp.events.add('client:enableLoginCamera', () => {
    loginCam = mp.cameras.new('default', new mp.Vector3(0, 0, 0), new mp.Vector3(0, 0, 0), 40);
    mp.players.local.position = new mp.Vector3(-1757.12, -739.53, 10);
    mp.players.local.freezePosition(true);

    loginCam.setActive(true);
    loginCam.setCoord(-1757.12, -739.53, 25);
    loginCam.pointAtCoord(-1764, -715, 35);
    mp.game.cam.renderScriptCams(true, false, 0, true, false);
});

mp.events.add('client:disableLoginCamera', () => {
    loginCam.destroy();
    mp.game.cam.renderScriptCams(false, false, 0, false, false);
    mp.players.local.freezePosition(false);
});