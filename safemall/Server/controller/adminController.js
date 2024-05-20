import { config } from "../config.js";
import * as shopListData from "../data/shopListData.js"
import * as openapiData from "../data/openapiData.js"

export async function updateDB(req,res,next){
    console.log(`adminController 호출`)
    const apiKey = config.openapi.api_key;
    const api_result = await openapiData.getAPIData(apiKey)
    if(!api_result) res.status(500).json({message:"openapiData 실패"});
    const DB_result = await shopListData.updateDB();
    if(!DB_result) res.status(500).json({message:"shopListData 실패"});
    res.status(201).json({message:"작업성공"})
}
