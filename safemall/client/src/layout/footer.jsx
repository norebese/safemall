import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS import
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        // 검색 버튼 클릭 시 실행될 동작 추가
        console.log('Search button clicked');
    };

    const handleHomeClick = () => {
        // 홈 버튼 클릭 시 실행될 동작 추가
        navigate('/report')
        console.log('Home button clicked');
    };

    const handleProfileClick = () => {
        // 프로필 버튼 클릭 시 실행될 동작 추가
        console.log('Profile button clicked');
    };

  return (
    <div className="bottomnav">
      <nav className="navbar bg-body-tertiary fixed-bottom">
        <div className="bottom-nav">
          <button onClick={() => handleSearchClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
          <button onClick={() => handleHomeClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
            </svg>
          </button>
          <button onClick={() => handleProfileClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );


}

export default Footer;
