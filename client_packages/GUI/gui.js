var browser;

mp.events.add('client:gui', () => {
    browser = mp.browsers.new('package://GUI/gui.html');
});