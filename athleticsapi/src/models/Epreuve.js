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
        required: true
    },
    etat_epreuve: {
        type: Schema.Types.ObjectId,
        ref: 'Etat',
        required: true
    }
});

const Epreuve = model('Epreuve', epreuveSchema)

export default Epreuve;