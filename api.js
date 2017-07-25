const express = require('express');

const app = express();

const mongo = require('./lib/mongo');


app.get('/', function (req, res) {
	mongo().then((db) => {
		return db.collection('test').find().limit(1).next()
	}).then((data) => {
		res.json(data.msg + ' 1.1.12');
	}).catch((e) => {
		console.log(e.stack);
		res.send("no message");
	});
});

app.listen(3000, function(){
	console.log('running');
});
