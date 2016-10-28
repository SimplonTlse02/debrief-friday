var express = require('express');
var app = express();
var fs = require('fs');

var filePath  = "./webroot/dummy.json";

app.use(express.static('webroot'));

// request en get sur la route /
// prends un callback avec deux parametres request, response 
app.get('/incr', handleMenu);


// on définie le port sur lequel tourne notre serveur
app.listen(1337, function(){
	console.log('je suis demarre sur le port elite');
})

// fonction executée lors de l'accès à la route /incr
function handleMenu(req, res){
	//on lit le fichier dummy.json
	fs.readFile(filePath, 'utf8', function(err, data){
		if(err){
			return console.log('oups');
		}
		// on transforme notre chaine de charactere json en objet
		var dummy = JSON.parse(data);
		//on increment la propriété counter de notre objet
		dummy.counter++;
		
		//on retransforme notre objet en chaine de caractere json
		var json = JSON.stringify(dummy);
		//on réécrie notre fichier dumme.json avec le contenu modifié
		fs.writeFile(filePath, json, function(err){
			if (err){
				// en cas d'erreur
				return res.send('epic fail');
			}
			// on envoie sa valeur au navigateur (client)
			res.send("is:" + dummy.counter);
		})
	});
}