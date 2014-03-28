var express = require('express');
var app = express();

app.use(express.compress());
app.use(express.static(__dirname + '/dist'));
app.use(express.logger('dev'));
app.use(express.bodyParser());

app.listen(process.env.PORT || 3000);
