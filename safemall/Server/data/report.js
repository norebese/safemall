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

export async function getReportList(){
    return Report.find().sort({Date: -1});
};

export async function inputReport(Title, ShopName, Domain, Owner, Etc){
    return new Report({
        Title, Writer:'홍길동',ShopName, Domain, Owner, Etc
    }).save();
};

export async function getReport(id){
    return Report.findById(id);
};