import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer__item">
        <Link to="/contact">Liên hệ với chúng tôi</Link>
      </div>
      <div className="footer__item">
        <Link to="/contact">Giờ phục vụ</Link>
      </div>
    </div>
  );
};

export default Footer;
