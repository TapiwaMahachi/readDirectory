import express from 'express';
import {routes} from '../api/routes/index.js';

const app = express();

/**
 * body parsing middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * APi route
 */
app.use('/api', routes);

/**
 * error handle
 */
app.use((err, req, res, next)=>{

    res.send(`Error : ${err}`);
});


export default app;