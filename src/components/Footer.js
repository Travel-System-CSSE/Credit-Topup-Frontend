import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <button className="btn footer-btn">FeedBack</button>
        <p>Epic Tracking &reg; 2022</p>
      </div>
      <article className="social-icons">
        <img
          src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
          alt="logo"
        />
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="logo"
        />
        <img
          src="https://img.icons8.com/color/48/000000/twitter--v1.png"
          alt="logo"
        />
        <img
          src="https://img.icons8.com/color/48/000000/gmail-new.png"
          alt="logo"
        />
      </article>
    </footer>
  );
};

export default Footer;
