import e from "express";

const router = e.Router();

// 회원 로그인
router.post('/signin')

// 회원 회원가입
router.post('/signup')

// 마이페이지
router.get('/mypage', mypageController)

export default router