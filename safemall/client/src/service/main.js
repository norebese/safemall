class MainService{
    constructor() {
        // HTTP 클라이언트 설정 및 기본 URL 설정
        this.baseUrl = 'http://localhost:8080';
        this.headers = {
          'Content-Type': 'application/json',
          // 필요에 따라 인증 헤더나 기타 헤더 추가 가능
        };
      }

      async getWarnList(count) {
        console.log(count)
        const queryParams = `?count=${count}`;
        const response = await fetch(`${this.baseUrl}${queryParams}`, {
          method: 'GET',
          headers: this.headers,
        });
        const responseData = await response.json();
        const data = responseData.data; // 실제 데이터는 response.data에 있음
      
        console.log(responseData.message); 
        return data;
      }

      async getSearchResult(keyword) {
        console.log('keyword: ', keyword)
        const isDomain = (input) => {
          const urlPattern = /^(?!:\/\/)([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,}$/;
          return urlPattern.test(input);
        };
        const iskey = isDomain(keyword)
        console.log(iskey)
        let encodedKeyword = '';
        let type = '';

        if(iskey){
          const url = keyword;
          let mainDomain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im)[1];
          mainDomain = mainDomain.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0]
          console.log('MainDomain: ',mainDomain)
          encodedKeyword = encodeURIComponent(mainDomain);
          type = 'domainName'
        }else{
          encodedKeyword = keyword;
          type = 'shopName'
        }
        console.log('encodedKeyword: ', encodedKeyword);
        const queryParams = `?keyword=${encodedKeyword}&type=${type}`;
        const response = await fetch(`${this.baseUrl}/search${queryParams}`, {
          method: 'GET',
          headers: this.headers,
        });
        const responseData = await response.json();
        const data = responseData.result; // 실제 데이터는 response.data에 있음
      
        // console.log(data); 
        return data;
      }
      
      async getSearchResultDetail(id) {
        const response = await fetch(`${this.baseUrl}/search/${id}`, {
          method: 'GET',
          headers: this.headers,
        });
        const responseData = await response.json();
        const data = responseData.result; // 실제 데이터는 response.data에 있음
      
        console.log(responseData.data); 
        return responseData.data;
      }
}

export default MainService;