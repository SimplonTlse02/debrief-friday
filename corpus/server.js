var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var slug = require('slug');
var jsesc = require('jsesc');
//mon dossier public
// je surcharge mon serveur avec le middleware body-parser
app.use(bodyParser());

//à la méthode post
app.post('/create', function(req, res){
	var post = req.body;
	var escapedPath = jsesc(slug(post.title)) + '.md';
	var path = __dirname + '/files/' + escapedPath;
	var menuPath = __dirname + '/public/menu.json';

	fs.writeFile(path, post.content, function(err){
		if(err){
			console.log('scream');
		}
	});

	fs.readFile(menuPath, 'utf8', function(err, data){
		console.log(data);
		var content = JSON.parse(data);
		content.menu.push({path:escapedPath, title:post.title});
		console.log(content);
		var jsonified = JSON.stringify(content);

		fs.writeFile(menuPath, jsonified, function(err){
			if(err) {
				console.log('halte là sir!')
			}
		});

	});


	res.json({message:"Votre fichié a bien été créé", status:'ok'});
});


app.use(express.static(__dirname + '/public'));
app.listen('1337', function(){

});