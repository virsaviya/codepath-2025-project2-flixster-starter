import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>About us</h5>
        <a href='https://www.codepath.org/' target='_blank'>
          <i class='fa-solid fa-code'></i>
        </a>
      </div>
      <div>
        <h5>Find us</h5>
        <a href='https://github.com' target='_blank'>
          <i class='fa-brands fa-github'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
