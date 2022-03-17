import { useLocation } from 'react-router-dom';
import BottomLine from './BottomLine';
import SectionHeading from './SectionHeading';
import IntroPar from './IntroPar';

function Header() {
  const location = useLocation();
  const sectionName = location.pathname.split('/')[1];

  return (
    <header className="main-header">
      <SectionHeading sectionName={sectionName} />
      <BottomLine />
      <IntroPar sectionName={sectionName} />
    </header>
  );
}

export default Header;
