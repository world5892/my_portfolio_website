import { Link } from 'react-router-dom';
import NavList from './NavList';
import Logo from './Logo';
import { ReactComponent as AdminIcon } from '../img/SVG/user-plus.svg';

function DesktopNav() {
  const activeClass = (activeLink) =>
    activeLink.isActive ? 'navigation-desktop__link active-page' : 'navigation-desktop__link';

  return (
    <div className="navigation-desktop">
      <nav className="navigation-desktop__nav">
        <Link to="/">
          <Logo />
        </Link>

        <NavList activeClass={activeClass} desktop={true} />

        <Link to="login">
          <button className="btn-admin">
            <AdminIcon className="btn-admin__icon" />
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default DesktopNav;
