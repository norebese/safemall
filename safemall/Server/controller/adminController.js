import { config } from "../config.js";
import * as shopListData from "../data/shopListData.js"
import * as openapiData from "../data/openapiData.js"

export async function updateDB(req,res,next){
    console.log(`adminController 호출`)
    const apiKey = config.openapi.api_key;
    const api_result = await openapiData.getAPIData(apiKey)
    if(!api_result) res.status(500).json({message:"API 호출 실패"});
    res.status(200).json({message:"api 데이터 수집 및 전처리 완료"})
    // const DB_result = await shopListData.updateDB()
    // if(result) res.status(200).json({message:"DB 업데이트 성공"});
    // else res.status(502).json({message:"DB 업데이트 실패"})
}
