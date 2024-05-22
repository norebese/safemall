import mongoose from "mongoose";
import { config } from "../config.js";
import SQ from 'sequelize';

// Sequelize 설정 (MySQL)
const { host, user, database, password, port } = config.mysql;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
  logging: false
});

export async function connectDB(){
    return mongoose.connect(config.mongoDB.host);
 }

// 공통 데이터베이스 연결 함수
export async function connectDatabases() {
  try {
    await sequelize.authenticate();
    console.log('Sequalize MySQL connected.');
    await sequelize.sync();
    await connectDB();
    console.log('Mongoose MongoDB connected.');
  } catch (error) {
    console.error('Unable to connect to the databases:', error);
    throw error;
  }
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