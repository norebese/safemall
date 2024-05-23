import Mongoose, { Schema, now } from 'mongoose';
import {useVirtualId} from '../db/database.js';

const suggestSchema = new Mongoose.Schema({
    no: { type: Number, default: 0},
    Title: {type: String, require: true},
    Date: { type: Date, default: Date.now},
    View: {type: Number, default: 0},
    Contents: {type: String, require: true}
});

useVirtualId(suggestSchema);

const Suggest = Mongoose.model('suggest', suggestSchema);

export async function create(Title, Contents){
    return new Suggest({
        Title, Contents
    }).save();
};