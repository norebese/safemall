import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { Button } from 'react-bootstrap'; // 부트스트랩 컴포넌트 임포트
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 파일 임포트
import styles from "./loginPage.module.css";
import Login from '../../components/signin'
import SignUp from '../../components/signup';

function App() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('login'); // 'login' 또는 'signup'
  const { isLoggedIn } = useContext(AuthContext); // 로그인 상태 가져오기

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  // 로그인 버튼 클릭 시 실행되는 함수
  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  // 회원가입 버튼 클릭 시 실행되는 함수
  const handleSignUpClick = () => {
    setCurrentPage('signup');
  };

  return (
    <div className="App">
      <header className={styles.Appheader}>
          {/* 조건부 렌더링을 사용하여 현재 페이지에 맞는 컴포넌트를 보여줍니다. */}
          {currentPage === 'login' ? <Login /> : <SignUp />}

          {/* 로그인 및 회원가입 버튼 */}
          <div className="mt-3" id={styles.switch}>
            <Button
              variant="primary"
              className="mr-3"
              onClick={handleLoginClick}
            >
              로그인
            </Button>
            <Button variant="secondary" onClick={handleSignUpClick}>
              회원가입
            </Button>
          </div>
      </header>
    </div>
  );
}

export default App;
