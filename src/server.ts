import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

let app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/upload', express.static(path.resolve(__dirname, '..', 'upload')));
app.listen(3333);