mp.events.add('gui.js/browser', (state) => {
    if (state === false) {
        var browser = mp.browsers.new('package://GUI/gui.html');

        mp.events.add('gui.js/username', (username) => {
            browser.call('gui.html/username', username);
        });

        mp.events.add('gui.js/usernameLogin', (username) => {
            browser.call('gui.html/usernameLogin', username);
        });
    }
});