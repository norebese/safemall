import * as preventRepository from '../data/preventData.js';

export async function getPreventions(req,res,next){
    const { lastId } = req.query;
    const data = await preventRepository.getPreventList(lastId);
    // console.log(lastId)
    if(data.length > 0){
        // 모든 data의 Date를 변환하여 클라이언트에게 전달
        // const formattedData = data.map(report => {
        //     const date = report.Date.toISOString().split('T')[0];
        //     return { ...report.toObject(), Date: date };
        // });
        
        res.status(200).json(data);
    }else{
        res.status(404).json({message:`제보목록이 없습니다`});
    }
}