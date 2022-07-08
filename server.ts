import express, { json } from 'express';
import cors from 'cors';
import { port } from './utils/envConfig';

const app = express();
app.use(cors());
app.use(json());

app.listen(port, () => { console.log(`server running at port ${port}`); });