import express from 'express';
import * as reportController from '../controller/report.js'

const router = express.Router();

//제보 목록 가져오기
//GET
//http://localhost:8080/report/
router.get('/', reportController.getReportList);

//http://localhost:8080/report/createReport
router.post('/createReport', reportController.createReport);

//http://localhost:8080/report/id:
router.get('/:id', reportController.reportDetail);

export default router;