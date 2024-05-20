import * as shopListData from "../data/shopListData.js"

export async function updateDB(){
    const result = await shopListData.updateDB()
    if(result) res.status(200).json({message:"DB 업데이트 성공"});
    else res.status(502).json({message:"DB 업데이트 실패"})
}