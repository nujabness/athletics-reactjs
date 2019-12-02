import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
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

const User = model('User', userSchema)

export default User;