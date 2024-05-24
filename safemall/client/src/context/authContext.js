import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({authService, children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    const [isAdmin, setisAdmin] = useState(false);
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        // 페이지 로드 시 로컬 스토리지에서 토큰과 닉네임 가져오기
        const token = sessionStorage.getItem('jwt');
        const storedNickname = sessionStorage.getItem('nickname');

        if (token && storedNickname) {
            // 로컬 스토리지에서 토큰과 닉네임이 있는 경우
            setIsLoggedIn(true);
            setNickname(storedNickname);
        } else {
            // 로컬 스토리지에 토큰이 없는 경우
            setIsLoggedIn(false);
            setNickname('');
        }
    }, [authService]);

    const login = (data) => {
        console.log(data)
        const generateToken = () => {
            return Math.random().toString(36).substr(2);
        };
        const token = generateToken();
        sessionStorage.setItem('jwt', token);
        sessionStorage.setItem('nickname', data.Nickname);

        if(data.isAdmin) setisAdmin(true)
        console.log('로그인 성공:', { token, nickname: data.Nickname });
        setIsLoggedIn(true);
        setNickname(sessionStorage.getItem('nickname'));
    };

    const logout = () => {
        // 실제 로그아웃 로직
        sessionStorage.removeItem('jwt');
        sessionStorage.removeItem('nickname');
        setIsLoggedIn(false);
        setNickname('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, nickname, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};
