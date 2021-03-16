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
    .get(dirDetails)
    /**
     * @api {post} /api/directory post
     * @description add the subdirectory to the body access the subfolder path
     */
    .post(dirDetails);


export  {router as dirRoutes};