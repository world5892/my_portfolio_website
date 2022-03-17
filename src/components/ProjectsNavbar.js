import { NavLink } from 'react-router-dom';

function ProjectsNavbar() {
  const activeClass = (activeLink) =>
    activeLink.isActive ? 'projects__link active-subpage' : 'projects__link';

  return (
    <nav className="projects__nav mb-5">
      <span className="projects__line"></span>

      <ul className="projects__list">
        <li className="projects__item">
          <NavLink to="html" className={activeClass}>
            HTML/CSS
          </NavLink>
        </li>
        <li className="projects__item">
          <NavLink to="js" className={activeClass}>
            JavaScript
          </NavLink>
        </li>
        <li className="projects__item">
          <NavLink to="react" className={activeClass}>
            React
          </NavLink>
        </li>
        <li className="projects__item">
          <NavLink to="nodejs" className={activeClass}>
            Node.js
          </NavLink>
        </li>
      </ul>

      <span className="projects__line"></span>
    </nav>
  );
}

export default ProjectsNavbar;
