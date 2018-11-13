// importando o mongoDb

var mongo = require('mongodb');



var conMongoDB = function (){
	console.log('entrou com a função conex')
	var db = new mongo.Db(
		'got',
		new mongo.Server(
		'localhost', //string contendo endereço servidor
		27017, //porta de conexão
			{}
		),
		{}
	);
	return db;
}
 
module.exports = function() {
		return conMongoDB;
	}