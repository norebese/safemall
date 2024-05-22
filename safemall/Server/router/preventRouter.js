import express from 'express';
import * as preventController from '../controller/preventController.js'

const router = express.Router();

router.get('/', preventController.getPreventions);

export default router;