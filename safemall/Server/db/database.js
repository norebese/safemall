import mongoose from "mongoose";
import { config } from "../config.js";

let db;

export async function connectMongoDB(){
  return mongoose.connect(config.mongoDB.host);
}

export function useVirtualId(schema){
  schema.virtual('id').get(function(){
    return this._id.toString();
  })
  schema.set('toJSN', {virtuals:true});
  schema.set('toObject', {virtuals:true});
}