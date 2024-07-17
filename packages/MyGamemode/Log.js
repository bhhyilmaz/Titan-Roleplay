const User = require('./schemas/User');

mp.events.add('Log.js/loginCase', async (username) => {
        mp.events.add("playerChat", async (player, text) => {
            player.call('gui.js/say', [text]);
            
            await User.updateOne({ username: username }, {$push: {log: text }}).then(
                console.log('log saved.')
            )
      });
    })