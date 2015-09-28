module.exports = function (req, res, next){
  var userName = req.body.user_name;
  var botPayload = {
    text: ":sunglasses: Hello, @" + userName + "! I hope you\'re having a wonderful day! :smile: :sunny:"
  };

  var spooky = {
    channel:"@" + userName
    text:"▒▒▒░░░░░░░░░░▄▐░░░░\n
          ▒░░░░░░▄▄▄░░▄██▄░░░\n
          ░░░░░░▐▀█▀▌░░░░▀█▄░\n
          ░░░░░░▐█▄█▌░░░░░░▀█▄\n
          ░░░░░░░▀▄▀░░░▄▄▄▄▄▀▀\n
          ░░░░░▄▄▄██▀▀▀▀░░░░░\n
          ░░░░█▀▄▄▄█░▀▀░░░░░░\n
          ░░░░▌░▄▄▄▐▌▀▀▀░░░░░\n
          ░▄░▐░░░▄▄░█░▀▀░░░░░\n
          ░▀█▌░░░▄░▀█▀░▀░░░░░\n
          ░░░░░░░░▄▄▐▌▄▄░░░░░\n
          ░░░░░░░░▀███▀█░▄░░░\n
          ░░░░░░░▐▌▀▄▀▄▀▐▄░░░\n
          ░░░░░░░▐▀░░░░░░▐▌░░\n
          ░░░░░░░█░░░░░░░░█░░\n
          ░░░░░░▐▌░░░░░░░░░█░\n
    "
  }


  if (userName !== 'slackbot'){
    return res.status(200).json(spooky);
  } else {
    return res.status(200).end();
  }
}
