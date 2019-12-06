import {Schema, model} from 'mongoose';

const typeUserSchema = new Schema({
    role: {
        type: String,
        default: 'USER',
        required: true
    }
});

const TypeUser = model('TypeUser', typeUserSchema)

export default TypeUser;
