import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './head.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [setIsLoggedIn]);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          <img
            src="/service_logo.png"
            alt="공강룸 로고"
            className="header__logo-img"
          />
        </Link>
      </div>
      <nav className="header__nav">
        {isLoggedIn ? (
          <>
            <Link to="/loadmap" className="header__button">
              로드맵
            </Link>
            <button onClick={handleLogout} className="header__button">
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to="/component/signup" className="header__button">
              회원가입
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
