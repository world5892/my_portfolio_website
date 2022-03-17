import NavListItem from './NavListItem';

function NavList({ desktop, activeClass, navOn, onNavVisibilityClick }) {
  const classes = desktop ? 'navigation-desktop' : 'navigation-mobile';
  const menuCategories = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const menuPaths = ['/', '/about', '/projects', '/skills', '/contact'];
  let mobileStyles;

  if (onNavVisibilityClick)
    mobileStyles = {
      transform: navOn ? 'scaleY(1)' : 'scaleY(0)',
      transitionDelay: navOn ? '.5s' : '0s',
    };

  return (
    <ul className={`${classes}__list`} style={mobileStyles}>
      {menuCategories.map((category, i) => (
        <NavListItem
          key={i}
          path={menuPaths[i]}
          classes={classes}
          activeClass={activeClass}
          onNavVisibilityClick={onNavVisibilityClick}
        >
          {category}
        </NavListItem>
      ))}
    </ul>
  );
}

export default NavList;
