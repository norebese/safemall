import * as authRepository from '../data/userData.js';

export async function createUser(req,res,next){
    const {Email, Password, Nickname} = req.body;
    const data = await reportRepository.inputReport(Email, Password, Nickname);
    if(data){
        res.json({ message: '성공적으로 로그인되었습니다.' });
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}