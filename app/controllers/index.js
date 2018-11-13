module.exports.index = function(application , req, res){
    res.render('index',{validacao: []})
}

module.exports.autenticar = function(application , req, res){

	var dadosForm = req.body;

	req.assert('usuario', 'usuario não pode ser vazio').notEmpty();
	req.assert('senha', 'senha não pode ser vazia').notEmpty();

	var error = req.validationErrors();


	if(error){
		res.render('index',{validacao: error})
		return ;
	}

	var connection = application.config.dbConnection;
	var UsuariosDAO =  new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dadosForm , req, res);

	//res.send('tudo ok para sessao')
}