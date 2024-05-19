import mongoose from "mongoose"
import { useVirtualId } from "../db/database.js"

const shopSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true }, // 순번
  company: { type: String, required: true, default: '' }, // 상호
  shopNameKor: { type: String, required: true, default: '' }, // 쇼핑몰명(국문)
  shopNameEng: { type: String, required: true, default: '' }, // 쇼핑몰명(영문)
  domainName: { type: String, required: true, unique: true }, // 도메인명
  tel: { type: String, required: true, default: '' }, // 전화번호
  email: { type: String, required: true, default: '' }, // 운영자이메일
  mailOrderNum: { type: String, required: true, default: '' }, // 통신판매번호
  dateInit: { type: Date, required: true, default: '' }, // 최초신고일자
  comAddress: { type: String, required: true, default: '' }, // 회사주소
  businessType: { type: String, required: true, default: '' }, // 영업형태
  mainItems: { type: [String], required: true, default: [] }, // 주요취급품목
  businessState: { type: String, required: true, default: '' }, // 업소상태
  scoreTotal: { type: Number, required: true, default: 0 }, // 전체평가
  scoreBusinessInfo: { type: Number, required: true, default: 0 }, // 사업자정보표시평가
  scoreSW: { type: Number, required: true, default: 0 }, // 청약철회평가
  scorePayment: { type: Number, required: true, default: 0 }, // 결제방법평가
  scoreTermUse: { type: Number, required: true, default: 0 }, // 이용약관평가
  scorePIS: { type: Number, required: true, default: 0 }, // 개인정보보안평가
  dateMonitoring: { type: Date, required: true}, // 모니터링날짜
  dateSiteOpen: { type: Date, required: true, default: '' }, // 사이트개설년도
  possibleSW: { type: String, required: true, default: '' }, // 청약철회가능여부
  detailPayment: { type: [String], required: true, default: [] }, // 결제방법
  detailTermUse: { type: String, required: true, default: '' }, // 이용약관 준수도
  detailPIS: { type: String, required: true, default: '' }, // 개인정보취급방침
  detailStandardTerm: { type: String, required: true, default: '' }, // 표준약관이상개인정보항목요구
  detailSecurity: { type: String, required: true, default: '' }, // 보안서버설치
  detailWithdrawal: { type: String, required: true, default: '' }, // 회원탈퇴방법
  detailMark: { type: String, required: true, default: '' }, // 인증마크
  PSS: { type: String, required: true, default: '' }, // 구매안전서비스
  detailDeliveryDate: { type: String, required: true, default: '' }, // 배송예정일표시
  detailShippingCost: { type: String, required: true, default: '' }, // 철회시배송비부담여부
  detailReportBoard: { type: String, required: true, default: '' }, // 고객불만게시판운영
  detailInitScreen: { type: [String], required: true, default: [] } // 초기화면필수항목중표시사항
}, { timestamps: true });

const ref = {
  "COMPANY": "주식회사 위메프",
  "SHOP_NAME": "위메프/wemakeprice",
  "DOMAIN_NAME": "www.wemakeprice.com",
  "TEL": "1588-4763/1661-4764",
  "EMAIL": "customerservice@wemakeprice.com",
  "UPJONG_NBR": "",
  "YPFORM": " 중개",
  "FIRST_HEO_DATE": "2019-08-06",
  "COM_ADDR": "서울특별시 강남구 영동대로 502 위메프빌딩",
  "STAT_NM": "영업중",
  "TOT_RATINGPOINT": "3",
  "CHOGI_RATINGPOINT": "2",
  "CHUNG_RATINGPOINT": "3",
  "DEAL_RATINGPOINT": "3",
  "PYOJUN_RATINGPOINT": "3",
  "SECURITY_RATINGPOINT": "3",
  "SERVICE": " 컴퓨터 및 주변기기 / 소프트웨어 가전용전기제품/영상, 생활 휴대폰 카메라 의류 신발/가방/패션잡화/귀금속 화장품/향수 가구/생활/주방 출산/유아동/완구 식품 건강용퓸/의료기기 서적/음반/악기 레져/문화 사무용전기제품/사무용기기 유가증권 자동차/자동차용품 기타 예매.예약서비스",
  "CHUNG": "가능",
  "CHOGI": " 상호 대표자 소재지 전화번호 전자우편주소 사업자등록번호 사이버몰이용약관 통신판매신고번호",
  "GYULJE": " 현금입금(무통장,계좌이체등) 신용카드 간편결제 휴대폰 기타",
  "PYOJUN": "표준약관 사용",
  "P_INFO_CARE": "초기화면표시",
  "PER_INFO": "",
  "DEAL_CARE": "에스크로제도",
  "SSL_YN": "",
  "INJEUNG": "",
  "BAESONG_YEJEONG": "있다",
  "BAESONG": "소비자(반품택배비만 부담)",
  "CLIENT_BBS": "있다(공개)",
  "LEAVE": "회원탈퇴 가능",
  "KAESOL_YEAR": "",
  "REG_DATE": "2024-04-30"
}


useVirtualId(shopSchema)
const Shop = mongoose.model('shopsList', shopSchema)

export async function updateDB(){
  const data = await fetch('/apiData.json')
}

export async function getByShopName(SHOP_NAME) {
  return await Shop.find({SHOP_NAME})
}