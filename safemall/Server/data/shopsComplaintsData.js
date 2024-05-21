import mongoose from 'mongoose';
import fs from "fs/promises";
import { useVirtualId } from "../db/database.js"

/*
Type	Name	
Int	no	순번
Int	Year	년도
Int	YearNum	연번
String	shopName	쇼핑몰명
String	MainItems	취급품목
Int	Totalreport	총접수건
Int	Unprocess	미처리건
*/

const shopSchema = new mongoose.Schema({
  no: { type: Number, required: true, unique: true }, // 순번
  Year: { type: Date, required: true }, // 년도
  YearNum: { type: Number, required: true,  default: '' }, // 연번
  shopName: { type: String, required: true, default: '' }, // 쇼핑몰명
  MainItems: { type: [String], required: true, default: [] }, // 취급품목
  Totalreport: { type: Number, required: true, default: 0 }, // 총 접수건
  Unprocess: { type: Number, required: true, default: 0 }, // 미처리건
}, { timestamps: true });
useVirtualId(shopSchema)

const Shop = mongoose.model('shopsComplaintsList', shopSchema);

export async function updateDB() {
  try {
    // JSON 파일에서 데이터 읽기
    const data = await fs.readFile('data/apidata/shopsComplaintsList.json', 'utf-8');
    const shops = JSON.parse(data);

    // 데이터 하나씩 MongoDB에 삽입
    for (const shop of shops) {
      try {
        await Shop.updateOne({ no: shop.no }, shop, { upsert: true });
        console.log(`Shop no ${shop.no} updated successfully.`);
      } catch (error) {
        console.error(`Error updating shop no ${shop.no}:`, error);
      }
    }
    console.log('All data has been updated to MongoDB.');
    return true;
  } catch (error) {
    console.error('Error reading JSON file or updating MongoDB:', error);
    return false;
  }
}