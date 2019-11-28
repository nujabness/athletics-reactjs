import {Schema, model} from 'mongoose';

const participationSchema = new Schema({
    athlete_participation: {
        type: Schema.Types.ObjectId,
        ref: 'Athlete',
        required: true
    },
    medaille_participation: {
        type: Schema.Types.ObjectId,
        ref: 'Medaille',
        required: true
    },
    epreuve_participation: {
        type: Schema.Types.ObjectId,
        ref: 'Epreuve',
        required: true
    },
    resultat: {
        type: Schema.Types.ObjectId,
        ref: 'Nationalite',
        required: true
    }
});

const Participation = model('Participation', participationSchema)

export default Participation;