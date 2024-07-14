var browser = mp.browsers.new('package://Login/index.html');
var loginCam;

mp.events.add('client:loginData', (username, password) => {
    mp.events.callRemote("server:loginAccount", username, password);
});

mp.events.add('client:regCase', (info, username, password) => {
    browser.call('html:regCase', info);
    browser.call('html:regCaseUsername', username);
    browser.call('html:regCasePassword', password);

    // setTimeout(() => {
    //     if (res === false) {
    //         browser.execute(`
    //             rdr = true;
    //         `);
    //     }
    // }, 1);
});

mp.events.add('client:loginCase', (res) => {
    if (res === true) {
        mp.events.call("client:hideLoginScreen");
    } else {
        browser.call('html:loginCase', res);
    }
});

mp.events.add('client:regData', (usernameReg, passwordReg) => {
    mp.events.callRemote("server:regAccount", usernameReg, passwordReg);
});

mp.events.add('client:showLoginScreen', () => {
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
    mp.players.local.freezePosition(false);
    mp.game.ui.setMinimapVisible(false);
    mp.gui.chat.activate(true);
    mp.gui.chat.show(true);
    mp.gui.cursor.show(false, false);
    mp.game.ui.displayRadar(true);
    mp.events.call("client:disableLoginCamera");
    mp.gui.chat.push('Merhaba Dunya');
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