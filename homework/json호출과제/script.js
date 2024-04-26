const requestValue = {
    API_KEY: '6b706c51546465763439796e667377',
    TYPE: 'json',
    SERVICE: 'ServiceInternetShopInfo',
    START_INDEX: 1,
    END_INDEX: '',
    SHOP_NAME: ''
}
    
function search(){
    let number = document.getElementById('dataNum').value;   // 검색창에 입력한 숫자

    // http://openAPI.seoul.go.kr:8088/(인증키)/json/ServiceInternetShopInfo/1/5/ 형식
    fetch(`http://openapi.seoul.go.kr:8088/${requestValue.API_KEY}/${requestValue.TYPE}/${requestValue.SERVICE}/${requestValue.START_INDEX}/${number}/${requestValue.SHOP_NAME}`) 

    .then((response)=>{
        return response.json();
    })
    .then((data)=> {
        // tbody 초기화
        document.getElementById('getdata').innerHTML = '';
        //console.log(data);  데이터 확인
        const rows = data.ServiceInternetShopInfo.row;  // 배열 형식
        console.log(rows);

        // forEach문으로 rows 배열을 반복 (데이터 1~N행 반복해서 추출)
        rows.forEach((value, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${value.COMPANY}</td>
        <td>${value.SHOP_NAME}</td>
        <td>${value.DOMAIN_NAME}</td>
        <td>${value.TEL}</td>
        <td>${value.YPFORM}</td>
        <td>${value.FIRST_HEO_DATE}</td>
        <td>${value.STAT_NM}</td>
        `;
        document.getElementById('getdata').appendChild(row);  // 테이블 본문에 추가하기
        })
        alert('조회에 성공했습니다.')      // 조회성공 메시지 알림
    })
    .catch(error => {
        alert('오류! 조회에 실패했습니다.')      // 조회오류 메시지 알림
        console.error('Error fetching data:', error);
    });
};

          