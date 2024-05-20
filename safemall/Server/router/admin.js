import express from 'express';
import * as noticeController from '../controller/notice.js'

const router = express.Router();

//공지 작성
//POST
//http://localhost:8080/admin/notice/create
//name, username, text
router.post('/notice/create', noticeController.createNotice);

router.post('/inputData', noticeController.inputData);

export default router;