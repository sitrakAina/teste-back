const account = require('./account/lib.js');
const pers = require('./produitController');

module.exports = function (app) {
	app.post('/produit', pers.create);
	app.get('/produit/:photo_profil', pers.lireImage);
    app.get('/produit', pers.findAll);
    app.get('/produit/:produitId', pers.findOne);
    app.post('/login',account.login);
    app.post('/signup',account.signup);
}