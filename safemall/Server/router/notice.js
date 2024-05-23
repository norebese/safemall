import express from 'express';
import * as noticeController from '../controller/notice.js'

const router = express.Router();

//글번호에 대한 공지 가져오기
//GET
//http://localhost:8080/notice/:id
router.get('/', noticeController.getNotice);

router.get('/:id', noticeController.noticeDetail);

//http://localhost:8080/notice/createNotice 
router.post('/createNotice', noticeController.createNotice);


export default router;