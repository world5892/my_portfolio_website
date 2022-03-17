import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ProjectsNavbar from '../components/ProjectsNavbar';
import ProjectsSection from '../components/ProjectsSection';

function Projects() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes('projects/')) navigate('/projects/html');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <section className="projects page">
      <Header />
      <ProjectsNavbar />
      <Routes>
        <Route path=":type" element={<ProjectsSection />} />
      </Routes>
    </section>
  );
}

export default Projects;
