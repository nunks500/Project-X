var express = require('express');
var path = require('path');
var app = express();
var user = require('./user');
 
app.get('/adduser', user.add);

app.get('/updateuser', user.update);

app.get('/removeuser', user.remove);
/*
app.get('/addevent', event.add);

app.get('/removeevent', event.remove);

app.get('/updateevent', event.update);

app.get('/addmessage', message.add);

app.get('/getmessage', message.get);

app.get('/getconversation', message.list);
/*
app.get('/users', user.list);
app.all('/user/:id/:op?', user.load);
app.get('/user/:id', user.view);
app.get('/user/:id/view', user.view);
app.get('/user/:id/edit', user.edit);
app.put('/user/:id/edit', user.update);
*/
app.listen(3000)