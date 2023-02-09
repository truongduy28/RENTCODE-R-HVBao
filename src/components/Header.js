import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navigateList = [
    { route: "/", name: "Trang chủ" },
    { route: "/contact", name: "Liên hệ với chúng tôi" },
    { route: "/status", name: "Trạng thái XXX" },
    { route: "/login", name: "Đăng nhập" },
  ];
  return (
    <div>
      <div className="header-container">
        <div className="hedaer__logo">
          <a href="/">
            <h1>DSCT</h1>
          </a>
        </div>
        <div className="header__navigate">
          {navigateList?.map((navigator) => (
            <div className="header__navigate_item">
              <Link to={navigator.route}>{navigator.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
