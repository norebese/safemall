import * as shopListData from '../data/shopListData.js'
import * as shopsComplaintsData from '../data/shopsComplaintsData.js'
import SocialMediaScraper from './snsCrawling.js';

const socialMediaScraper = new SocialMediaScraper();

// 메인페이지 호출
export async function getMain(req, res, next){
    const count = req.query.count
    console.log(count)
    const data = await shopsComplaintsData.getAll(count);
    if(!data) res.status(404);
    res.status(200).json({message:"메인 페이지", data})
}

// 서비스 소개
export function getInfo(req, res, next){
    res.status(200).json({message:"서비스 소개 페이지"});
}

// 쇼핑몰 검색
export async function search(req, res, next){
    const shopType = req.query.type
    const keyword = req.query.keyword
    console.log(shopType)
    console.log(keyword)
    if(shopType == 'shopName'){
        const result = await shopListData.getByShopName(keyword)
        console.log(result)
        res.status(200).json({message:`쇼핑몰데이터 아이디(shopName): ${keyword}`,result})
    }
    else if( shopType == 'domainName'){
        let url = Buffer.from(keyword, 'base64').toString('utf-8');
        console.log(url)
        const result = await shopListData.getByDomainName(url)
        console.log(result)
        res.status(200).json({message:`쇼핑몰데이터 아이디(domainName): ${result}`, result})
    }
    else if( shopType == 'comNum'){
        // const result =  shopListData.getByComNum(shopType, keyword)
        res.status(200).json({message:`쇼핑몰데이터 아읻지(comNum): ${result}`})
    }
    else{
        res.status(404).json({message:"쇼핑몰데이터 없음"})
    }
}

// 상세페이지
export async function searchDetail(req,res,next){
    const id = req.params;
    console.log(id)
    const data = await shopListData.getDetail(id.id);
    console.log('data: ', data)
    const emptyMassage = '확인 불가'
    if(data){
        const date = data.dateMonitoring ? data.dateMonitoring.toISOString().split('T')[0] : emptyMassage;
        const date2 = data.dateInit ? data.dateInit.toISOString().split('T')[0] : emptyMassage;
        const date3 = data.dateSiteOpen ? data.dateSiteOpen.toISOString().split('T')[0] : emptyMassage;
        const businessType = data.businessType ? data.businessType : emptyMassage;
        
        const mainItems = data.mainItems[0] != '' ? data.mainItems : emptyMassage;
        const possibleSW = data.possibleSW ? data.possibleSW : emptyMassage;
        const detailPayment = data.detailPayment[0] != '' ? data.detailPayment[0] : emptyMassage;
        const detailTermUse = data.detailTermUse ? data.detailTermUse : emptyMassage;
        const detailPIS = data.detailPIS ? data.detailPIS : emptyMassage;
        const detailWithdrawal = data.detailWithdrawal ? data.detailWithdrawal : emptyMassage;
        const PSS = data.PSS ? data.PSS : emptyMassage;
        
        // 크롤링 기능 호출
        const socialUrls = await socialMediaScraper.getSocialMediaUrls(data.domainName);
        // 각 플랫폼의 URL에 https://가 포함되어 있는지 체크하고, 없다면 추가
        console.log('socialUrls:', socialUrls)
        Object.entries(socialUrls).forEach(([platform, urls]) => {
            socialUrls[platform] = urls.map(url => {
                if (!(url.startsWith('https') || url.startsWith('http'))) {
                return `https://${url}`;
              }
              return url;
            });
          });
        console.log('socialUrls:', socialUrls)
        res.status(200).json({data: 
            { ...data.toObject(), 
                dateMonitoring: date , 
                dateInit:date2, 
                dateSiteOpen: date3,
                businessType,
                mainItems,
                possibleSW,
                detailPayment,
                detailTermUse,
                detailPIS,
                detailWithdrawal,
                PSS,
                socialUrls
            }});
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}


export async function getShopList(req,res,next){
    const data = await shopListData.ShopList();
    console.log('data:', data)
    if(data){
        res.status(200).json({data});
    }else{
        res.status(404).json({message:`입력 실패`});
    }
}