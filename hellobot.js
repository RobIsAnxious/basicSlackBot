module.exports = function (req, res, next){
  var userName = req.body.user_name;
  var botPayload = {
    text: 'Hello, ' + userName + '! I hope you\'re having a wonderful day!'
  };

  if (userName !== 'slackbot'){
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
