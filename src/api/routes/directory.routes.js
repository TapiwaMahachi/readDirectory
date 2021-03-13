import express from 'express';
import { directory } from '../controller/directory.controller.js';

const router = express.Router();

router
    .route('/')
    /**
     * @api {get} /api/directory  Get
     * @description get all files in the current directory
     * 
     */
    .get(directory);

export  {router as dirRoutes};