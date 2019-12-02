import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes/routes';
import database from './src/models/database';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

app.use('/', router)

const port = 8090;

database().then(async () => {
    console.log('connect')
    app.listen(port, () => {
        console.log('Server lance sur port 8090')
    })
});

export default app;
