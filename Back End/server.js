// set up server
var config = require('./config/config.js'), // import config variables
  port = config.port,                       // set the port
  express = require('express'),             // use express as the framwork
  app = express(),                          // create the server using express
  path = require('path');                   // utility module

app.use(express.static(path.join(__dirname, 'public'))); // this middleware serves static files, such as .js, .img, .css files

// Initialize server
var server = app.listen(port, function () {
  console.log('Listening on port %d', server.address().port);
});

// Use '/' to go to index.html via static middleware

// Use '/test' to send "test" as a response.
app.get('/test', function (req, res) {
  res.send('tested');
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/unoAIHadden', function(req,res){
	//res.sendFile(path.resolve(__dirname + '/../FrontEnd/GAMES/Uno_Card_Game_AI.html'));

res.sendFile(path.resolve(__dirname + '/../Front End/Uno_Card_Game_AI_With_Updates.html'));
});

app.get('/Uno_Card_Script.js', function(req,res){
	res.sendFile(path.resolve(__dirname + '/../Front End/Uno_Card_Script_Obfuscated.js'));
});

app.get('/', function(req,res){
res.sendFile(path.resolve(__dirname + '/../Front End/Uno_Card_Game_AI_With_Updates.html'));
});
