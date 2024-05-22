import React, { useState, useContext, useEffect } from 'react';
import { Offcanvas } from 'bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, logout } = useContext(AuthContext);
    const [offcanvasInstance, setOffcanvasInstance] = useState(null);
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        const offcanvas = new Offcanvas(offcanvasElement);
        setOffcanvasInstance(offcanvas);

        const handleToggleOffcanvas = () => {
            setOffcanvasOpen(!offcanvasOpen);
        };

        offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
            setOffcanvasOpen(false);
        });

        document.getElementById('navbar-toggler-button').addEventListener('click', handleToggleOffcanvas);

        return () => {
            document.getElementById('navbar-toggler-button').removeEventListener('click', handleToggleOffcanvas);
            offcanvas.dispose();
        };
    }, [offcanvasOpen]);

    const handleAuthButtonClick = () => {
        if (isLoggedIn) {
            logout();
            navigate('/');
        } else {
            navigate('/login');
        }
    };

    useEffect(() => {
        if (offcanvasInstance && offcanvasInstance.isShown) {
            offcanvasInstance.hide();
        }
    }, [location.pathname, offcanvasInstance]);

    return (
        <div className="topnav">
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Safe Mall</Link>
                    <button id="navbar-toggler-button" className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`offcanvas offcanvas-end${offcanvasOpen ? ' show' : ''}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Safe Mall</h5>
                            <button type="button" className="btn-close" onClick={() => setOffcanvasOpen(false)} aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">쇼핑몰 검색</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link">서비스 소개</Link>
                                </li>
                                <hr className="divider" />
                                <li className="nav-item">
                                    <Link to="/notices" className="nav-link">공지사항</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/prevention" className="nav-link">피해예방</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/countermeasure" className="nav-link">대처법</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/suggestions" className="nav-link">건의사항</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/report" className="nav-link">제보</Link>
                                </li>
                                <hr className="divider" />
                                <li>
                                    <button className="btn" onClick={handleAuthButtonClick}>
                                        {isLoggedIn ? '로그아웃' : '로그인'}
                                    </button>
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
