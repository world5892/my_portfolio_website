import { useState } from 'react';
import NavList from './NavList';
import { ReactComponent as MenuIcon } from '../img/SVG/bars-solid.svg';
import { ReactComponent as CloseIcon } from '../img/SVG/cross.svg';

function MobileNav() {
  const [navOn, setNavOn] = useState(false);
  const activeClass = (activeLink) =>
    activeLink.isActive ? 'navigation-mobile__link active-page' : 'navigation-mobile__link';

  const menuIconStyles = {
    transform: navOn ? 'translate(-50%, -50%) scale(0)' : 'translate(-50%, -50%) scale(1)',
  };
  const closeIconStyles = {
    transform: navOn ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
  };

  const handleNavVisibilityClick = () => {
    setNavOn((prevState) => !prevState);
  };

  return (
    <div className="navigation-mobile">
      <button className="navigation-mobile__btn" onClick={handleNavVisibilityClick}>
        <MenuIcon className="navigation-mobile__icon" style={menuIconStyles} />

        <CloseIcon
          className="navigation-mobile__icon navigation-mobile__icon--close"
          style={closeIconStyles}
        />
      </button>
      <div
        className="navigation-mobile__background"
        style={{
          transform: navOn ? 'scale(100)' : 'scale(0)',
        }}
      ></div>
      <nav className="navigation-mobile__nav">
        <NavList
          activeClass={activeClass}
          desktop={false}
          navOn={navOn}
          onNavVisibilityClick={handleNavVisibilityClick}
        />
      </nav>
    </div>
  );
}

export default MobileNav;
