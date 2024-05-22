import { config } from '../config.js';
import SQ from 'sequelize';
import mongoose from 'mongoose';

// Sequelize 설정 (MySQL)
const { host, user, database, password, port } = config.MySQL;

export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mysql',
  logging: false
});

// Mongoose 설정 (MongoDB)
async function connectDB() {
  return mongoose.connect(config.mongoDB.host);
}

// 공통 데이터베이스 연결 함수
export async function connectDatabases() {
  try {
    await sequelize.authenticate();
    console.log('Sequelize MySQL connected.');
    await sequelize.sync();
    await connectDB();
    console.log('Mongoose MongoDB connected.');
  } catch (error) {
    console.error('Unable to connect to the databases:', error);
    throw error;
  }
}

export function useVirtualId(schema) {
  schema.virtual('id').get(function () {
    return this._id.toString();
  });
  schema.set('toJSON', { virtuals: true });
  schema.set('toObject', { virtuals: true });
}
