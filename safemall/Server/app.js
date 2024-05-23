import e from "express";
import { config } from "./config.js";
import { connectDB  } from "./db/database.js";
import mainRouter from "./router/mainRouter.js";
import adminRouter from "./router/adminRouter.js"
import reportRouter from './router/report.js';
import cors from 'cors';
import preventRouter from './router/preventRouter.js';
import authRouter from './router/authRouter.js';
import noticeRouter from './router/notice.js';
import suggestRouter from './router/suggestRouter.js';

const app = e();
app.use(e.json());

app.use(cors());

app.use('/', mainRouter)

app.use('/auth', authRouter)

app.use('/admin', adminRouter)

app.use('/report', reportRouter)

app.use('/prevent', preventRouter)

app.use('/notice', noticeRouter)

app.use('/suggest', suggestRouter)


connectDB().then(()=>{
    app.listen(config.host.port,()=>{
        console.log(`Listen http://localhost:${config.host.port}`)
    })
})

/**
 * 사용되는 페이지의 대분류
 * 메인페이지
 *      auth
 *      info
 *      search
 *      detail
 * 게시판(board)
 *      notice
 *      suggest
 *      prevent
 *      coping
 *      report
 * 관리자(admin)
 *      게시판관리(board)
 *      데이터베이스관리(db)
 *      회원관리(users)
 */