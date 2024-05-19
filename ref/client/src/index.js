import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth';
import TweetService from './service/tweet';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AuthErrorEventBus } from './context/AuthContext';
import HttpClient from './network/http';
import TokenStorage from './db/token';
import Socket from './network/socket';

// 시작 URL 주소(서버 주소)
const baseURL = process.env.REACT_APP_BASE_URL;
// 토큰 객체
const tokenStorage = new TokenStorage();
// 웹서버 클리이언트 객체
const httpClient = new HttpClient(baseURL);
// 인증오류 이벤트 객체
const authErrorEventBus = new AuthErrorEventBus();
// 인증 서비스 객체(웹서버 클리이언트, 토큰)
const authService = new AuthService(httpClient, tokenStorage);
// 소켓 클라이언트 객체(baseURL과 token 스토리지에서 토큰을 가져와서 넣음)
const socketClient = new Socket(baseURL, () => tokenStorage.getToken());
// 트윗 서비스(웹서버 클라이언트, token 스토리지, 소켓 클라이언트를 넣음)
const tweetService = new TweetService(httpClient, tokenStorage, socketClient);

ReactDOM.render(
  // 클라이언트 라우터
  <BrowserRouter>
    {/* 로그인 인증 처리 */}
    <AuthProvider
      authService={authService}
      authErrorEventBus={authErrorEventBus}
    >
      <App tweetService={tweetService} />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
