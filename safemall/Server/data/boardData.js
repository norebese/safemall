import mongoose from "mongoose";
import { useVirtualId } from "../db/database.js"

// 공지사항 스키마
/*
Type	Name	
Int	no	순번
String	Title	공지사항 제목
Date	Date	공지사항 작성일
Int	View	조회수
String	Contents	공지사항 내용
Bool	HotTopic	중요공지여부
*/
const noticeSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true }, // 순번
  Title: {type:String, required: true}, // 글 제목
  View: {type:Number, required: true, default:0}, // 조회수
  Contents: {type:String, required:true, default:''}, // 글 내용
  HotTopic: {type:Boolean, required:true, default:0} // 중요공지 여부 기본값은 false 0
}, { timestamps: true })
useVirtualId(noticeSchema)
const Notice = mongoose.model('NoticeList', noticeSchema);

// 예방법 스키마
/*
Type	Name	
Int	no	순번
String	Title	예방법 제목
Date	Date	예방법 작성일
Int	View	조회수
String	Contents	예방법 내용
Bool	HotTopic	중요예방법 여부
*/
const preventSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true }, // 순번
  Title: {type:String, required: true}, // 글 제목
  View: {type:Number, required: true, default:0}, // 조회수
  Contents: {type:String, required:true, default:''}, // 글 내용
  HotTopic: {type:Boolean, required:true, default:0} // 중요예방법 여부 기본값은 false 0
}, { timestamps: true })
useVirtualId(preventSchema)
const Prevent = mongoose.model('PreventList', preventSchema);

// 건의사항 스키마
/*
Type	Name	
Int	no	순번
String	Title	제목
Date	Date	작성일
Int	View	조회수
String	Contents	내용
Bool	State	처리여부
String	Comments	답변
*/
const suggestSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true }, // 순번
  Title: {type:String, required: true}, // 글제목
  Author: {type:String, required: true}, // 작성자
  View: {type:Number, required: true, default:0}, // 조회수
  Contents: {type:String, required:true, default:''}, // 글 내용
  State: {type:Number, required: true, default:0}, // 처리여부 기본값 0(미완료), 1(처리중), 2(완료)
  Comments: {type:String, required: true, default: ''} // 답변
}, { timestamps: true })
useVirtualId(suggestSchema)
const Suggest = mongoose.model('SuggestList', suggestSchema);

// 제보 스키마
/*
Type	Name	Optional
Int	no	
String	Title	제목
String	shopName	쇼핑몰명
String	domain	도메인명
String	company	사업자명 상호
String	companyNum	사업자등록번호
String	Other	기타사항
Date	Date	작성일
Int	View	조회수
Bool	State	처리여부
String	Comments	답변
*/
const reportSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true }, // 순번
  Title: {type:String, required: true}, // 글제목
  Author: {type:String, required: true}, // 작성자
  shopName: {type:String, required: true, default:''}, // 쇼핑몰명
  domainName: {type:String, required: true, default:''}, // 도메인명
  company: {type:String, required: true, default:''}, // 사업자명(상호)
  companyNum: {type:String, required: true, default:''}, // 사업자등록번호
  Other: {type:String, required: true, default:''}, // 기타사항
  View: {type:Number, required: true, default:0}, // 조회수
  State: {type:Number, required: true, default:0}, // 처리여부 기본값 0(미완료), 1(처리중), 2(완료)
  Comments: {type:String, required: true, default: ''} // 답변
}, { timestamps: true })
useVirtualId(reportSchema)
const Report = mongoose.model('ReportList', reportSchema);

