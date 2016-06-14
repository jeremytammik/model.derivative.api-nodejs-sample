'use strict';

var io = require('socket.io');
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var morgan = require('morgan');

// this session will be used to save the oAuth token
app.use(cookieParser());

app.use(session({
  secret: 'autodeskderivativeservice',
  resave: false,
  saveUninitialized: false
}));

var port = process.env.PORT || 8000;

// serve static files
app.use(express.static(__dirname + '/views/static'));

// set ejs as view engine
app.set('view engine', 'ejs');

var api = require('./routes/api');
app.use('/api', api); // redirect API calls

app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.render('index');
});

var roomedit3d = require('./routes/roomedit3d');

var server = app.listen(port,
  function() {
    var a = server.address().port;

    console.log(
      'Roomedit3dV2 server 0.0.1' // + pkg.version
      + ' listening at port ' + a + '.'
    );

    //var socketSvc = new SocketSvc(server);
    //app.use('/api/roomedit3d', roomedit3d(socketSvc));

    var io2 = io(server);

    io2.on('connection', function(client){
      console.log('a client connected to the roomedit3dv2 socket');
    });

    app.use('/api/roomedit3d', roomedit3d(io2));

    //socket.on('connection', function (client) {
    //  client.emit('roomedit3d', { hello: 'world' });
    //});
  }
);
