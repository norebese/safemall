import express from 'express';
import * as suggestController from '../controller/suggestController.js'

const router = express.Router();


router.post('/createSuggest', suggestController.createSuggest);

export default router;