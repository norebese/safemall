const TOKEN = 'token';

export default class TokenStorage {
  saveToken(token) { //saveToken 메서드는 주어진 토큰을 로컬 스토리지에 저장합니다. TOKEN 상수를 키로 사용하여 토큰을 저장
    localStorage.setItem(TOKEN, token);
  }

  getToken() { //로컬 스토리지에서 저장된 토큰을 가져옵니다. TOKEN 상수를 키로 사용하여 저장된 토큰을 반환
    return localStorage.getItem(TOKEN);
  }

  clearToken() { //로컬 스토리지에서 저장된 토큰을 제거
    localStorage.clear(TOKEN);
  }
}
