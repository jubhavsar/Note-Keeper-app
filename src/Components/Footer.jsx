import React from 'react';

const Footer = () => {
  const curruntYear = new Date().getFullYear();
  return (
    <footer>
      <p>@ Copyright {curruntYear} </p>
    </footer>
  )
}

export default Footer;