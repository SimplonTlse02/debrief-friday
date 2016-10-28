// je recupere le fichier visites.txt
var fs  = require('fs');
var file = "visites.txt";


fs.readFile(file, 'utf8', function(err, data){
	if(err){
		return 'erreur ! on sais pas laquelle, mais ça marche pas !';
	}
	// je le transforme en entier
	var nbVisites = parseInt(data, 10);
	// et j'ajoute 1 (j'incrémente)
	nbVisites++;
	// je reécrie le contenu de mon fichier
	fs.writeFile(file, nbVisites, 'utf8', function(err){
		if(err) {
			console.log('oups');
		}
	});
});