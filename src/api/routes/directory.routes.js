import express from 'express';
import { dirDetails } from '../controller/directory.controller.js';

const router = express.Router();

router
    .route('/')
    /**
     * @api {get} /api/directory  Get
     * @description get all files in the current working directory
     * 
     */
    .get(dirDetails);

router
    .route('/:subdir')
    /**
     * @api{get} /api/:params Get
     * @description get all files from subdirectory
     */
    .get(dirDetails)

export  {router as dirRoutes};