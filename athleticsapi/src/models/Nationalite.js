import {Schema, model} from 'mongoose';

const nationaliteSchema = new Schema({
    nom_nationalite: {
        type: String,
        required: true
    },
    cigle_nationalite: {
        type: String,
        required: true
    }
});

const Nationalite = model('Nationalite', nationaliteSchema)

export default Nationalite;