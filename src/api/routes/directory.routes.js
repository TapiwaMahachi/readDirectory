import express from 'express';
import { fileDetails } from '../controller/directory.controller.js';

const router = express.Router();

router
    .route('/')
    /**
     * @api {get} /api/fileDetail  Get
     * @description get all files in the current fileDetail
     * 
     */
    .get(fileDetails);

export  {router as dirRoutes};