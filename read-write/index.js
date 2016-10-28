// on va passer à FS
// file system
var fs = require('fs');
// fs permets d'intergair avec le systeme de fichier
// premier argument : nom du fichier
// dernier argument : callback
// 
// le callback prend deux arguments : err, data
function read(operation){

	fs.readFile('alice.md', 'utf8', function(err, data){
		if (err) {
			return console.log(err);
		}
		fs.writeFile('visites.txt', data, 'utf8', function(err){
			if(err){
				console.log(err);
			}
		});

	});
}

// // maintenant on va écrire un fichier
// fs.writeFile(nomDuFichier, contenu, encodage, erreur);
// 
function write(content){
	fs.writeFile('visites.txt', content, 'utf8', function(err){
		if(err){
			console.log(err);
		}
	});
}
// callback hell
read()