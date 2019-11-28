import {Schema, model} from 'mongoose';

const athleteSchema = new Schema({
    nom_athlete: {
        type: String,
        required: true
    },
    prenom_athlete: {
        type: String,
        required: true
    },
    sexe_athlete: {
        type: String,
        required: true
    },
    nationalite_athlete: {
        type: Schema.Types.ObjectId,
        ref: 'Nationalite',
        required: true
    }
});

const Athlete = model('Athlete', athleteSchema)

export default Athlete;