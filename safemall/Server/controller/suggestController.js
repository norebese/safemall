import * as suggestRepository from '../data/suggestData.js';




export async function createSuggest(req,res,next){
    const {Title, Writer, ShopName, Domain, Owner, Etc} = req.body;
    const data = await reportRepository.inputReport(Title, Writer, ShopName, Domain, Owner, Etc);
    if(data){
        res.json({ message: '제보가 성공적으로 생성되었습니다.' });
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}