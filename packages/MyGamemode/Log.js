const User = require('./schemas/User');
const moment = require('moment');

mp.events.add('Log.js/loginCase', async (username) => {
        mp.events.add("playerChat", async (player, text) => {
            player.call('gui.js/say', [text]);

            var date = moment().locale('tr').format('D MMMM YYYY, h:mm:ss a');
            var log = '('+date+')'+" "+text;
            
            await User.updateOne({ username: username }, {$push: {log: log }});
      });
    })