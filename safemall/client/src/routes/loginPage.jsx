import React, { useState, useContext } from 'react';
import styles from "./loginPage.module.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // 로그인 함수 사용
    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
        Nickname: ''
    });
    const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

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

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await login(formData); // 실제 로그인 서비스 사용 시
        // login(formData); // 로그인 함수 호출
        navigate('/');
    } catch (error) {
        console.error('Error submitting report:', error);
        // 오류 처리 로직 추가 가능
    }
    };

    return (
        <main>
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
            <form onSubmit={handleSubmit}>
                <div className={styles.testLogin}>
                    <label htmlFor="Email" className={styles.formlabel}>이메일: </label>
                    <input
                        type="text"
                        name="Email"
                        className={styles.forminput}
                        placeholder="이메일을 입력해 주세요"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="Password" className={styles.formlabel}>비밀번호: </label>
                    <input
                        type="password"
                        name="Password"
                        className={styles.forminput}
                        placeholder="비밀번호를 입력해 주세요"
                        value={formData.Password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                    <label htmlFor="Nickname" className={styles.formlabel}>닉네임: </label>
                    <input
                        type="text"
                        name="Nickname"
                        className={styles.forminput}
                        placeholder="닉네임을 입력해 주세요"
                        value={formData.Nickname}
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
