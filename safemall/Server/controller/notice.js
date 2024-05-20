import * as noticeRepository from '../data/notice.js';
import fetch from 'node-fetch';

//하나의 공지을 가져오는 함수
export async function getNotice(req,res,next){
    const id = req.params.id;
    console.log(id);
    const notice = await noticeRepository.getById(id);
    if(notice){
        const date = notice.Date.toISOString().split('T')[0];
        res.render('noticeDetail', { notice: { ...notice.toObject(), Date: date } });
    }else{
        res.status(404).json({message:`${id}의 공지가 없습니다`});
    }
}

//공지를 생성하는 함수
export async function createNotice(req,res,next){
    const { Title, Contents } = req.body;
    console.log(Title, Contents)
    const notice = await noticeRepository.create(Title, Contents);
    if(notice){
        console.log(notice)
        res.redirect(`/notice/${notice.id}`);
    }
    // res.status(201).json(notice);
}

export async function inputData(req,res,next){
    const tempApi = '6b706c51546465763439796e667377';
    const response = await fetch(`http://openapi.seoul.go.kr:8088/${tempApi}/json/ServiceInternetShopInfo/1/10/`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const items = data.ServiceInternetShopInfo.row;
    items.forEach((items, index)=>{
        const result = noticeRepository.inputData(items);
    })
    res.status(201).json(items);
}