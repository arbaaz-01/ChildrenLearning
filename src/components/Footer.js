import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 FunLearn Kids. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

export default Footer;

