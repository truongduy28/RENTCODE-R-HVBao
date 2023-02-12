import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [backgroundHeader, setBackgroundHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let y = (window.scrollY || window.pageYOffset) / 150;
      if (y < 1) {
        setBackgroundHeader(false);
      } else {
        setBackgroundHeader(true);
      }
    });
  }, [window]);

  const navigateList = [
    { route: "/", name: "Trang chủ" },
    { route: "/contact", name: "Liên hệ với chúng tôi" },
    { route: "/checkstatus", name: "Trạng thái XXX" },
    { route: "/login", name: "Đăng nhập" },
  ];

  return (
    <div>
      <div
        className="header-container"
        style={{
          backgroundColor: backgroundHeader ? "#1e4b46" : "unset",
        }}
      >
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
