class SuggestService{
  constructor() {
      // HTTP 클라이언트 설정 및 기본 URL 설정
      // this.baseUrl = 'http://localhost:8080';
      this.baseUrl = process.env.REACT_APP_BASEURL;
      this.headers = {
        'Content-Type': 'application/json',
        // 필요에 따라 인증 헤더나 기타 헤더 추가 가능
      };
    }

    // 건의사항 게시판 리스트
    async getSuggestList(lastNo) {
      console.log(`lastNo: ${lastNo}`)
      const queryParams = lastNo ? `?lastNo=${lastNo}` : '';
      const response = await fetch(`${this.baseUrl }board/suggest${queryParams}`, {
        method: 'GET',
        headers: this.headers,
      });
      const responseData = await response.json();
      const data = responseData.data; // 실제 데이터는 response.data에 있음
    
      // console.log(data); // 데이터 확인
      return data;
    }

    // 건의사항 작성
    async submitSuggest(formData) {
      const response = await fetch(`${this.baseUrl}board/suggest/createSuggest`, {
        method: 'post',
        headers: this.headers,
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      const data = responseData.data; // 실제 데이터는 response.data에 있음
    
      console.log(data); // 데이터 확인
      return data;
    }

    // 건의사항 게시글 상세정보
    async getSuggestDetail(id) {
      console.log(id)
      const response = await fetch(`${this.baseUrl}board/suggest/${id}`, {
        method: 'GET',
        headers: this.headers,
      });
      const responseData = await response.json();
      const data = responseData.data; // 실제 데이터는 response.data에 있음
    
      console.log(data); // 데이터 확인
      return data;
    }
};

export default SuggestService;