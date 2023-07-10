import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config';

const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log('app running on port: ', app.get('port'));
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));