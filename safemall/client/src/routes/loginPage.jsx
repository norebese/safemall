import React, { useState, useContext, useEffect } from 'react';
import styles from "./loginPage.module.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function LoginPage() {
    const navigate = useNavigate();
    const { login, isLoggedIn, signUp } = useContext(AuthContext); // 로그인 함수 사용
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        nickname: ''
    });

    useEffect(() => { //로그인되어 있으면(isLoggedIn이 true일 때) 메인 페이지(/)로 자동으로 리다이렉트
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const handleGoogleLogin = () => {
        // Google 로그인 로직 추가
        console.log('Google 로그인 클릭됨');
    };

    const handleNaverLogin = () => {
        // Naver 로그인 로직 추가
        console.log('Naver 로그인 클릭됨');
    };

    const handleNewRegistration = () => {
        // 신규 회원가입 로직 추가
        console.log('신규 회원가입 클릭됨');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    // const handleChange = (e) => {
    //     const { name, value, checked } = e.target;
    //     const val = name === 'isAdmin' ? checked : value;  // isAdmin 필드일 경우 checked 값을 사용
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [name]: val
    //     }));
    // };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await signUp(formData); 
        // navigate('/');
    } catch (error) {
        console.error('Error submitting report:', error);
        // 오류 처리 로직 추가 가능
    }
    };

    return (
        <main>
            <div className={styles.main}>
                <h1>회원가입</h1>
                <div className={styles.googleAuth}>
                    <button className={styles.googleAuthbtn} onClick={handleGoogleLogin}>
                        <p>Sign in with Google</p>
                    </button>
                </div>
                <div className={styles.naverAuth}>
                    <button className={styles.naverAuthbtn} onClick={handleNaverLogin}>
                        <p>네이버 로그인</p>
                    </button>   
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.testLogin}>
                    <div>로그인 테스트 용입니다</div>
                    <label htmlFor="email" className={styles.formlabel}>이메일: </label>
                    <input
                        type="email"
                        name="email"
                        className={styles.forminput}
                        placeholder="이메일을 입력해 주세요"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                    <label htmlFor="password" className={styles.formlabel}>비밀번호: </label>
                    <input
                        type="password"
                        name="password"
                        className={styles.forminput}
                        placeholder="비밀번호를 입력해 주세요"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                    <label htmlFor="nickname" className={styles.formlabel}>닉네임: </label>
                    <input
                        type="text"
                        name="nickname"
                        className={styles.forminput}
                        placeholder="닉네임을 입력해 주세요"
                        value={formData.nickname}
                        onChange={handleChange}
                        required
                    />
                    <div className={styles.formactions}>
                        <button type="submit" className={styles.formbutton}>제출</button>
                    </div> 
                </div>
            </form>
            <div className={styles.NewRegist}>
                <button className={styles.NewRegistbtn} onClick={handleNewRegistration}>
                    신규 회원가입
                </button>
            </div>
        </main>
    );
}

export default LoginPage;
