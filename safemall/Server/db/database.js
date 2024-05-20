import mongoose from "mongoose";
import { config } from "../config.js";

// let db;

// export async function connectMongoDB(){
//   return mongoose.connect(config.mongoDB.host);
// }

// export function useVirtualId(schema){
//   schema.virtual('id').get(function(){
//     return this._id.toString();
//   })
//   schema.set('toJSN', {virtuals:true});
//   schema.set('toObject', {virtuals:true});
// }

export async function connectMongoDB(){
    return mongoose.connect(config.mongoDB.host);
 }

 export function useVirtualId(schema){
    schema.virtual('id').get(function(){
       return this._id.toString();
    });
    schema.set('toJSN', {virtuals:true}); //스키마 형태 세팅
    schema.set('toObject', {virtuals:true}); //스키마 형태 세팅
 }

 let db;

export function getpractice(){
   return db.collection('practice');
}