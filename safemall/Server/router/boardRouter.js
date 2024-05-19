import e from "express";
import * as boardController from '../controller/'
const router = e.Router();

// 공지사항 목록
router.get('/notice', boardController)

// 공지사항 상세
router.get('/notice/:id', boardController)

// 예방법 목록
router.get('/prevent', boardController)

// 예방법 상세
router.get('/prevent/:id', boardController)

// 피해 대처법(리엑트에서 처리되는 로직)
router.get('/coping', boardController)

// 건의사항 목록
router.get('/suggest', boardController)
// 건의사항 작성
router.post('/suggest', boardController)
// 건의사항 상세
router.get('/suggest/:id', boardController)
// 건의사항 상세 수정
router.put('/sugest/:id', boardController)
// 건의사항 상세 삭제
router.delete('/sugest/:id', boardController)

// 제보
router.get('/report', boardController)
// 제보 작성
router.post('/report', boardController)
// 제보 상세
router.get('/report/:id', boardController)
// 제보 수정
router.put('/report/:id', boardController)
// 제보 삭제
router.delete('/report/:id', boardController)


export default router


// boardController
//     게시글 목록 가져오기
//     게시글 상세 가져오기
//     게시글 수정 가져오기
//     게시글 삭제 가져오기
