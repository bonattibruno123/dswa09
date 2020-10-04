var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function() {
    //Instancia do express
    var app = express();

    //Porta da aplicação
    var porta = process.env.PORT || 8080;
    app.set('port', porta);

    //Middleware
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    //Definir a engine para a View
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //Carregar pastas
    load('models', { cwd: 'app' }).then('controllers').then('routes').into(app);

    return app;
}