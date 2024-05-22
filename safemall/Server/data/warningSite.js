import Mongoose, { Schema, now } from 'mongoose';
import {useVirtualId} from '../db/database.js';

const warningSiteSchema = new Mongoose.Schema({
    no: {type: Number, require: true},
    shopName: {type: String, require: true},
    MainItems: {type: String, require: true},
    Totalreport: {type: String, require: true},
    Unprocess: {type: String, require: true}
});

useVirtualId(warningSiteSchema);

const warning = Mongoose.model('warning', warningSiteSchema);

export async function getList(count){
    const limitCount = 3 + parseInt(count);
    console.log(limitCount)
    return warning.find().sort({ _id: -1 }).limit(limitCount);
};