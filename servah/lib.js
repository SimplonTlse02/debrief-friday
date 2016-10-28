var fs = require('fs');

var methods = {

	updateVisites : function updateVisites(req, res){
		var filePath = '../read-write/visites.txt';
		fs.readFile(filePath, 'utf8', function(err, data){
			if(err){
				res.send('fichier introuvable');
			}
			res.send(data);
			this.incrementVisites(data, filePath)
			
		}.bind(this));
	},

	incrementVisites: function incrementVisites(count, path){
		fs.writeFile(path, ++count, 'utf8', function(err){
			if(err){
				console.log('oups...');
			}
		});
	}
};

module.exports = methods;