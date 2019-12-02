import {connect} from 'mongoose';

const connectDB = () => {
    return connect('mongodb://localhost:27017/athletics',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

export default connectDB;
