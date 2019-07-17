const mongoose = require('mongoose');

const ProduitSchema = mongoose.Schema({
    
    _id: {type:Number, required:true},
    nom: { type: String, required: true},
    prix: { type: String, required: true},
    detail: { type: String, required: true },
    photo_profil:String
},
{
    timestamps: true
}
);

module.exports = mongoose.model('produit', ProduitSchema);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);