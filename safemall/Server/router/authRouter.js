import e from "express";
import * as authController from "../controller/authController.js"

const router = e.Router();

// 회원 로그인
router.post('/signin')

// 회원 회원가입
router.post('/signup', authController.createUser)

// 마이페이지
// router.get('/mypage', mypageController)

export default router