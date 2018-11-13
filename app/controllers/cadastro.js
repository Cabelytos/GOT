module.exports.cadastro = function(application , req, res){
    res.render('cadastro',{validacao: {}, dadosForm:{}})
}


module.exports.cadastrar = function(application , req, res){

    var dadosForm = req.body;

    req.assert('nome', 'nome nao pode ser vazio').notEmpty();
    req.assert('usuario', 'usuario nao pode ser vazio').notEmpty();
    req.assert('senha', 'senha nao pode ser vazio').notEmpty();
    req.assert('casa', 'casa nao pode ser vazio').notEmpty();

    var error = req.validationErrors();

    if (error) {
        res.render('cadastro', {validacao: error, dadosForm: dadosForm});
        return ;
    }

    var connection = application.config.dbConnection;
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
    var JogoDAO = new application.app.models.JogoDAO(connection);

    UsuariosDAO.inserirUsuario(dadosForm);
    JogoDAO.gerarParametros(dadosForm.usuario);
    // geração dos parametros

   res.send('podemos cadastrar')
}