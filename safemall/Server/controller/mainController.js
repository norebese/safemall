import * as shopListData from '../data/shopListData.js'
import * as warningData from '../data/warningSite.js'
// 메인페이지 호출
export async function getMain(req, res, next){
    const { skipCount } = req.query;
    const data = await warningData.getList(skipCount);
    // 가져온 data를 main.html에 render 한 후에 
    console.log(data)
    if(data.length > 0){
        res.status(200).json({message:"메인 페이지", data})
    }else{
        res.status(404).json({message:`등록된 피해다발 사이트가 없습니다`});
    }
}

// 서비스 소개
export function getInfo(req, res, next){
    res.status(200).json({message:"서비스 소개 페이지"});
}

// 쇼핑몰 검색
export async function search(req, res, next){
    const shopType = 'shopName'
    const keyword = req.query.keyword
    console.log(keyword)
    if(shopType == 'shopName'){
        const result = await shopListData.getByShopName(keyword)
        console.log(result)
        res.status(200).json({message:`쇼핑몰데이터 아이디(shopName): ${keyword}`,result})
    }
    else if( shopType == 'domainName'){
        // const result =  shopListData.getByDomainName(shopType, keyword)
        res.status(200).json({message:`쇼핑몰데이터 아이디(domainName): ${result}`})
    }
    else if( shopType == 'comNum'){
        // const result =  shopListData.getByComNum(shopType, keyword)
        res.status(200).json({message:`쇼핑몰데이터 아읻지(comNum): ${result}`})
    }
    else{
        res.status(404).json({message:"쇼핑몰데이터 없음"})
    }
}
