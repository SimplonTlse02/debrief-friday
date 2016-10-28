var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.static('webroot'));

// request en get sur la route /
// prends un callback avec deux parametres request, response 
app.get('/visites', updateVisites);



app.listen(1337, function(){
	console.log('je suis demarre sur le port elite');
})


function updateVisites(req, res){
	var filePath = '../read-write/visites.txt';
	fs.readFile(filePath, 'utf8', function(err, data){
		if(err){
			res.send('fichier introuvable');
		}
		res.send(data);
		incrementVisites(data, filePath)
		
	});
}

function incrementVisites(count, path){
	fs.writeFile(path, ++count, 'utf8', function(err){
		if(err){
			console.log('oups...');
		}
	});
}