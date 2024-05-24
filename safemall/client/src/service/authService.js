import axios from 'axios';
export default class AuthService {
  constructor(tokenStorage) {
    this.http = axios.create({
      baseURL: 'http://localhost:8080/auth',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.tokenStorage = tokenStorage;
  }

  // 사용자를 등록하는 POST 요청을 보냄
  async signup(username, password, name, email, url) {
    try {
      const response = await this.http.post('/signup', {
        username,
        password,
        name,
        email,
        url,
      });
      const { data } = response;
      this.tokenStorage.saveToken(data.token); // 서버에서 반환한 데이터에서 토큰을 추출하여 저장
      return data;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error; // 예외를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 함
    }
  }

  // 로그인을 처리하는 HTTP POST 요청을 보냄
  async login(username, password) {
    try {
      const response = await this.http.post('/login', {
        username,
        password,
      });
      const { data } = response;
      this.tokenStorage.saveToken(data.token); // 반환된 데이터에서 토큰을 추출하여 저장
      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // 예외를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 함
    }
  }

  // 현재 사용자의 정보를 가져오기 위해 인증된 GET 요청을 보냄
  async me() {
    try {
      const token = this.tokenStorage.getToken();
      const response = await this.http.get('/me', {
        headers: { Authorization: `Bearer ${token}` }, // 인증에 필요한 토큰을 HTTP 헤더에 포함
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error; // 예외를 다시 던져서 상위 컴포넌트에서 처리할 수 있도록 함
    }
  }

  async logout() {
    this.tokenStorage.clearToken(); // 토큰을 삭제하여 세션을 종료
  }
}
