import * as noticeRepository from '../data/notice.js';
import fetch from 'node-fetch';

export async function getNotice(req,res,next){
    const { lastId } = req.query;
    const notice = await noticeRepository.getNoticeList(lastId);
    console.log(notice)
        if(notice.length > 0){
            const formattedData = notice.map(report => {
                const date = report.Date.toISOString().split('T')[0];
                return { ...report.toObject(), Date: date };
            });
        res.status(200).json({data: formattedData})
    }else{
        res.status(404).json({message:`공지가 없습니다`});
    }
}

//공지를 생성하는 함수
export async function createNotice(req,res,next){
    const { Title, Contents } = req.body;
    console.log(Title, Contents)
    const notice = await noticeRepository.create(Title, Contents);
    if(notice){
        console.log(notice)
        res.status(200).json({ message: '제보가 성공적으로 생성되었습니다.' });
    }
    
}

export async function noticeDetail(req,res,next){
    const id = req.params.id;
    const data = await noticeRepository.getNotice(id);
    if(data){
        const date = data.Date.toISOString().split('T')[0];
        res.status(200).json({data: { ...data.toObject(), Date: date }});
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}