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
}

export default MainService;