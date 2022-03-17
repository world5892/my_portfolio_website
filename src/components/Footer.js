import { useLocation } from 'react-router-dom';

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer" style={{ display: pathname === '/' ? 'none' : 'block' }}>
      Copyright &copy; Rafał Wojtkowiak
    </footer>
  );
}

export default Footer;
