module.exports = (app) => {

    const pers = require('../controllers/produitController');
    app.post('/profil', pers.create);
    app.get('/profil', pers.findAll);
    app.get('/profil/:profilId', pers.findOne);
    // app.put('/profil/:profilId', profil.update);
    // app.delete('/profil/:profilId', profil.delete);
    
}