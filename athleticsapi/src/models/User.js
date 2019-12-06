import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'TypeUser',
        default: '5de7b79c931403cf90dc97f7'
    },
    nom_athlete: {
        type: String,
        default: 'default',
    },
    prenom_athlete: {
        type: String,
        default: 'default',
    },
    sexe_athlete: {
        type: String,
        default: 'HOMME'
    },
    nationalite_athlete: {
        type: Schema.Types.ObjectId,
        ref: 'Nationalite',
        default: '5de6aa9ee56c844a2444e797'

    }
});

const User = model('User', userSchema)

export default User;
