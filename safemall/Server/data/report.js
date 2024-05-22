import Mongoose, { Schema, now } from 'mongoose';
import {useVirtualId} from '../db/database.js';

const reportSchema = new Mongoose.Schema({
    Title: {type: String, require: true},
    Date: { type: Date, default: Date.now},
    Writer: {type: String, require: true},
    View: {type: Number, default: 0},
    ShopName: {type: String, require: true},
    Domain: {type: String, require: true},
    Owner: {type: String, require: true},
    Etc: {type: String, require: true}
});

useVirtualId(reportSchema);

const Report = Mongoose.model('report', reportSchema);

export async function getReportList(lastId){
    let query = {};

    if (lastId) {
      // _id가 lastId보다 작은 문서를 찾음
      query = { _id: { $lt: lastId } };
    }

    // MongoDB에서 _id 필드를 기준으로 내림차순 정렬하여 최신 순으로 데이터 가져오기
    const reports = await Report.find(query)
      .sort({ _id: -1 }) // _id 필드를 기준으로 내림차순 정렬
      .limit(5); // limit 개수만큼 데이터 제한

    return reports;
};

export async function inputReport(Title, Writer, ShopName, Domain, Owner, Etc){
    return new Report({
        Title, Writer,ShopName, Domain, Owner, Etc
    }).save();
};

export async function getReport(id){
    return Report.findById(id);
};