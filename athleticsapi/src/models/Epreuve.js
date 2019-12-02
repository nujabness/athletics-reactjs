import {Schema, model} from 'mongoose';

const epreuveSchema = new Schema({
    nom_epreuve: {
        type: String,
        required: true
    },
    type_epreuve: {
        type: String,
        required: true
    },
    date_epreuve: {
        type: String,
        default: Date.now(),
        required: true
    },
    phase_epreuve: {
        type: String,
        required: true
    },
    participants: [{
        athlete:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        medaille: {
            type: String
        },
        resultat: {
            type: String
        },
    }]
});

const Epreuve = model('Epreuve', epreuveSchema)

export default Epreuve;