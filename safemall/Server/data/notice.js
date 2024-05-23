import Mongoose, { Schema, now } from 'mongoose';
import {useVirtualId} from '../db/database.js';

const noticeSchema = new Mongoose.Schema({
    no: { type: Number, default: 0},
    Title: {type: String, require: true},
    Date: { type: Date, default: Date.now},
    View: {type: Number, default: 0},
    Contents: {type: String, require: true},
    HotTopic: {type: Boolean}
});

useVirtualId(noticeSchema);

const Notice = Mongoose.model('Practice', noticeSchema);

// export async function getById(id){
//     return Notice.findById(id);
// }

export async function getNoticeList(lastId){
    let query = {};

    if (lastId) {
      // _id가 lastId보다 작은 문서를 찾음
      query = { _id: { $lt: lastId } };
    }

    // MongoDB에서 _id 필드를 기준으로 내림차순 정렬하여 최신 순으로 데이터 가져오기
    const notices = await Notice.find(query)
      .sort({ _id: -1 }) // _id 필드를 기준으로 내림차순 정렬
      .limit(5); // limit 개수만큼 데이터 제한
    console.log(notices)
    return notices;
};

export async function create(Title, Contents){
    return new Notice({
        Title, Contents
    }).save();
};

export async function getNotice(id){
    return Notice.findById(id);
};