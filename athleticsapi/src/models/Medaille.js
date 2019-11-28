import {Schema, model} from 'mongoose';

const medailleSchema = new Schema({
    nom_medaille: {
        type: String,
        required: true
    }
});

const Medaille = model('Medaille', medailleSchema)

export default Medaille;