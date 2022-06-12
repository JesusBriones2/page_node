import express from "express";
import ejs from "ejs";
import {dirname, join} from 'path';
import { fileURLToPath } from "url";

import index_routes from './routes/routes.js';

const app = express();

const __dirname = dirname( fileURLToPath(import.meta.url) );

app.set('views', join(__dirname,"views"));
app.set('view engine', 'ejs');
app.use(index_routes);
app.use(express.static(join(__dirname, 'public')));


app.listen(3000);