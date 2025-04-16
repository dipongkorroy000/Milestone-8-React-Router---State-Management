import React from "react";

const Footer = () => {
  return (
    <div style={{ margin: "5px", display:"flex",gap:"10px",border: '2px solid green',padding: '10px' }}>
      <small>Thankyou for visiting our website</small>
      <a href="/te">Terms</a>
      <a href="pf">Privacy</a>
      <a href="fb">Facebook</a>
    </div>
  );
};

export default Footer;
