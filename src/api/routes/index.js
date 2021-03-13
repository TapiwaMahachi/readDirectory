import express from 'express';
import { dirRoutes } from './directory.routes.js';


const router = express.Router();

/**
 * Testing 
 */
router.get('/status', (req, res)=>res.send('Ok'));


router.use('/directory', dirRoutes);

export  {router as routes};