const requestValue = {
    API_KEY: '6b706c51546465763439796e667377',
    TYPE: 'json',
    SERVICE: 'ServiceInternetShopInfo',
    START_INDEX: 1,
    END_INDEX: 1000,
    SHOP_NAME: ''
};

// 5개씩, 10개씩, 20개씩 수에 맞는 데이터 출력 함수
function fetchPosts(startIndex, endIndex) {
    requestValue.START_INDEX = startIndex;
    requestValue.END_INDEX = endIndex;

    fetch(`http://openapi.seoul.go.kr:8088/${requestValue.API_KEY}/${requestValue.TYPE}/${requestValue.SERVICE}/${startIndex}/${endIndex}`)
        .then(response => {
        if (!response.ok) {
            throw new Error('네트워크 상태가 좋지 않습니다. 잠시 후 다시 시도해주세요.');
        }
        return response.json();
        })
        .then(data => {
        displayPosts(data);    // 데이터 받으면 displayPosts 함수 실행
    });
}; 

function displayPosts(data) {
    const tableBody = document.getElementById('getdata');
    tableBody.innerHTML = '';    // tableBody 초기화
  
    // Create and append post elements
    data.ServiceInternetShopInfo.row.forEach((value, index) => {
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
      tableBody.appendChild(row);
    });
};

let viewCount = 5; // 기본 보기 개수 (5개 항목)
let lastDisplayedIndex = 0; // 마지막으로 표시된 인덱스
function nextbtn() {
    // 현재 보기 개수와 마지막으로 표시된 인덱스를 기반으로 데이터 가져오기
    fetchPosts(lastDisplayedIndex + 1, lastDisplayedIndex + viewCount);
    // 마지막으로 표시된 인덱스 업데이트
    lastDisplayedIndex += viewCount;
};


// 기본 화면 표시 5개씩
fetchPosts(1, 5);

// 5개씩, 10개씩, 20개씩 옵션 바뀔때마다 fetchPosts 함수 인자 재할당
const viewCountSelect = document.querySelector('select[name="viewCount"]');
viewCountSelect.addEventListener('change', () => {
    const selectedViewCount = parseInt(viewCountSelect.value);
    fetchPosts(1, selectedViewCount);
});


const search = () => {
    let searchKeyword = document.getElementById('searchKeyword').value;

    fetch(`http://openapi.seoul.go.kr:8088/${requestValue.API_KEY}/${requestValue.TYPE}/${requestValue.SERVICE}/${requestValue.START_INDEX}/${requestValue.END_INDEX}/${searchKeyword}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('네트워크 상태가 좋지 않습니다. 잠시 후 다시 시도해주세요.');
            }
            return response.json(); // JSON 형식으로 응답을 받음
        })
        .then(data => {
            // 받아온 JSON 데이터를 처리하여 출력
            const rows = data.ServiceInternetShopInfo.row;
            const tableBody = document.getElementById('getdata');
            tableBody.innerHTML = ''; // 기존 테이블 내용 초기화

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
                tableBody.appendChild(row); // 테이블 본문에 추가
            });

            alert('조회에 성공했습니다.');
        })
        .catch(error => {
            alert('오류! 조회에 실패했습니다.');
            console.error('Error fetching data:', error);
        });
};



// const btn1 = () => {
//     fetch(`http://openapi.seoul.go.kr:8088/${requestValue.API_KEY}/${requestValue.TYPE}/${requestValue.SERVICE}/1/10`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('네트워크 상태가 좋지 않습니다. 잠시 후 다시 시도해주세요.');
//         }
//         return response.json(); // JSON 형식으로 응답을 받음
//     })
//     .then(data => {
//         // 받아온 JSON 데이터를 처리하여 출력
//         const rows = data.ServiceInternetShopInfo.row;
//         const tableBody = document.getElementById('getdata');
//         tableBody.innerHTML = ''; // 기존 테이블 내용 초기화

//         rows.forEach((value, index) => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${index + 1}</td>
//                 <td>${value.COMPANY}</td>
//                 <td>${value.SHOP_NAME}</td>
//                 <td>${value.DOMAIN_NAME}</td>
//                 <td>${value.TEL}</td>
//                 <td>${value.YPFORM}</td>
//                 <td>${value.FIRST_HEO_DATE}</td>
//                 <td>${value.STAT_NM}</td>
//             `;
//             tableBody.appendChild(row); // 테이블 본문에 추가
//         });
//     });
// }


