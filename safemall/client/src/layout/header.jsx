import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS import
import { Offcanvas } from 'bootstrap'; // 부트스트랩 Offcanvas 컴포넌트 import

const Header = () => {
    const [offcanvasShown, setOffcanvasShown] = useState(false);

    const toggleOffcanvas = () => {
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        const offcanvas = new Offcanvas(offcanvasElement);
        offcanvas.toggle();
        setOffcanvasShown(!offcanvasShown);
    };
  return (
    <div className="topnav">
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Safe Mall</a>
                    <button className="navbar-toggler" type="button" onClick={toggleOffcanvas}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Safe Mall</h5>
                            <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">쇼핑몰 검색</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">서비스 소개</a>
                                </li>
                                <hr className="divider" />
                                <li className="nav-item">
                                    <a className="nav-link" href="#">공지사항</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">피해예방</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">대처법</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">건의사항</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">제보</a>
                                </li>
                                <hr className="divider" />
                                <li>
                                    <button className="btn">로그인</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  );
};

export default Header;