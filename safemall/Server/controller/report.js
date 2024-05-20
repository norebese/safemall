import * as reportRepository from '../data/report.js';

//제보목록을 가져오는 함수
export async function getReportList(req,res,next){
    const data = await reportRepository.getReportList();
    // console.log(data)
    if(data.length > 0){
        // 모든 data의 Date를 변환하여 클라이언트에게 전달
        const formattedData = data.map(report => {
            const date = report.Date.toISOString().split('T')[0];
            return { ...report.toObject(), Date: date };
        });
        
        res.status(200).json({data: formattedData});
    }else{
        res.status(404).json({message:`제보목록이 없습니다`});
    }
}

export async function createReport(req,res,next){
    const {Title, ShopName, Domain, Owner, Etc} = req.body;
    const data = await reportRepository.inputReport(Title, ShopName, Domain, Owner, Etc);
    if(data){
        res.json({ message: '제보가 성공적으로 생성되었습니다.' });
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}

export async function reportDetail(req,res,next){
    const id = req.params.id;
    console.log('reportId: ',id)
    const data = await reportRepository.getReport(id);
    if(data){
        const date = data.Date.toISOString().split('T')[0];
        res.status(200).json({data: { ...data.toObject(), Date: date }});
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}