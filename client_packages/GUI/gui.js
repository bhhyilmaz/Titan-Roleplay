mp.events.add('browserDestroy', (state) => {
    if (state === true) {
        var browser = mp.browsers.new('package://GUI/gui.html');
    }
});