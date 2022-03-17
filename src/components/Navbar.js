import { useContext } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { AppContext } from '../context/AppContext';

function Navbar() {
  const { windowWidth } = useContext(AppContext);

  return windowWidth > 800 ? <DesktopNav /> : <MobileNav />;
}

export default Navbar;
