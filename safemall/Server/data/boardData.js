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
String	shopName  쇼핑몰명
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

function isType(boardtype){
  if(boardtype == 'Notice') return Notice;
  else if(boardtype == 'Prevent') return Prevent;
  else if(boardtype == 'Suggest') return Suggest;
  else if(boardtype == 'Report') return Report;
  else return false;
}

// 글 목록
export async function getboardList(boardtype, lastId){
  try{
    const query = lastId ? { _id: { $lt: lastId } } : {};
    return await isType(boardtype).find(query).sort({ _id: -1 }).limit(5);
  }catch(e){
    console.log('Error boardList: ', e);
    return false;
  }
}

// 글 상세
export async function getBypostId(boardtype, postId){
  try{
    return await isType(boardtype).findById(postId);
  }catch(e){
    console.log('Error postDetail: ', e);
    return false;
  }
}

// 글 작성
export async function Create(boardtype, post){
  try{
    return new (isType(boardtype))(post).save().then((data)=>{
      return data.id;
    });
  }catch(e){
    console.log('Error create: ', e);
    return false;
  }
}

// 글 수정 / 답변 수정 / 답변 삭제
export async function Edit(boardtype, post){
  try{
    return await isType(boardtype).updateOne({ _id: post._id }, post);
  }catch(e){
    console.log('Error edit: ', e);
    return false;
  }
}

// 글 삭제
export async function Deletepost(boardtype, postId){
  try{
    return await isType(boardtype).findByIdAndDelete(postId);
  }catch(e){
    console.log('Error Deletepost: ', e);
    return false;
  }
}


// 공지사항 목록
// 공지사항 상세
// 예방법 목록
// 예방법 상세
// 피해 대처법(리엑트에서 처리되는 로직)
// 건의사항 목록
// 건의사항 작성
// 건의사항 상세
// 건의사항 상세 수정
// 건의사항 상세 삭제
// 제보
// 제보 작성
// 제보 상세
// 제보 수정
// 제보 삭제
// boardController
//     게시글 목록 가져오기
//     게시글 상세 가져오기
//     게시글 수정 가져오기
//     게시글 삭제 가져오기