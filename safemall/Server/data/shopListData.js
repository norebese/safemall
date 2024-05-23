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

useVirtualId(shopSchema)
const Shop = mongoose.model('shopsList', shopSchema)

export async function updateDB(){
  
}

export async function getByShopName(SHOP_NAME) {
  const businessState = "영업중";
  return await Shop.find({ shopNameKor: SHOP_NAME, businessState: businessState });
}

export async function getByDomainName(domain) {
  const businessState = "영업중";
  return await Shop.find({ domainName: domain, businessState: businessState });
}

export async function getDetail(id) {
  return await Shop.findById(id)
}