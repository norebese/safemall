import express from 'express';
import * as noticeController from '../controller/notice.js'

const router = express.Router();

//글번호에 대한 공지 가져오기
//GET
//http://localhost:8080/notice/:id
router.get('/:id', noticeController.getNotice);


export default router;