import e from "express";
import { config } from "./config.js";
import { connectMongoDB } from "./db/database.js";
import mainRouter from "./router/mainRouter.js";
import adminRouter from "./router/adminRouter.js"
import reportRouter from './router/report.js';
import cors from 'cors';

const app = e();
app.use(e.json());

app.use(cors());

app.use('/', mainRouter)
// app.use('/auth', authRouter)
// app.use('/board', boardRouter)
app.use('/admin', adminRouter)

app.use('/report', reportRouter)


connectMongoDB().then(()=>{
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