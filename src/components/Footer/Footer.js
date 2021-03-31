import { useLocation } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  const location = useLocation();
  let footerStyle = styles.footer;

  if (location.state && location.state.wanted) { footerStyle = styles.wantedfooter; }

  return (
    <footer className={footerStyle}>
      <span>
        RecyCool by Clifton Davies © 2021
      </span>
    </footer>
  );
};

export default Footer;
