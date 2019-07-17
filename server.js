const PORT = process.env.PORT || 8080
//Définition des modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload');
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/pretest', {
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});
//Définition du routeur
var router = express.Router();
app.use('/user', router);
require(__dirname + '/controllers/userController')(router);

//Définition et mise en place du port d'écoute

app.listen(PORT, () => console.log('server demarre avec port ' + PORT));