import { NavLink } from 'react-router-dom';

function NavListItem({ path, classes, activeClass, onNavVisibilityClick, children }) {
  const desktopView = classes.includes('desktop');

  if (desktopView) onNavVisibilityClick = null;

  return (
    <li className={`${classes}__item`}>
      <NavLink to={path} className={activeClass} onClick={onNavVisibilityClick}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavListItem;
