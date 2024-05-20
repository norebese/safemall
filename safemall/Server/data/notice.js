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

const apiSchema = new Mongoose.Schema({
    COMPANY: {type: String},
    SHOP_NAME: {type: String},
    DOMAIN_NAME: {type: String},
    TEL: {type: String},
    EMAIL: {type: String},
    UPJONG_NBR: {type: String},
    YPFORM: {type: String},
    FIRST_HEO_DATE: {type: String},
    COM_ADDR: {type: String},
    STAT_NM: {type: String},
    TOT_RATINGPOINT: {type: String},
    CHOGI_RATINGPOINT: {type: String},
    CHUNG_RATINGPOINT: {type: String},
    DEAL_RATINGPOINT: {type: String},
    PYOJUN_RATINGPOINT: {type: String},
    SECURITY_RATINGPOINT: {type: String},
    SERVICE: {type: String},
    CHUNG: {type: String},
    CHOGI: {type: String},
    GYULJE: {type: String},
    PYOJUN: {type: String},
    P_INFO_CARE: {type: String},
    PER_INFO: {type: String},
    DEAL_CARE: {type: String},
    SSL_YN: {type: String},
    INJEUNG: {type: String},
    BAESONG_YEJEONG: {type: String},
    BAESONG: {type: String},
    CLIENT_BBS: {type: String},
    LEAVE: {type: String},
    KAESOL_YEAR: {type: String},
    REG_DATE: {type: String}
})

useVirtualId(noticeSchema);
useVirtualId(apiSchema);

const Notice = Mongoose.model('Practice', noticeSchema);
const API = Mongoose.model('API', apiSchema);

// export async function getById(id){
//     return Notice.findById(id);
// }

export async function getById(id){
    return Notice.findById(id);
};

export async function create(Title, Contents){
    return new Notice({
        Title, Contents
    }).save();
};

export async function inputData(items){
    return new API(items).save();
}