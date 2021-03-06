var request = require('request');


function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function send (payload, callback) {
  var path = process.env.INCOMING_WEBHOOK_PATH;
  var uri = 'https://hooks.slack.com/services' + path;

  request({
    uri: uri,
    method: 'POST',
    body: JSON.stringify(payload)
  }, function (error, response, body) {
    if (error) {
      return callback(error);
    }

    callback(null, response.statusCode, body);
  });
}

module.exports = function(req, res, next) {
  var matches;
  var times = 2;
  var die = 6;
  var rolls = [];
  var total = 0;
  var botPayload = {};

  if (req.body.text){
    //parse roll type if specified
    matches = req.body.text.match(/^(\d{1,2})d(\d{1,2})$/)

    if (matches && matches[1] && matches[2]){
      times = matches[1];
      die = matches[2];
    } else {
      //error handler
      return res.status(200).send('<number>d<sides>')
    }

    //roll dice
    for (var i = 0; i < times; i++){
      var currentRoll = rol(1, die);
      rolls.push(currentRoll);
      total += currentRoll;
    }
    botPayload.username = 'dicebot';
    botPayload.channel = req.body.channel_id;
    botPayload.icon_emoji = ':game_die:'
    botPayload.text = req.body.user_name + ' rolled ' + times + 'd' + die + ':\n' + rolls.join(' + ') + ' = *' + total + '*';

    send(botPayload, function (error, status, body) {
      if (error) {
        return next(error);
      } else {
        return res.status(200).end();
      }
    });
  }
}
