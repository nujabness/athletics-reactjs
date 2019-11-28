import {Schema, model} from 'mongoose';

const etatSchema = new Schema({
    nom_etat: {
        type: String,
        required: true
    }
});

const Etat = model('Etat', etatSchema)

export default Etat;