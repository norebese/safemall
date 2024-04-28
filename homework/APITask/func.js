let prePageNum = 1;
const searchData = {};

function addData(name, data) {
    searchData[name] = data;
}

function calldata(){
    const tempApi = '6b706c51546465763439796e667377';
    const word = document.getElementById('here')
    const number = document.getElementById('dataNum').value;
    const itemsPerPage = document.querySelector('.form-select').value;
    fetch('http://openapi.seoul.go.kr:8088/'+tempApi+'/json/ServiceInternetShopInfo/1/'+number+'/')
    .then((response)=>{
        return response.json();
    })
    .then((data)=> {
        const item = data.ServiceInternetShopInfo.row;
        const totalPages = Math.ceil(item.length / itemsPerPage);
        console.log(totalPages);
        const pagiantion = document.querySelector('#pagehere');
        item.forEach((item, index)=>{
            addData(item.SHOP_NAME, { 'index': index+1, 'COMPANY': item.COMPANY, 'SHOP_NAME': item.SHOP_NAME, 'DOMAIN_NAME': item.DOMAIN_NAME, 'TEL': item.TEL, 'YPFORM': item.YPFORM, 'FIRST_HEO_DATE': item.FIRST_HEO_DATE, 'STAT_NM': item.STAT_NM});
            let pageNum = pageSet(index, itemsPerPage);
            word.innerHTML +='<tr class="page'+pageNum+'" style="display: none;"><td>'+(index+1)+'</td><td>'+item.COMPANY+'</td><td>'+item.SHOP_NAME
            +'</td><td>'+item.DOMAIN_NAME
            +'</td><td>'+item.TEL+'</td><td>'+item.YPFORM+'</td><td>'+item.FIRST_HEO_DATE+'</td><td>'
            +item.STAT_NM+'</td></tr>';
        })
        if(totalPages>5) totalPages = 5;
        for(let i=1; i<=totalPages; i++){
            pagiantion.innerHTML += `<li class="page-item"><a class="page-link" onclick="paging(${i})">${i}</a></li>`
        };
        paging(1);
    });
};

function pageSet(num, perPage){
    const result = Math.floor(num / perPage) + 1;
    return result;
}

function paging(val){
    const prePage = document.querySelectorAll('.page' + prePageNum);
    for (let i = 0; i < prePage.length; i++) {
        prePage[i].style = 'display: none;';
    }
    prePageNum = val;

    const targets = document.querySelectorAll('.page' + val);
    for (let i = 0; i < targets.length; i++) {
        targets[i].style = '';
    }
}

function dataSearch(){
    const keyword = document.getElementById('keyword').value;
    const word = document.getElementById('here')
    if(searchData.hasOwnProperty(keyword)){
        word.innerHTML ='<tr><td>'+searchData[keyword].index+'</td><td>'+searchData[keyword].COMPANY+'</td><td>'+searchData[keyword].SHOP_NAME
            +'</td><td>'+searchData[keyword].DOMAIN_NAME
            +'</td><td>'+searchData[keyword].TEL+'</td><td>'+searchData[keyword].YPFORM+'</td><td>'+searchData[keyword].FIRST_HEO_DATE+'</td><td>'
            +searchData[keyword].STAT_NM+'</td></tr>';
    }else{
        word.innerHTML = '<p>검색 결과가 없습니다</p>';
    }
    const pagiantion = document.querySelector('#pagehere');
    pagiantion.innerHTML = '';
}